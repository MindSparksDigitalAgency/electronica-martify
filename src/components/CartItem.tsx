
import React from 'react';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/CartContext';
import { CartItem as CartItemType } from '@/types';
import { motion } from 'framer-motion';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { updateQuantity, removeFromCart } = useCart();
  const { product, quantity } = item;

  const handleIncrement = () => {
    updateQuantity(product.id, quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      updateQuantity(product.id, quantity - 1);
    } else {
      removeFromCart(product.id);
    }
  };

  return (
    <motion.div 
      layout
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex gap-4 py-4 border-b last:border-0"
    >
      <div className="w-20 h-20 rounded-lg overflow-hidden subtle-border">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>
      
      <div className="flex-grow">
        <h3 className="font-medium text-sm line-clamp-1">{product.name}</h3>
        <p className="text-xs text-muted-foreground line-clamp-1">{product.shortDescription}</p>
        
        <div className="flex items-center justify-between mt-2">
          <span className="font-semibold">${product.price.toFixed(2)}</span>
          
          <div className="flex items-center">
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-full"
              onClick={handleDecrement}
            >
              <Minus className="h-3 w-3" />
            </Button>
            
            <span className="w-8 text-center text-sm">
              {quantity}
            </span>
            
            <Button 
              variant="outline" 
              size="icon" 
              className="h-7 w-7 rounded-full"
              onClick={handleIncrement}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </div>
      
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 text-muted-foreground hover:text-destructive self-start"
        onClick={() => removeFromCart(product.id)}
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </motion.div>
  );
};

export default CartItem;
