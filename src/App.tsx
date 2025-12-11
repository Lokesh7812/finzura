import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import ServiceDetail from "@/pages/ServiceDetail";
import SubServiceDetail from "@/pages/SubServiceDetail";
import Contact from "@/pages/Contact";
import Loader from "@/components/Loader";
import ScrollToTop from "@/components/ScrollToTop";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/services" component={Services} />
      <Route path="/services/:slug" component={ServiceDetail} />
      <Route path="/services/:category/:sub" component={SubServiceDetail} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ScrollToTop />
        <AnimatePresence mode="wait">
          {loading ? (
            <Loader key="loader" onComplete={() => setLoading(false)} />
          ) : (
            <div key="content">
              <Toaster />
              <Router />
            </div>
          )}
        </AnimatePresence>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
