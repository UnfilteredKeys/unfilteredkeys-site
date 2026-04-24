import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./components/SiteLayout";
import Index from "./pages/Index";
import ThankYou from "./pages/ThankYou";
import Guide from "./pages/Guide";
import PlaybookPage from "@/pages/Playbook";
import BuyAHomePage from "@/pages/BuyAHome";
import RefinancePage from "@/pages/Refinance";
import LoanProgramsPage from "@/pages/LoanPrograms";
import AboutPage from "@/pages/About";
import CalculatorsPage from "@/pages/calculators";
import VALoanTexasPage from "@/pages/VALoanTexas";
import PhysicianLoanTexasPage from "@/pages/PhysicianLoanTexas";
import ConstructionRenovationTexasPage from "@/pages/ConstructionRenovationTexas";
import PcsToPortfolioPage from "@/pages/PcsToPortfolio";
import KilleenVaLoanPage from "@/pages/KilleenVaLoan";
import FirstTimeBuyersPage from "@/pages/FirstTimeBuyers";
import InvestorsPage from "@/pages/Investors";
import FhaLoanTexasPage from "@/pages/FhaLoanTexas";
import ConventionalLoanTexasPage from "@/pages/ConventionalLoanTexas";
import DownPaymentAssistanceTexasPage from "@/pages/DownPaymentAssistanceTexas";
import TempleTexasMortgagePage from "@/pages/TempleTexasMortgage";
import RoundRockMortgagePage from "@/pages/RoundRockMortgage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/playbook" element={<PlaybookPage />} />
            <Route path="/buy" element={<BuyAHomePage />} />
            <Route path="/refinance" element={<RefinancePage />} />
            <Route path="/loan-programs" element={<LoanProgramsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/va-loan-texas" element={<VALoanTexasPage />} />
            <Route path="/physician-loan-texas" element={<PhysicianLoanTexasPage />} />
            <Route path="/construction-renovation-loans-texas" element={<ConstructionRenovationTexasPage />} />
            <Route path="/pcs-to-portfolio" element={<PcsToPortfolioPage />} />
            <Route path="/killeen-va-loan" element={<KilleenVaLoanPage />} />
            <Route path="/first-time-buyers" element={<FirstTimeBuyersPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/fha-loan-texas" element={<FhaLoanTexasPage />} />
            <Route path="/conventional-loan-texas" element={<ConventionalLoanTexasPage />} />
            <Route path="/down-payment-assistance-texas" element={<DownPaymentAssistanceTexasPage />} />
            <Route path="/temple-tx-mortgage" element={<TempleTexasMortgagePage />} />
            <Route path="/round-rock-tx-mortgage" element={<RoundRockMortgagePage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
