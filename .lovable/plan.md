

## Thank You Page at /thank-you

Create a minimal thank you page with the project's existing dark editorial aesthetic.

### Implementation

**File: `src/pages/ThankYou.tsx`** (new)
- Full viewport height, centered content
- Black background (`bg-background`)
- Lime green accent for "confirmed" indicator (the brand's `#b8f000` via `text-primary`)
- White text for message
- Simple typography: headline in serif, body in sans-serif
- Message: "You're confirmed. Your guide is on its way. Check your inbox now."

**File: `src/App.tsx`**
- Add route: `<Route path="/thank-you" element={<ThankYou />} />`

### Design Details

```
┌─────────────────────────────┐
│                             │
│        [lime dot]           │
│                             │
│      You're confirmed.      │
│                             │
│    Your guide is on its     │
│          way.               │
│                             │
│     Check your inbox now.   │
│                             │
└─────────────────────────────┘
```

- Centered layout with generous vertical spacing
- No navigation or footer (clean confirmation page)
- Uses existing font families from tailwind config

