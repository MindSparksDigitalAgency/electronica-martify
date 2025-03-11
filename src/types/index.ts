
export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  shortDescription: string;
  image: string;
  category: string;
  featured?: boolean;
  rating: number;
  inStock: boolean;
  specs?: Record<string, string>;
  dateAdded: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
  isCartOpen: boolean;
  setIsCartOpen: (isOpen: boolean) => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}
