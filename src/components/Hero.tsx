
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full overflow-hidden pt-32 pb-16 md:py-40">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-4"
          >
            <div className="inline-flex items-center rounded-full px-3 py-1 text-sm bg-primary/10 text-primary w-fit">
              <span className="relative flex h-2 w-2 mr-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              New Premium Collection
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-balance">
              Experience<br className="hidden md:inline" /> Technology<br className="hidden md:inline" /> at its Finest
            </h1>
            
            <p className="text-muted-foreground text-lg max-w-md">
              Discover our curated selection of premium electronics designed to elevate your lifestyle and productivity.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-3">
              <Button asChild size="lg" className="group">
                <Link to="/products">
                  Shop Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button asChild variant="outline" size="lg">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto w-full max-w-lg lg:ml-auto relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden subtle-border bg-gradient-to-tr from-secondary/80 to-secondary/20 p-8 md:p-12">
              <motion.img
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{
                  repeat: Infinity,
                  repeatType: "reverse",
                  duration: 2,
                  ease: "easeInOut"
                }}
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Premium Headphones"
                className="w-full h-full object-contain drop-shadow-xl"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
