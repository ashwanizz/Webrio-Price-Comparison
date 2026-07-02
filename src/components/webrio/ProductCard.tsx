import React from "react";
import { motion } from "motion/react";
import { ExternalLink, ShoppingCart, TrendingDown, ArrowRight } from "lucide-react";
import { Product } from "../../data/products";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";

import { ImageWithFallback } from "../figma/ImageWithFallback";

interface ProductCardProps {
  product: Product;
  onOpen: (product: Product) => void;
  badge?: string;
  badgeColor?: string;
}

export const ProductCard = ({ product, onOpen, badge, badgeColor = "bg-purple-500" }: ProductCardProps) => {
  const amazonPrice = product.amazonPrice;
  const flipkartPrice = product.flipkartPrice;
  const bestPrice = Math.min(amazonPrice, flipkartPrice);
  const bestProvider = amazonPrice <= flipkartPrice ? "Amazon" : "Flipkart";
  const diff = Math.abs(amazonPrice - flipkartPrice);
  const percentSave = Math.round((diff / Math.max(amazonPrice, flipkartPrice)) * 100);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)] transition-all duration-300 backdrop-blur-md"
    >
      {/* Badges */}
      <div className="absolute top-4 right-4 z-10 flex flex-col items-end gap-2">
        {badge && (
            <Badge className={`${badgeColor} text-white border-0 shadow-lg px-3 py-1 text-xs font-bold uppercase tracking-wider animate-pulse shadow-[0_0_15px_rgba(168,85,247,0.5)]`}>
                {badge}
            </Badge>
        )}
        <Badge className="bg-green-500/20 text-green-400 border border-green-500/50 backdrop-blur-md shadow-lg shadow-green-900/20 px-3 py-1 text-xs font-bold uppercase tracking-wider">
          Save {percentSave}%
        </Badge>
      </div>

      {/* Image Area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-black/20 group-hover:bg-black/30 transition-colors cursor-pointer" onClick={() => onOpen(product)}>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60 z-10" />
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        
        {/* Quick View Button on Hover */}
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
          <Button
            onClick={(e) => { e.stopPropagation(); onOpen(product); }}
            variant="secondary"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 rounded-full px-6"
          >
            Quick View
          </Button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div>
          <h3 className="text-lg font-bold text-white leading-tight group-hover:text-purple-300 transition-colors line-clamp-1 mb-1">
            {product.name}
          </h3>
          <p className="text-xs text-gray-400 uppercase tracking-wider font-medium">
            {product.category}
          </p>
        </div>

        {/* Price Comparison */}
        <div className="space-y-2 flex-1">
          {/* Amazon Row */}
          <a 
            href={product.amazonLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center justify-between p-2 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group/link ${bestProvider === 'Amazon' ? 'bg-purple-500/10 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:bg-purple-500/20' : 'bg-transparent border border-white/5 hover:bg-white/5 hover:border-white/20'}`}
          >
            <span className="text-xs font-medium text-gray-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 shadow-[0_0_5px_rgba(234,179,8,0.5)]" /> 
              Amazon <ExternalLink className="w-3 h-3 opacity-0 -ml-1 group-hover/link:opacity-50 group-hover/link:ml-0 transition-all" />
            </span>
            <span className={`font-mono font-bold text-sm ${bestProvider === 'Amazon' ? 'text-purple-300' : 'text-gray-400'}`}>
              ₹{amazonPrice.toLocaleString()}
            </span>
          </a>

          {/* Flipkart Row */}
          <a 
            href={product.flipkartLink} 
            target="_blank" 
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className={`flex items-center justify-between p-2 rounded-lg transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer group/link ${bestProvider === 'Flipkart' ? 'bg-purple-500/10 border border-purple-500/30 shadow-[0_0_10px_rgba(168,85,247,0.1)] hover:bg-purple-500/20' : 'bg-transparent border border-white/5 hover:bg-white/5 hover:border-white/20'}`}
          >
            <span className="text-xs font-medium text-gray-300 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]" /> 
              Flipkart <ExternalLink className="w-3 h-3 opacity-0 -ml-1 group-hover/link:opacity-50 group-hover/link:ml-0 transition-all" />
            </span>
            <span className={`font-mono font-bold text-sm ${bestProvider === 'Flipkart' ? 'text-purple-300' : 'text-gray-400'}`}>
              ₹{flipkartPrice.toLocaleString()}
            </span>
          </a>
        </div>

        {/* Action */}
        <div className="mt-auto pt-4 border-t border-white/10 flex items-end justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 font-bold uppercase mb-0.5">Best Deal</span>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 tracking-tight">
              ₹{bestPrice.toLocaleString()}
            </span>
          </div>
          <Button 
            className="bg-white text-black hover:bg-purple-500 hover:text-white transition-all shadow-lg shadow-purple-900/10 hover:shadow-purple-500/30 rounded-full px-5 h-10 font-bold"
            onClick={() => onOpen(product)}
          >
            Details <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};
