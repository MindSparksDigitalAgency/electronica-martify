
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  CreditCard, 
  ShieldCheck, 
  Package, 
  Check,
  Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import CartDrawer from '@/components/CartDrawer';
import { useCart } from '@/context/CartContext';
import { toast } from 'sonner';

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, getCartTotal, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('credit-card');
  
  // Form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    postalCode: '',
    country: '',
    cardName: '',
    cardNumber: '',
    expiry: '',
    cvv: '',
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (cart.length === 0) {
      toast.error('Your cart is empty');
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      clearCart();
      toast.success('Order placed successfully!');
      navigate('/');
    }, 1500);
  };
  
  const cartTotal = getCartTotal();
  const shipping = cartTotal > 100 ? 0 : 9.99;
  const tax = cartTotal * 0.05;
  const orderTotal = cartTotal + shipping + tax;
  
  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <h1 className="text-2xl font-bold mb-4">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">Add some products to your cart to proceed to checkout.</p>
          <Button onClick={() => navigate('/')}>
            Continue Shopping
          </Button>
        </div>
        <CartDrawer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <CartDrawer />
      
      <main className="container mx-auto px-4 md:px-6 pt-28 pb-16">
        <Button 
          variant="ghost" 
          size="sm" 
          className="mb-8 group"
          onClick={() => navigate(-1)}
        >
          <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
          Back
        </Button>
        
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order and get your products delivered.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Checkout Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-8"
          >
            <form onSubmit={handleSubmit}>
              <div className="bg-white dark:bg-black/40 rounded-lg border p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <Label htmlFor="email">Email Address</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              
              <div className="bg-white dark:bg-black/40 rounded-lg border p-6 mb-6">
                <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
                
                <div className="space-y-2 mb-4">
                  <Label htmlFor="address">Street Address</Label>
                  <Input 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input 
                      id="city" 
                      name="city" 
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">Postal Code</Label>
                    <Input 
                      id="postalCode" 
                      name="postalCode" 
                      value={formData.postalCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input 
                      id="country" 
                      name="country" 
                      value={formData.country}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-black/40 rounded-lg border p-6">
                <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                
                <RadioGroup 
                  value={paymentMethod} 
                  onValueChange={setPaymentMethod} 
                  className="mb-4"
                >
                  <div className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value="credit-card" id="credit-card" />
                    <Label htmlFor="credit-card" className="flex items-center cursor-pointer">
                      <CreditCard className="h-5 w-5 mr-2" />
                      Credit / Debit Card
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-secondary/50 transition-colors">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex items-center cursor-pointer">
                      <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.5015 7.5H18.0014H16.5014H15.0014H13.5014H12.0014H10.5014H9.00135H7.50135H6.00135H4.50135H3.00136" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M6.75 16.5H6.75135C7.16557 16.5 7.50135 16.8358 7.50135 17.25V17.25C7.50135 17.6642 7.16557 18 6.75135 18H6.75C6.33579 18 6 17.6642 6 17.25V17.25C6 16.8358 6.33579 16.5 6.75 16.5Z" fill="currentColor"></path>
                        <path d="M17.25 16.5H17.2514C17.6656 16.5 18.0014 16.8358 18.0014 17.25V17.25C18.0014 17.6642 17.6656 18 17.2514 18H17.25C16.8358 18 16.5 17.6642 16.5 17.25V17.25C16.5 16.8358 16.8358 16.5 17.25 16.5Z" fill="currentColor"></path>
                        <path d="M3 6.00001L3.0464 6.16551C3.59637 7.58302 3.59746 9.13646 3.04937 10.5548C2.95868 10.797 2.86799 11.0392 2.7773 11.2815C2.68661 11.5237 2.59592 11.7659 2.50523 12.0081C2.16086 12.8807 1.99969 13.7288 2.00005 14.6225C2.00005 14.7481 2.00005 14.8737 2.00005 14.9994C2.00005 15.125 2.00005 15.2506 2.00005 15.3762C2.00005 15.5019 2.00005 15.6275 2.00005 15.7531" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M22 6.00001L21.9536 6.16551C21.4037 7.58302 21.4026 9.13646 21.9506 10.5548C22.0413 10.797 22.132 11.0392 22.2227 11.2815C22.3134 11.5237 22.4041 11.7659 22.4948 12.0081C22.8392 12.8807 23.0003 13.7288 23 14.6225C23 14.7481 23 14.8737 23 14.9994C23 15.125 23 15.2506 23 15.3762C23 15.5019 23 15.6275 23 15.7531" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M7.50136 16.5H16.5014V7.5C16.5014 6.67157 15.8298 6 15.0014 6H9.00135C8.17293 6 7.50136 6.67157 7.50136 7.5V16.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M7.50136 9.00001H16.5014" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        <path d="M10.5014 16.5V12.75C10.5014 12.3358 10.8371 12 11.2514 12H12.7514C13.1656 12 13.5014 12.3358 13.5014 12.75V16.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                      </svg>
                      PayPal
                    </Label>
                  </div>
                </RadioGroup>
                
                {paymentMethod === 'credit-card' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardName">Name on Card</Label>
                      <Input 
                        id="cardName" 
                        name="cardName" 
                        value={formData.cardName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="cardNumber">Card Number</Label>
                      <Input 
                        id="cardNumber" 
                        name="cardNumber" 
                        placeholder="XXXX XXXX XXXX XXXX"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="expiry">Expiration Date</Label>
                        <Input 
                          id="expiry" 
                          name="expiry" 
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="cvv">CVV</Label>
                        <Input 
                          id="cvv" 
                          name="cvv" 
                          placeholder="XXX"
                          value={formData.cvv}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="mt-8">
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Complete Order'}
                </Button>
              </div>
            </form>
          </motion.div>
          
          {/* Order Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-4"
          >
            <div className="bg-white dark:bg-black/40 rounded-lg border p-6 sticky top-28">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              
              <div className="space-y-4 mb-4">
                {cart.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-16 h-16 rounded-md overflow-hidden subtle-border">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h4 className="text-sm font-medium line-clamp-1">{item.product.name}</h4>
                      <div className="flex justify-between items-center mt-1">
                        <span className="text-xs text-muted-foreground">Qty: {item.quantity}</span>
                        <span className="text-sm font-medium">${(item.product.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-4" />
              
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              
              <Separator className="my-4" />
              
              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>${orderTotal.toFixed(2)}</span>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 flex-shrink-0" />
                  <span>Secure checkout with encrypted payments</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Package className="h-4 w-4 flex-shrink-0" />
                  <span>Fast shipping with order tracking</span>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Info className="h-4 w-4 flex-shrink-0" />
                  <span>Need help? Contact our support team</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
