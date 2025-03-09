
import { Product } from "@/types";

export const products: Product[] = [
  {
    id: 1,
    name: "Ultra Premium Wireless Headphones",
    price: 349.99,
    originalPrice: 399.99,
    shortDescription: "Incredible sound quality with active noise cancellation",
    description: "Experience unparalleled audio quality with our flagship wireless headphones. Featuring advanced active noise cancellation, premium materials, and up to 30 hours of battery life. The perfect companion for audiophiles and professionals who demand the best sound experience.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Audio",
    featured: true,
    rating: 4.9,
    inStock: true,
    specs: {
      "Connectivity": "Bluetooth 5.2",
      "Battery Life": "30 hours",
      "Noise Cancellation": "Advanced ANC",
      "Weight": "250g",
      "Colors": "Matte Black, Silver, Navy Blue"
    }
  },
  {
    id: 2,
    name: "Smart 4K Ultra HD TV",
    price: 1299.99,
    originalPrice: 1499.99,
    shortDescription: "Stunning 4K resolution with smart capabilities",
    description: "Transform your home entertainment with our premium 65-inch 4K Smart TV. Featuring OLED technology for vibrant colors and deep blacks, integrated with the latest smart platform for seamless streaming from all your favorite services. The ultra-thin design with minimal bezels creates an immersive viewing experience.",
    image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "TV & Home Theater",
    featured: true,
    rating: 4.8,
    inStock: true,
    specs: {
      "Screen Size": "65 inches",
      "Resolution": "4K Ultra HD",
      "Panel Type": "OLED",
      "HDR": "Dolby Vision, HDR10+",
      "Refresh Rate": "120Hz"
    }
  },
  {
    id: 3,
    name: "Pro Performance Laptop",
    price: 1899.99,
    originalPrice: 2099.99,
    shortDescription: "Powerful performance in an ultra-thin design",
    description: "Meet the ultimate professional laptop. Featuring the latest high-performance processor, dedicated graphics, and a stunning 16-inch Retina display. At just 16.8mm thin, it combines incredible power with remarkable portability. Perfect for creative professionals, developers, and anyone who demands the best from their technology.",
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Computers",
    featured: true,
    rating: 4.9,
    inStock: true,
    specs: {
      "Processor": "Latest Gen Core i9",
      "RAM": "32GB DDR5",
      "Storage": "1TB SSD",
      "Display": "16-inch Retina XDR",
      "Graphics": "Dedicated 8GB VRAM"
    }
  },
  {
    id: 4,
    name: "Advanced Smartwatch",
    price: 399.99,
    originalPrice: 449.99,
    shortDescription: "Health monitoring and smart features on your wrist",
    description: "The ultimate health and productivity companion. This advanced smartwatch features continuous heart rate monitoring, ECG capability, sleep tracking, and blood oxygen measurement. With a beautiful always-on display and up to 5 days of battery life, it keeps you connected and informed without compromising on style.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Wearables",
    rating: 4.7,
    inStock: true,
    specs: {
      "Display": "1.9-inch AMOLED",
      "Water Resistance": "5 ATM",
      "Battery Life": "5 days",
      "Sensors": "Heart rate, ECG, SpO2",
      "Connectivity": "Bluetooth, WiFi, NFC"
    }
  },
  {
    id: 5,
    name: "Premium Digital Camera",
    price: 1299.99,
    originalPrice: 1399.99,
    shortDescription: "Professional-grade photography in a compact body",
    description: "Capture stunning images with this professional-grade mirrorless camera. With a 45MP full-frame sensor, in-body stabilization, and 8K video recording capability, it's the perfect tool for both photographers and videographers. The advanced autofocus system with eye tracking ensures you never miss the perfect shot.",
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Cameras",
    rating: 4.8,
    inStock: true,
    specs: {
      "Sensor": "45MP Full-Frame",
      "Video": "8K 30fps, 4K 120fps",
      "Stabilization": "5-axis IBIS",
      "Autofocus": "Hybrid Phase-Detect",
      "Weight": "680g"
    }
  },
  {
    id: 6,
    name: "Wireless Earbuds Pro",
    price: 199.99,
    originalPrice: 249.99,
    shortDescription: "Immersive sound with active noise cancellation",
    description: "Experience true wireless freedom with our premium earbuds. Featuring active noise cancellation, transparency mode, and spatial audio for an immersive listening experience. The ergonomic design ensures all-day comfort, while the water and sweat resistance make them perfect for workouts. Includes wireless charging case with 24 hours of total battery life.",
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Audio",
    rating: 4.7,
    inStock: true,
    specs: {
      "Connectivity": "Bluetooth 5.2",
      "Battery": "6 hours (ANC on), 24 hours with case",
      "Water Resistance": "IPX4",
      "Features": "ANC, Transparency, Spatial Audio",
      "Colors": "White, Black, Blue"
    }
  },
  {
    id: 7,
    name: "Ultra-Thin Tablet Pro",
    price: 799.99,
    originalPrice: 899.99,
    shortDescription: "Powerful performance in a lightweight design",
    description: "The ultimate creative tool in a sleek package. This premium tablet features a stunning 12.9-inch Liquid Retina XDR display, the most powerful chip we've ever put in a tablet, and support for the latest pencil and keyboard accessories. Perfect for artists, designers, and professionals who need power and precision on the go.",
    image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Tablets",
    rating: 4.9,
    inStock: false,
    specs: {
      "Display": "12.9-inch Liquid Retina XDR",
      "Processor": "M2 chip",
      "Storage": "256GB, 512GB, 1TB, 2TB",
      "Battery": "Up to 10 hours",
      "Connectivity": "Wi-Fi 6E, 5G (optional)"
    }
  },
  {
    id: 8,
    name: "Smart Home Security System",
    price: 399.99,
    originalPrice: 499.99,
    shortDescription: "Complete protection for your home",
    description: "Protect what matters most with our comprehensive smart home security system. Includes a base station, keypad, motion sensors, entry sensors, and HD security cameras. Easy to install with no professional help required. Monitor and control everything from the intuitive smartphone app, with optional professional monitoring available.",
    image: "https://images.unsplash.com/photo-1558002038-bb4237b60b8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    category: "Smart Home",
    rating: 4.6,
    inStock: true,
    specs: {
      "Components": "Base station, keypad, 2 cameras, 4 sensors",
      "Camera Resolution": "1080p HD",
      "Connectivity": "Wi-Fi, Cellular backup",
      "Power": "Battery backup (24 hours)",
      "Storage": "Cloud storage included"
    }
  }
];

export const categories = [
  { id: 1, name: "All", value: "" },
  { id: 2, name: "Audio", value: "Audio" },
  { id: 3, name: "TV & Home Theater", value: "TV & Home Theater" },
  { id: 4, name: "Computers", value: "Computers" },
  { id: 5, name: "Wearables", value: "Wearables" },
  { id: 6, name: "Cameras", value: "Cameras" },
  { id: 7, name: "Tablets", value: "Tablets" },
  { id: 8, name: "Smart Home", value: "Smart Home" },
];
