
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';
import { Product } from '@/types';
import { categories } from '@/utils/data';

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  products,
  title = "Featured Products",
  subtitle = "Discover our selection of premium electronics"
}) => {
  const [selectedCategory, setSelectedCategory] = useState("");
  
  const filteredProducts = selectedCategory 
    ? products.filter(product => product.category === selectedCategory)
    : products;

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        {/* Category filter */}
        <div className="flex justify-center flex-wrap gap-2 mb-10">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.value ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.value)}
              className="rounded-full transition-all"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No products found in this category.</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={() => setSelectedCategory("")}
            >
              View All Products
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
