import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import KeyIcon from "./KeyIcon";

const navItems: { label: string; path: string; external?: boolean }[] = [
  { label: "Home", path: "/" },
  { label: "The Standard", path: "/standard" },
  { label: "The System", path: "/system" },
  { label: "Intelligence", path: "/intelligence" },
  { label: "Framework", path: "/framework" },
  { label: "For Agents", path: "/agents" },
  { label: "Apply", path: "https://scl.my1003app.com/554554/register", external: true },
];

const SiteNav = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-3">
          <KeyIcon size={22} color="hsl(var(--primary))" />
          <div className="flex flex-col leading-[0.88]">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-[18px] tracking-wider text-foreground">
              UNFILTERED
            </span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-[18px] tracking-wider text-primary">
              KEYS
            </span>
          </div>
        </Link>

        {/* Desktop */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-widest uppercase transition-colors text-muted-foreground hover:text-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-b border-border px-6 pb-6 pt-2 space-y-4">
          {navItems.map((item) =>
            item.external ? (
              <a
                key={item.path}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="block text-xs tracking-widest uppercase text-muted-foreground"
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={`block text-xs tracking-widest uppercase ${
                  location.pathname === item.path
                    ? "text-primary"
                    : "text-muted-foreground"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default SiteNav;
