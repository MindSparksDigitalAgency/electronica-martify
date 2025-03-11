import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShoppingBag,
  Check,
  ShieldCheck,
  Truck,
  RefreshCw,
  Star,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/Navbar";
import CartDrawer from "@/components/CartDrawer";
import { useCart } from "@/context/CartContext";
import { products } from "@/utils/data";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex flex-col items-center justify-center p-6">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The product you are looking for doesn't exist or has been removed.
          </p>
          <Button onClick={() => navigate("/")}>Return to Homepage</Button>
        </div>
        <CartDrawer />
      </div>
    );
  }

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const discount = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : 0;

  const handleBuyViaWhatsApp = () => {
    const phoneNumber = "6281234567890"; // Ganti dengan nomor WhatsApp toko
    const message = `Halo, saya ingin membeli *${product.name}* sebanyak *${quantity}* pcs. Apakah masih tersedia?`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative"
          >
            <div className="aspect-square overflow-hidden rounded-xl bg-secondary/30 subtle-border flex items-center justify-center p-12">
              <motion.img
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                src={product.image}
                alt={product.name}
                className="w-4/5 h-4/5 object-contain drop-shadow-lg"
              />
            </div>

            {discount > 0 && (
              <Badge variant="destructive" className="absolute top-4 left-4">
                {discount}% OFF
              </Badge>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <div className="flex items-center gap-2 mb-3">
              <Badge variant="outline" className="rounded-sm">
                {product.category}
              </Badge>
              <div className="flex items-center text-amber-500">
                <Star className="fill-current h-4 w-4 mr-1" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-3">
              {product.name}
            </h1>
            <p className="text-muted-foreground mb-6">
              {product.shortDescription}
            </p>

            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl font-bold">
                ${product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <span className="text-muted-foreground line-through text-lg">
                  ${product.originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <Separator className="mb-6" />

            <div className="mb-6">
              <h3 className="font-medium mb-3">Description</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {product.description}
              </p>
            </div>

            {product.specs && (
              <div className="mb-6">
                <h3 className="font-medium mb-3">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                  {Object.entries(product.specs).map(([key, value]) => (
                    <div key={key} className="flex justify-between">
                      <span className="text-sm text-muted-foreground">
                        {key}:
                      </span>
                      <span className="text-sm font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <Separator className="mb-6" />

            {product.inStock ? (
              <>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center border rounded-md">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-none"
                      onClick={handleDecrement}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>

                    <span className="w-12 text-center text-sm font-medium">
                      {quantity}
                    </span>

                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-9 w-9 rounded-none"
                      onClick={handleIncrement}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>

                  <Button className="flex-1 gap-2" onClick={handleAddToCart}>
                    <ShoppingBag className="h-4 w-4" />
                    Add to Cart
                  </Button>

                  <Button
                    variant="outline"
                    className="flex-1 gap-2"
                    onClick={handleBuyViaWhatsApp}
                  >
                    <MessageCircle className="h-4 w-4 text-green-500" />
                    Beli via WhatsApp
                  </Button>
                </div>

                <div className="flex items-center gap-1 text-emerald-600 mb-6">
                  <Check className="h-4 w-4" />
                  <span className="text-sm font-medium">
                    In Stock and ready to ship
                  </span>
                </div>
              </>
            ) : (
              <div className="mb-6">
                <Button disabled className="w-full">
                  Out of Stock
                </Button>
                <p className="text-sm text-muted-foreground mt-2 text-center">
                  This product is currently out of stock. Please check back
                  later.
                </p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { icon: ShieldCheck, text: "1 Year Warranty" },
                { icon: Truck, text: "Free Shipping" },
                { icon: RefreshCw, text: "30-Day Returns" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center p-3 rounded-lg bg-secondary/50"
                >
                  <item.icon className="h-5 w-5 mb-2 text-muted-foreground" />
                  <span className="text-xs font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
