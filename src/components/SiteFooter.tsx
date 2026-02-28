import { Link } from "react-router-dom";

const SiteFooter = () => (
  <footer className="border-t border-border py-16 px-6 md:px-12">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">
      <div>
        <p className="font-serif text-lg text-foreground">Shalanda Smith</p>
        <p className="text-xs tracking-widest uppercase text-muted-foreground mt-1">
          Founder of Unfiltered Keys™
        </p>
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
        <Link to="/apply" className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors">Apply</Link>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border">
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Shalanda Smith. All rights reserved.</p>
    </div>
  </footer>
);

export default SiteFooter;
