import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import SiteLayout from "./components/SiteLayout";
import Index from "./pages/Index";

const ThankYou = lazy(() => import("./pages/ThankYou"));
const Guide = lazy(() => import("./pages/Guide"));
const PlaybookPage = lazy(() => import("@/pages/Playbook"));
const BuyAHomePage = lazy(() => import("@/pages/BuyAHome"));
const RefinancePage = lazy(() => import("@/pages/Refinance"));
const AboutPage = lazy(() => import("@/pages/About"));
const CalculatorsPage = lazy(() => import("@/pages/calculators"));
const VALoanTexasPage = lazy(() => import("@/pages/VALoanTexas"));
const VaLoanFaqTexasPage = lazy(() => import("@/pages/VaLoanFaqTexas"));
const PhysicianLoanTexasPage = lazy(() => import("@/pages/PhysicianLoanTexas"));
const PhysicianLoanAustinTxPage = lazy(() => import("@/pages/PhysicianLoanAustinTx"));
const PhysicianLoanSanAntonioTxPage = lazy(() => import("@/pages/PhysicianLoanSanAntonioTx"));
const PhysicianLoanDallasTxPage = lazy(() => import("@/pages/PhysicianLoanDallasTx"));
const PhysicianLoanHoustonTxPage = lazy(() => import("@/pages/PhysicianLoanHoustonTx"));
const ConstructionRenovationTexasPage = lazy(() => import("@/pages/ConstructionRenovationTexas"));
const PcsToPortfolioPage = lazy(() => import("@/pages/PcsToPortfolio"));
const KilleenVaLoanPage = lazy(() => import("@/pages/KilleenVaLoan"));
const CopperasCoveVALoanPage = lazy(() => import("@/pages/CopperasCoveVALoan"));
const ElPasoVALoanPage = lazy(() => import("@/pages/ElPasoVALoan"));
const PartnerDemoPage = lazy(() => import("@/pages/partners/Demo"));
const PartnerJoinPage = lazy(() => import("@/pages/partners/Join"));
const PartnerJulieJamesPage = lazy(() => import("@/pages/partners/JulieJames"));
const PartnerMakitaWingardPage = lazy(() => import("@/pages/partners/MakitaWingard"));
const FirstTimeBuyersPage = lazy(() => import("@/pages/FirstTimeBuyers"));
const InvestorsPage = lazy(() => import("@/pages/Investors"));
const FhaLoanTexasPage = lazy(() => import("@/pages/FhaLoanTexas"));
const ConventionalLoanTexasPage = lazy(() => import("@/pages/ConventionalLoanTexas"));
const DownPaymentAssistanceTexasPage = lazy(() => import("@/pages/DownPaymentAssistanceTexas"));
const TempleTexasMortgagePage = lazy(() => import("@/pages/TempleTexasMortgage"));
const RoundRockMortgagePage = lazy(() => import("@/pages/RoundRockMortgage"));
const GeorgetownMortgagePage = lazy(() => import("@/pages/GeorgetownMortgage"));
const SanAntonioMortgagePage = lazy(() => import("@/pages/SanAntonioMortgage"));
const HoustonMortgagePage = lazy(() => import("@/pages/HoustonMortgage"));
const DallasMortgagePage = lazy(() => import("@/pages/DallasMortgage"));
const AustinMortgagePage = lazy(() => import("@/pages/AustinMortgage"));
const VaAppraisalChecklistPage = lazy(() => import("@/pages/VaAppraisalChecklist"));
const VaFundingFeeCalculatorPage = lazy(() => import("@/pages/VaFundingFeeCalculator"));
const BahCalculatorKilleenTxPage = lazy(() => import("@/pages/BahCalculatorKilleenTx"));
const VaLoanCalculatorTexasPage = lazy(() => import("@/pages/VaLoanCalculatorTexas"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-[40vh]" aria-hidden="true" />}>
          <Routes>
            <Route element={<SiteLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/thank-you" element={<ThankYou />} />
            <Route path="/guide" element={<Guide />} />
            <Route path="/playbook" element={<PlaybookPage />} />
            <Route path="/buy" element={<BuyAHomePage />} />
            <Route path="/refinance" element={<RefinancePage />} />
            <Route path="/loan-programs" element={<Navigate to="/buy" replace />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/calculators" element={<CalculatorsPage />} />
            <Route path="/va-loan-texas" element={<VALoanTexasPage />} />
            <Route path="/va-loan-faq-texas" element={<VaLoanFaqTexasPage />} />
            <Route path="/physician-loan-texas" element={<PhysicianLoanTexasPage />} />
            <Route path="/physician-loan-austin-tx" element={<PhysicianLoanAustinTxPage />} />
            <Route path="/physician-loan-san-antonio-tx" element={<PhysicianLoanSanAntonioTxPage />} />
            <Route path="/physician-loan-dallas-tx" element={<PhysicianLoanDallasTxPage />} />
            <Route path="/physician-loan-houston-tx" element={<PhysicianLoanHoustonTxPage />} />
            <Route path="/construction-renovation-loans-texas" element={<ConstructionRenovationTexasPage />} />
            <Route path="/pcs-to-portfolio" element={<PcsToPortfolioPage />} />
            <Route path="/killeen-va-loan" element={<KilleenVaLoanPage />} />
              <Route path="/copperas-cove-va-loan" element={<CopperasCoveVALoanPage />} />
              <Route path="/el-paso-va-loan" element={<ElPasoVALoanPage />} />
              <Route path="/partners/demo" element={<PartnerDemoPage />} />
            <Route path="/partners/join" element={<PartnerJoinPage />} />
            <Route path="/partners/julie-james" element={<PartnerJulieJamesPage />} />
            <Route path="/partners/makita-wingard" element={<PartnerMakitaWingardPage />} />
            <Route path="/first-time-buyers" element={<FirstTimeBuyersPage />} />
            <Route path="/investors" element={<InvestorsPage />} />
            <Route path="/fha-loan-texas" element={<FhaLoanTexasPage />} />
            <Route path="/conventional-loan-texas" element={<ConventionalLoanTexasPage />} />
            <Route path="/down-payment-assistance-texas" element={<DownPaymentAssistanceTexasPage />} />
            <Route path="/temple-tx-mortgage" element={<TempleTexasMortgagePage />} />
            <Route path="/round-rock-tx-mortgage" element={<RoundRockMortgagePage />} />
            <Route path="/georgetown-tx-mortgage" element={<GeorgetownMortgagePage />} />
            <Route path="/san-antonio-tx-mortgage" element={<SanAntonioMortgagePage />} />
            <Route path="/houston-tx-mortgage" element={<HoustonMortgagePage />} />
            <Route path="/dallas-tx-mortgage" element={<DallasMortgagePage />} />
            <Route path="/austin-tx-mortgage" element={<AustinMortgagePage />} />
            <Route path="/va-appraisal-checklist" element={<VaAppraisalChecklistPage />} />
            <Route path="/va-funding-fee-calculator" element={<VaFundingFeeCalculatorPage />} />
            <Route path="/bah-calculator-killeen-tx" element={<BahCalculatorKilleenTxPage />} />
            <Route path="/va-loan-calculator-texas" element={<VaLoanCalculatorTexasPage />} />
            <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
