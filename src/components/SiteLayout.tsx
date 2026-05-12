import { Outlet } from "react-router-dom";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";
import StickyMobileCTA from "./StickyMobileCTA";

const SiteLayout = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main>
      <Outlet />
    </main>
    <SiteFooter />
    <StickyMobileCTA />
  </div>
);

export default SiteLayout;
