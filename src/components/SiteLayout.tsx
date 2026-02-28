import { ReactNode } from "react";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

const SiteLayout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main className="pt-16">{children}</main>
    <SiteFooter />
  </div>
);

export default SiteLayout;
