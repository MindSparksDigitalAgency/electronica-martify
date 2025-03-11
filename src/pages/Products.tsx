import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import ShopSidebar from "@/components/ShopSidebar";
import ProductGrid from "@/components/ProductGrid";
import Pagination from "@/components/Pagination";
import { products } from "@/utils/data";

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("newest");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 9;

  // Filter berdasarkan kategori
  const filteredProducts =
    selectedCategory === "all"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  // Sorting produk
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low") return a.price - b.price;
    if (sortBy === "price-high") return b.price - a.price;
    return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
  });

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = sortedProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar */}
          <ShopSidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            setSortBy={setSortBy}
          />

          {/* Grid Produk */}
          <div className="md:col-span-3">
            <ProductGrid products={currentProducts} />
            <Pagination
              totalProducts={sortedProducts.length}
              productsPerPage={productsPerPage}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
