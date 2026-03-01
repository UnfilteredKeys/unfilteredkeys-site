import { Link } from "react-router-dom";
import KeyIcon from "./KeyIcon";
import headshot from "@/assets/headshot.png";

const SiteFooter = () => (
  <footer className="border-t border-border py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      <div>
        <div className="flex items-center gap-3 mb-2">
          <KeyIcon size={20} color="hsl(var(--primary))" />
          <div className="flex flex-col leading-[0.88]">
            <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-[16px] tracking-wider text-foreground">
              UNFILTERED
            </span>
            <span style={{ fontFamily: "'Bebas Neue', sans-serif" }} className="text-[16px] tracking-wider text-primary">
              KEYS
            </span>
          </div>
        </div>
        <div className="flex items-center gap-3 mt-3">
          <img src={headshot} alt="Shalanda Smith" className="w-10 h-10 rounded-full object-cover" />
          <p className="text-xs tracking-widest uppercase text-muted-foreground">
            Founded by Shalanda Smith · NMLS# 554554
          </p>
        </div>
        <p className="text-xs text-muted-foreground mt-4 max-w-xs leading-relaxed">
          The Unfiltered Mortgage Standard™<br />
          The Structured Mortgage System™
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <Link to="/standard" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">The Standard</Link>
        <Link to="/system" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">The System</Link>
        <Link to="/intelligence" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">Intelligence</Link>
        <Link to="/framework" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">Framework</Link>
        <Link to="/agents" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">For Agents</Link>
        <a href="https://scl.my1003app.com/554554/register" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">Apply</a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Shalanda Smith. All rights reserved.</p>
    </div>
  </footer>
);

export default SiteFooter;
