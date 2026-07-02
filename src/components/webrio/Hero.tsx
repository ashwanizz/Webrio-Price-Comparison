import React from "react";
import { motion } from "motion/react";
import { Search, Zap } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router";

export const Hero = () => {
  return (
    <section className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-900/30 rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px]" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20 bg-noise" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        {/* Floating Tag */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.4)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
          </span>
          <span className="text-sm font-medium text-purple-200">#1 Price Comparison Tool</span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-gray-400"
        >
          Compare Prices. <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.5)]">
            Save Smarter.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed"
        >
          Find the best deals instantly across Amazon & Flipkart with our AI-powered price tracking engine. Don't overpay ever again.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <Link to="/search">
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-14 px-8 text-lg bg-white text-black hover:bg-gray-100 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all hover:scale-105 cursor-pointer"
            >
              <Search className="mr-2 h-5 w-5" />
              Search Product
            </Button>
          </Link>
          <Link to="/top-deals">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 text-lg border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-md rounded-full shadow-[0_0_20px_rgba(168,85,247,0.15)] transition-all hover:border-purple-500/50 cursor-pointer"
            >
              <Zap className="mr-2 h-5 w-5 text-yellow-400" />
              Explore Deals
            </Button>
          </Link>
        </motion.div>

        {/* Floating Elements / UI Mockup Hint */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute -bottom-32 left-1/2 -translate-x-1/2 w-[80%] h-[300px] bg-gradient-to-t from-purple-900/20 to-transparent rounded-t-full blur-3xl -z-10"
        />
      </div>
    </section>
  );
};
