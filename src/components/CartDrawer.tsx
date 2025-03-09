
import React from 'react';
import { X, ShoppingBag, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/context/CartContext';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

const CartDrawer: React.FC = () => {
  const { cart, isCartOpen, setIsCartOpen, getCartTotal, clearCart } = useCart();
  
  const cartTotal = getCartTotal();
  
  if (!isCartOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Drawer */}
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        className="fixed top-0 right-0 h-full w-full sm:w-96 z-50 bg-background shadow-xl flex flex-col"
      >
        <div className="px-4 py-3 flex items-center justify-between border-b">
          <h2 className="font-semibold text-lg">Your Cart</h2>
          <Button 
            variant="ghost" 
            size="icon" 
            className="rounded-full"
            onClick={() => setIsCartOpen(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        {cart.length > 0 ? (
          <>
            <ScrollArea className="flex-grow">
              <div className="px-4">
                <AnimatePresence>
                  {cart.map((item) => (
                    <CartItem key={item.product.id} item={item} />
                  ))}
                </AnimatePresence>
              </div>
            </ScrollArea>
            
            <div className="border-t p-4">
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>Calculated at checkout</span>
                </div>
                <Separator />
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <Button 
                  asChild
                  className="w-full group"
                  onClick={() => setIsCartOpen(false)}
                >
                  <Link to="/checkout">
                    Checkout
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => setIsCartOpen(false)}
                >
                  Continue Shopping
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-muted-foreground text-xs w-full mt-2"
                  onClick={clearCart}
                >
                  Clear Cart
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-grow flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="font-medium text-lg mb-1">Your cart is empty</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Looks like you haven't added anything to your cart yet.
            </p>
            <Button 
              onClick={() => setIsCartOpen(false)}
              variant="outline"
            >
              Continue Shopping
            </Button>
          </div>
        )}
      </motion.div>
    </>
  );
};

export default CartDrawer;
