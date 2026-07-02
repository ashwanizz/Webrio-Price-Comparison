import React from "react";
import { useOutlet, useLocation } from "react-router";
import { AnimatePresence, motion } from "motion/react";
import { Navbar } from "../components/webrio/Navbar";
import { Footer } from "../components/webrio/Footer";

export const RootLayout = () => {
  const location = useLocation();
  const outlet = useOutlet();
  
  // Scroll to top on route change
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-purple-500/30">
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
      <Footer />
    </div>
  );
};
