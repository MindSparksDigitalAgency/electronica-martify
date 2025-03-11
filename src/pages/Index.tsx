import React from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import CartDrawer from "@/components/CartDrawer";
import { products } from "@/utils/data";

const Index = () => {
  const featuredProducts = products.filter((product) => product.featured);

  return (
    <div className="min-h-screen">
      <Navbar />
      <CartDrawer />
      <main>
        <Hero />

        <ProductGrid
          products={featuredProducts}
          title="Featured Products"
          subtitle="Discover our premium selection of the latest electronics"
        />

        {/* Banner Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-2 md:order-1"
              >
                <h2 className="text-3xl font-bold mb-4">
                  Premium Quality Electronics
                </h2>
                <p className="text-muted-foreground mb-6">
                  We offer only the best selection of electronic products from
                  leading brands. Each item in our collection is chosen for its
                  exceptional quality, innovative features, and lasting
                  performance.
                </p>
                <ul className="space-y-3">
                  {[
                    "Industry-leading warranties on all products",
                    "Expert technical support available 24/7",
                    "Free shipping on orders over $100",
                    "Hassle-free returns within 30 days",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mr-3 mt-0.5">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3 w-3"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="order-1 md:order-2"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden subtle-border bg-gradient-to-br from-white to-secondary/60 dark:from-black/80 dark:to-secondary/20 p-8">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                    alt="Premium Electronics"
                    className="w-full h-full object-cover rounded-xl shadow-lg"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ProductGrid
          products={products}
          title="Browse All Products"
          subtitle="Find the perfect device to suit your needs"
        />
      </main>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-gray-800 text-lg font-semibold mb-4">
                Tran Jaya Elektronik
              </h3>
              <h3 className="text-lg font-semibold mb-4">
                <img
                  src="./logo.png"
                  className="w-[90px] h-[90px]"
                  alt="Tran Jaya Logo"
                />
              </h3>
              <p className="text-muted-foreground text-sm">
                Premium electronics store offering the latest technology
                products with exceptional quality and service.
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Shop</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    All Products
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Featured Items
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    New Arrivals
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Sale Items
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Returns & Exchanges
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Email: cs@gudangelektronik123.co.id</li>
                <li>Phone: 0831-4479-3677</li>
                <li>Hours: Mon-Fri 7am-6pm EST</li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Tran Jaya Electronik. All rights
              reserved.
            </p>

            <div className="flex space-x-4 mt-4 md:mt-0">
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
