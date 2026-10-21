// SQL and credentials are server-only. No database connections are opened in off mode.
export async function databaseCall(config, operation, body) {
  const { default: pg } = await import('pg');
  const connection = new URL(config.env.NETLIFY_DB_URL);
  if (['prefer', 'require', 'verify-ca'].includes(connection.searchParams.get('sslmode'))) {
    // Preserve pg 8's current certificate-verifying behavior across future driver upgrades.
    connection.searchParams.set('sslmode', 'verify-full');
  }
  const client = new pg.Client({
    connectionString: connection.toString(),
    connectionTimeoutMillis: 8000,
    query_timeout: 8000,
    statement_timeout: 8000,
  });
  // Connection errors are surfaced through the fixed storage_failure path, never raw logs.
  client.on('error', () => {});
  return runDatabaseCall(client, operation, body);
}

export async function runDatabaseCall(client, operation, body) {
  // Fixed statements and positional parameters; never interpolate identifiers from input.
  const statements = {
    enqueue_mortgage_conversion: ['select public.enqueue_mortgage_conversion($1,$2::jsonb)', [body.p_mode, JSON.stringify(body.p_event)]],
    claim_mortgage_conversion: ['select * from public.claim_mortgage_conversion($1,$2::uuid)', [body.p_mode, body.p_lease]],
    settle_mortgage_conversion: ['select public.settle_mortgage_conversion($1,$2,$3::uuid,$4,$5::integer)', [body.p_mode, body.p_id, body.p_lease, body.p_status, body.p_delay]],
  };
  const statement = statements[operation];
  if (!statement) throw new Error('storage_operation');
  try {
    await client.connect();
    const result = await client.query(...statement);
    return result.rows;
  } catch {
    throw new Error('storage_failure');
  } finally {
    await client.end().catch(() => {});
  }
}
