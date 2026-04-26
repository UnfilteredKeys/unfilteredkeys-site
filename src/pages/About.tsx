import { useEffect } from "react";
import AboutSidebar from "@/components/AboutSidebar";
import SEO from "@/components/SEO";
import { seoMeta } from "@/lib/seoData";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
   }, []);
  const headshot = "data:image/png;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAQMBAwDACIAAREBAhEB/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMAAAERAhEAPwD36iiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKM45NABRVS51KztFLT3CIB6sBXL6r8TfDmmBg16jsOynNAWOzoNeKap8e7GIstnA0hHQngVxupfHPXLkkWyrEO3rSuh2Z9NtIi8swH1NQNf2ifenjH/AAIV8jXfxQ8TXYIa+ZQfQ4rFl8U61OxZ7+Yk/wC0aVwsfZF14i0qzQtNewqB6sK5+8+KPhizB3X6MR2BzXyZPq19cjE11K49Cxqozk8liT7mjmCx9N3vxz0KEEQK0hHTisOX9oCMMfKscjtmvn4PxS76V2NJdT36L9oFS2HsOPY1Yf4/Wu0FbI59K+ed5pwYjvRdjsj38fH+L/nxqRPj/bHh7JvwrwAYPfBowQaOZhZH03pXxo0q/OJVEJ/2jiulsvHul3sgRJo8np8wr5CDsMYJH0qzFfTQglJXVh0IJFF2Fos+yY/Eenu20Tpn03Cr8V/bygbZFOfevjGLXdRQ7lupQR/tGtez8d63aEEXTnHqTRzBydj6/DAjIIIpc+9fO2h/Gm7t4xFeoX9xXV2XxktJWAlRk+tPmQuRnr1FcbpnxB0q/wAATqpPYmuiTWLRwCJVOenNO66Cs+poUVEtzE4yHGPrSrNG3RgfxpiJKKTI9aKAFooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigBaKKKAEooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAopKoajrNhpcLSXVykYAyckUAaFQXF3b2sZeeZEUDJLECvIfFPxvsrIPBpaiWQZAftXjmv/EHXdddvOu3WMn7gJApXA+iPEPxa8P6KrKk4nlGflTnmvJ9f+Omr3rMmnIsCHIB6mvJmd5WJdySepJpCApwDn3pNjsbOpeLdb1Vi11fTNnqNxArFZ3ckszMfUnNJk9TQxwBzUgJkCjdTSaKAFzxS54phbPSgZqguOBPrSE570mPWijQBc9qM0hIHNN3GlYB+cc5pwYetRqpY4qQAKOadkCHA81
return (
  <>
    <SEO {...seoMeta.about} />
<style>{`
    .about-page {
          font-family: 'Outfit', sans-serif;
          background: #faf8f4;
          color: #1c2630;
          line-height: 1.7;
          -webkit-font-smoothing: antialiased;
        }
        .about-page *, .about-page *::before, .about-page *::after {
          box-sizing: border-box; margin: 0; padding: 0;
        }

        /* HERO */
        .ab-hero {
          background: #1a2535;
          position: relative;
          overflow: hidden;
