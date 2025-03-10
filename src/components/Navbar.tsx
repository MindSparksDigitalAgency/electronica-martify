import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar: React.FC = () => {
  const { isCartOpen, setIsCartOpen, getCartCount } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartCount = getCartCount();

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        isScrolled ? "glass-effect backdrop-blur-md bg-white/80 dark:bg-black/70 shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
          >
            Electronica
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <Link to="/" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Home
            </Link>
            <Link to="/products" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Shop
            </Link>
            <Link to="/about" className="text-sm font-medium hover:text-primary/80 transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-sm font-medium hover:text-primary/80 transition-colors">
              Contact
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-2">
            {/* Search */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="w-48 p-2 pl-9 text-sm rounded-lg subtle-border bg-secondary/50 transition-all focus:w-64 focus:outline-none focus:ring-1 focus:ring-primary/20"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>

            {/* Cart Button */}
            <Button 
              onClick={toggleCart} 
              variant="ghost" 
              className="relative p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center animate-fade-in">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Button 
              onClick={toggleCart} 
              variant="ghost" 
              className="relative p-2 rounded-full hover:bg-secondary transition-colors"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>
            
            <Button 
              onClick={toggleMenu} 
              variant="ghost" 
              className="p-2 rounded-full hover:bg-secondary transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 rounded-lg glass-effect backdrop-blur-md animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="relative w-full mb-4">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="w-full p-2 pl-9 text-sm rounded-lg subtle-border bg-secondary/30 focus:outline-none focus:ring-1 focus:ring-primary/20"
                />
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              </div>
              
              <Link 
                to="/" 
                className="text-sm font-medium p-2 hover:bg-secondary/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className="text-sm font-medium p-2 hover:bg-secondary/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Shop
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium p-2 hover:bg-secondary/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact" 
                className="text-sm font-medium p-2 hover:bg-secondary/50 rounded-md transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
