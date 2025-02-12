'use client';

import { useState } from 'react';
import Makbea from '../components/Makbea';
import HeroSection from '../components/HeroSection';
import ProductsSection from '../components/ProductsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';
import AboutSection from '../components/AboutSection';
import CategoriesSection from '../components/CategoriesSection';
import Footer from '../components/Footer';
import AdminSignUp from '../components/AdminSignUp';
import ProductDisplay from '../components/ProductDisplay';

interface Product {
  id: number;
  name: string;
  price: number;
  image_url?: string;
  description?: string;
  quantity?: number; // Optional for cart management
}

export default function Page() {
  const [showAdminSignup, setShowAdminSignup] = useState(false);
  const [cart, setCart] = useState<Product[]>([]); // Add cart state with type

  const toggleAdminSignup = () => {
    setShowAdminSignup(!showAdminSignup);
  };

  const addToCart = (product: Product) => { // Add addToCart function with type
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity = (existingProduct.quantity || 1) + 1;
      setCart([...cart]); // Update state to trigger re-render
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <>
      <Makbea />
      <HeroSection /> 
      <ProductsSection addToCart={addToCart} cart={cart} /> {/* Pass props */}
      <ProductDisplay cart={cart} /> {/* Pass props */}
      <TestimonialsSection />
      <AboutSection />
      <Footer />
      
      {/* Admin Signup Button - Hidden in plain sight */}
      <button 
        onClick={toggleAdminSignup}
        className="fixed bottom-4 left-4 p-2 opacity-20 hover:opacity-100 transition-opacity duration-300"
      >
        Admin
      </button>

      {/* Admin Signup Modal */}
      {showAdminSignup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="relative w-full max-w-md">
            <button
              onClick={toggleAdminSignup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-400"
            >
              ✕
            </button>
            <AdminSignUp />
          </div>
        </div>
      )}
    </>
  );
}
