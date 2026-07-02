import React, { useState, useMemo } from "react";
import { products, Product } from "../data/products";
import { SearchFilters } from "../components/webrio/SearchFilters";
import { ProductGrid } from "../components/webrio/ProductGrid";
import { useNavigate } from "react-router";

export const SearchResults = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const navigate = useNavigate();

  // Derive categories
  const categories = useMemo(() => {
    return Array.from(new Set(products.map((p) => p.category)));
  }, []);

  // Filter and Sort Products
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const matchesSearch = product.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });

    if (sortOption === "price-low") {
      filtered.sort(
        (a, b) =>
          Math.min(a.amazonPrice, a.flipkartPrice) -
          Math.min(b.amazonPrice, b.flipkartPrice)
      );
    } else if (sortOption === "price-high") {
      filtered.sort(
        (a, b) =>
          Math.min(b.amazonPrice, b.flipkartPrice) -
          Math.min(a.amazonPrice, a.flipkartPrice)
      );
    } else if (sortOption === "diff-high") {
      filtered.sort((a, b) => {
        const savingsA =
          (Math.abs(a.amazonPrice - a.flipkartPrice) /
            Math.max(a.amazonPrice, a.flipkartPrice)) *
          100;
        const savingsB =
          (Math.abs(b.amazonPrice - b.flipkartPrice) /
            Math.max(b.amazonPrice, b.flipkartPrice)) *
          100;
        return savingsB - savingsA;
      });
    }

    return filtered;
  }, [searchQuery, selectedCategory, sortOption]);

  const handleProductClick = (product: Product) => {
    navigate(`/product/${product.id}`);
  };

  return (
    <main className="pt-24 pb-12 min-h-screen">
      <div className="container mx-auto px-4 mb-8">
          <h1 className="text-4xl font-bold mb-4">Search Results</h1>
          <p className="text-gray-400">Find the best prices for your favorite products.</p>
      </div>

      <SearchFilters
        onSearch={setSearchQuery}
        onCategoryChange={setSelectedCategory}
        onSortChange={setSortOption}
        categories={categories}
      />

      <ProductGrid
        products={filteredProducts}
        onOpenProduct={handleProductClick}
      />
    </main>
  );
};
