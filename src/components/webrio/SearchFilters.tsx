import React from "react";
import { Search, SlidersHorizontal, ArrowDownWideNarrow } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { motion } from "motion/react";

interface SearchFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
  categories: string[];
}

export const SearchFilters = ({
  onSearch,
  onCategoryChange,
  onSortChange,
  categories,
}: SearchFiltersProps) => {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 -mt-20 relative z-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="glass-panel p-6 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_0_40px_rgba(0,0,0,0.5)] ring-1 ring-white/5"
      >
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {/* Search Input */}
          <div className="relative flex-1 w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-purple-400 transition-colors" />
            <Input
              placeholder="Search for products (e.g. iPhone 14)..."
              className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 rounded-2xl focus-visible:ring-purple-500/50 focus-visible:border-purple-500 transition-all hover:bg-white/10"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-3 w-full md:w-auto">
            <Select onValueChange={onCategoryChange}>
              <SelectTrigger className="w-full md:w-[180px] h-14 bg-white/5 border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-purple-400" />
                  <SelectValue placeholder="Category" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={onSortChange}>
              <SelectTrigger className="w-full md:w-[180px] h-14 bg-white/5 border-white/10 text-white rounded-2xl hover:bg-white/10 hover:border-purple-500/30 transition-all">
                <div className="flex items-center gap-2">
                  <ArrowDownWideNarrow className="w-4 h-4 text-purple-400" />
                  <SelectValue placeholder="Sort By" />
                </div>
              </SelectTrigger>
              <SelectContent className="bg-[#1a1a1a] border-white/10 text-white">
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="diff-high">Best Deal %</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
