import { Outlet } from "react-router-dom";
import SiteNav from "./SiteNav";
import SiteFooter from "./SiteFooter";

const SiteLayout = () => (
  <div className="min-h-screen bg-background">
    <SiteNav />
    <main className="pt-16">
      <Outlet />
    </main>
    <SiteFooter />
  </div>
);

export default SiteLayout;
