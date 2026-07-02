import React from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router";
import { products, Product } from "../data/products";
import { ExternalLink, ArrowRight, TrendingUp, ChevronRight, Zap } from "lucide-react";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const DealCard = ({ product, badgeInfo }: { product: Product; badgeInfo: { text: string; color: string } }) => {
  const navigate = useNavigate();
  const diff = Math.abs(product.amazonPrice - product.flipkartPrice);
  const bestProvider = product.amazonPrice <= product.flipkartPrice ? "Amazon" : "Flipkart";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 backdrop-blur-md"
    >
      {/* Badge */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
        <Badge className={`${badgeInfo.color} text-white border-0 shadow-lg px-3 py-1 text-xs font-bold uppercase tracking-wider animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.5)]`}>
          {badgeInfo.text}
        </Badge>
      </div>

      {/* Image */}
      <div 
        className="relative aspect-[4/3] overflow-hidden bg-black/20 group-hover:bg-black/30 transition-colors cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60 z-10" />
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-xl font-bold text-white leading-tight group-hover:text-purple-300 transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
            {product.category}
          </p>
        </div>

        {/* Pricing Info */}
        <div className="flex flex-col gap-2 p-3 rounded-xl bg-white/5 border border-white/10">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> Amazon
            </span>
            <span className={`font-mono text-sm ${bestProvider === 'Amazon' ? 'font-bold text-purple-400' : 'text-gray-400'}`}>
              ₹{product.amazonPrice.toLocaleString()} {bestProvider === 'Amazon' && <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1 rounded ml-1">(Best)</span>}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" /> Flipkart
            </span>
            <span className={`font-mono text-sm ${bestProvider === 'Flipkart' ? 'font-bold text-purple-400' : 'text-gray-400'}`}>
              ₹{product.flipkartPrice.toLocaleString()} {bestProvider === 'Flipkart' && <span className="text-[10px] bg-purple-500/20 text-purple-300 px-1 rounded ml-1">(Best)</span>}
            </span>
          </div>
          <div className="mt-1 pt-1 border-t border-white/10 text-right">
            <span className="text-sm font-bold text-green-400 drop-shadow-[0_0_5px_rgba(74,222,128,0.5)]">
              Save ₹{diff.toLocaleString()}
            </span>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-auto flex flex-col gap-2 pt-2">
          <Button 
            className="w-full bg-white/10 text-white hover:bg-white/20 transition-all font-bold backdrop-blur-sm"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            View Details <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <a href={product.amazonLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full border-yellow-500/30 text-yellow-500 hover:bg-yellow-500/10 hover:border-yellow-500/50 hover:text-yellow-400 text-xs h-9">
                Buy on Amazon <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </a>
            <a href={product.flipkartLink} target="_blank" rel="noopener noreferrer" className="w-full">
              <Button variant="outline" className="w-full border-blue-500/30 text-blue-500 hover:bg-blue-500/10 hover:border-blue-500/50 hover:text-blue-400 text-xs h-9">
                Buy on Flipkart <ExternalLink className="w-3 h-3 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const TopDeals = () => {
  // Deal selection logic: difference >= 1000
  const deals = products.filter(p => Math.abs(p.amazonPrice - p.flipkartPrice) >= 1000)
    .sort((a, b) => {
      const diffA = Math.abs(a.amazonPrice - a.flipkartPrice);
      const diffB = Math.abs(b.amazonPrice - b.flipkartPrice);
      return diffB - diffA; // Highest savings first
    });

  const trendingDeals = deals.slice(0, 5); // Top 5 for trending

  const getBadge = (index: number) => {
    if (index % 4 === 0) return { text: "🔥 Hot Deal", color: "bg-red-500" };
    if (index % 4 === 1) return { text: "⚡ Price Drop", color: "bg-yellow-500" };
    if (index % 4 === 2) return { text: "💎 Best Value", color: "bg-blue-500" };
    return { text: "🏷 Limited Offer", color: "bg-purple-500" };
  };

  return (
    <main className="pt-24 pb-12 min-h-screen text-white overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/10 backdrop-blur-md mb-4"
          >
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium text-purple-200">Daily Updated</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
          >
            🔥 Today's Top Deals
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto"
          >
            Best price drops across Amazon and Flipkart
          </motion.p>
        </div>

        {/* Trending Deals Slider */}
        {trendingDeals.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="text-purple-400" />
              <h2 className="text-2xl font-bold">⚡ Trending Deals</h2>
            </div>
            
            {/* Horizontal Scroll Area */}
            <div className="flex overflow-x-auto gap-6 pb-6 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none'] -mx-4 px-4 sm:mx-0 sm:px-0">
              {trendingDeals.map((product, idx) => (
                <div key={product.id} className="min-w-[300px] sm:min-w-[350px] snap-center shrink-0">
                  <DealCard product={product} badgeInfo={getBadge(idx)} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Deals Grid */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            All Massive Savings <ChevronRight className="text-gray-500 w-5 h-5 ml-2 mt-1" />
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {deals.map((product, index) => (
              <DealCard
                key={product.id}
                product={product}
                badgeInfo={getBadge(index)}
              />
            ))}
          </div>
          
          {deals.length === 0 && (
            <div className="text-center py-20 text-gray-500">
              <p>No major deals found today. Check back tomorrow!</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
