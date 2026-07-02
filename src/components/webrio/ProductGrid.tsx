import React from "react";
import { motion } from "motion/react";
import { ProductCard } from "./ProductCard";
import { Product } from "../../data/products";

interface ProductGridProps {
  products: Product[];
  onOpenProduct: (product: Product) => void;
}

export const ProductGrid = ({ products, onOpenProduct }: ProductGridProps) => {
  return (
    <div className="container mx-auto px-4 py-12 relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onOpen={onOpenProduct}
          />
        ))}
      </div>
      
      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mb-4">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2">No products found</h3>
          <p className="text-gray-400">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
};
