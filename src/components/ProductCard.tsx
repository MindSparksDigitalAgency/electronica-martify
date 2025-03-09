
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="group product-card rounded-xl overflow-hidden subtle-border bg-white dark:bg-black/40 hover:shadow-lg transition-all duration-300"
    >
      <Link to={`/product/${product.id}`} className="block h-full">
        <div className="relative aspect-square overflow-hidden bg-secondary/30">
          {discount > 0 && (
            <Badge variant="destructive" className="absolute top-3 left-3 z-10">
              {discount}% OFF
            </Badge>
          )}
          
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/60 flex items-center justify-center z-10">
              <span className="text-white font-semibold text-sm px-2 py-1 bg-black/60 rounded-md">
                Out of Stock
              </span>
            </div>
          )}
          
          <div className="w-full h-full p-6 flex items-center justify-center overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name}
              className="product-image w-full h-full object-contain transform"
            />
          </div>
          
          {product.inStock && (
            <Button
              onClick={handleAddToCart}
              size="icon"
              className="absolute bottom-3 right-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
            >
              <Plus className="h-4 w-4" />
            </Button>
          )}
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="font-medium text-base line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-muted-foreground text-sm line-clamp-1">
                {product.shortDescription}
              </p>
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center">
              <span className="font-semibold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="ml-2 text-muted-foreground line-through text-sm">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            
            <div className="flex items-center text-amber-500">
              <Star className="fill-current h-3.5 w-3.5 mr-1" />
              <span className="text-xs font-medium">{product.rating}</span>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
