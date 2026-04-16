import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page Not Found | Keys by Shalanda";
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
    <SEO {...seoMeta.notFound} />
    <section
      className="flex min-h-[60vh] items-center justify-center"
      style={{ background: "#1a3a5c" }}
    >
      <div className="text-center px-6">
        <h1 className="text-6xl font-bold mb-4" style={{ color: "#b5621e" }}>
          404
        </h1>
        <p className="text-xl mb-6" style={{ color: "#faf8f4" }}>
          This page doesn't exist — but your dream home might.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 rounded font-semibold transition-colors"
          style={{ background: "#b5621e", color: "#faf8f4" }}
        >
          Back to Home
        </Link>
      </div>
    </section>
    </>
  );
};

export default NotFound;
