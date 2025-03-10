
import React from 'react';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Electronica</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're passionate about bringing you the latest technology at competitive prices.
            </p>
          </motion.div>

          {/* Our Story */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-4">Our Story</h2>
                <p className="mb-4 text-muted-foreground">
                  Founded in 2015, Electronica began with a simple mission: to make quality electronics accessible to everyone. What started as a small operation has grown into an online destination trusted by thousands of customers.
                </p>
                <p className="text-muted-foreground">
                  We believe that technology should enhance your life, not complicate it. That's why we carefully curate our product selection and provide detailed information to help you make informed decisions.
                </p>
              </div>
              <div className="order-1 md:order-2">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Person using laptop" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.section>

          <Separator className="my-16" />

          {/* Our Values */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description: "We only stock products that meet our high standards for performance and reliability.",
                  icon: "🌟"
                },
                {
                  title: "Customer Satisfaction",
                  description: "Your happiness is our priority. We're not satisfied until you are.",
                  icon: "💯"
                },
                {
                  title: "Innovation",
                  description: "We're always on the lookout for the latest tech to keep our catalog fresh and exciting.",
                  icon: "💡"
                }
              ].map((value, index) => (
                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Our Team */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Meet Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  name: "Alex Johnson",
                  role: "Founder & CEO",
                  image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
                },
                {
                  name: "Sarah Chen",
                  role: "Head of Product",
                  image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
                },
                {
                  name: "Michael Rodriguez",
                  role: "Chief Technology Officer",
                  image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <div className="relative mb-4 mx-auto w-40 h-40 md:w-48 md:h-48 overflow-hidden rounded-full shadow-md">
                    <img 
                      src={member.image} 
                      alt={member.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </motion.section>

          <Separator className="my-16" />

          {/* Contact CTA */}
          <motion.section 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-primary/5 p-8 md:p-12 rounded-xl text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
            <p className="mb-6 max-w-2xl mx-auto text-muted-foreground">
              Have questions or feedback? We'd love to hear from you! Our customer service team is available 7 days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:support@electronica.com" className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90 transition-colors">
                Email Us
              </a>
              <a href="/contact" className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm hover:bg-accent hover:text-accent-foreground transition-colors">
                Contact Page
              </a>
            </div>
          </motion.section>
        </div>
      </main>
    </div>
  );
};

export default About;
