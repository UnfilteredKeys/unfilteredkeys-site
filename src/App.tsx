import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Standard from "./pages/Standard";
import System from "./pages/System";
import Intelligence from "./pages/Intelligence";
import Framework from "./pages/Framework";
import Agents from "./pages/Agents";

import Strategy from "./pages/Strategy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/standard" element={<Standard />} />
          <Route path="/system" element={<System />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/framework" element={<Framework />} />
          <Route path="/agents" element={<Agents />} />
          
          <Route path="/strategy" element={<Strategy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
