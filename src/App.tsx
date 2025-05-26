
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TrackVisits from "./pages/TrackVisits";
import Rewards from "./pages/Rewards";
import Analytics from "./pages/Analytics";
import Pitch from "./pages/Pitch";
import Profile from "./pages/Profile";
import Eatery from "./pages/Eatery";
import Challenges from "./pages/Challenges";
import Leaderboard from "./pages/Leaderboard";
import Social from "./pages/Social";
import FAQ from "./pages/FAQ";
import EasterEgg from "./pages/EasterEgg";
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
          <Route path="/track" element={<TrackVisits />} />
          <Route path="/rewards" element={<Rewards />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/pitch" element={<Pitch />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/eatery" element={<Eatery />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/social" element={<Social />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/easter-egg" element={<EasterEgg />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
