import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ backgroundColor: '#1a2535' }}>
      <div className="text-center max-w-lg space-y-6">
        <div className="w-3 h-3 rounded-full mx-auto" style={{ backgroundColor: '#b5621e' }} />
        <h1 className="text-4xl md:text-5xl" style={{ fontFamily: "'Lora', serif", color: '#f0ede6' }}>
          You're confirmed.
        </h1>
        <p className="text-lg leading-relaxed" style={{ color: '#f0ede6', opacity: 0.7 }}>
          Your download is on its way.
        </p>
        <p className="font-mono text-sm tracking-widest uppercase" style={{ color: '#b5621e' }}>
          Check your inbox now.
        </p>
        <div className="pt-8">
          <Link
            to="/"
            className="text-xs tracking-widest uppercase hover:opacity-80 transition-opacity"
            style={{ color: '#f0ede6', opacity: 0.4 }}
          >
            While you wait — shalandasmith.com
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
