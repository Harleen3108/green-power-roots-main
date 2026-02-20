import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Standard Page Imports
import Index from "./pages/Index";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";

// 🟢 NEW: Detailed Product Page Imports
import BiodieselPlant from "./pages/Products/BiodieselPlant";
import EWaste from "./pages/Products/EWaste";
import Rentals from "./pages/Products/Rentals";
import Lab from "./pages/Products/Lab";

import SiteNavbar from "./components/SiteNavbar";
import WhatsAppButton from "./components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SiteNavbar />
        <Routes>
          {/* Main Pages */}
          <Route path="/" element={<Index />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/contact" element={<ContactPage />} />

          {/* 🟢 NEW: Product Detail Routes */}
          {/* These paths match the links in your SiteNavbar "Pop-Out" menu */}
          <Route path="/products/biodiesel" element={<BiodieselPlant />} />
          <Route path="/products/e-waste" element={<EWaste />} />
          <Route path="/products/rentals" element={<Rentals />} />
          <Route path="/products/lab" element={<Lab />} />

          {/* 404 Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
        {/* Footer is handled inside individual pages to prevent double-renders */}
        <WhatsAppButton />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
