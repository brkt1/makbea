"use client";

import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import './globals.css'; // Import global styles if needed

const Home = () => {
    const [cart, setCart] = useState<any[]>([]);
    const [selectedProduct, setSelectedProduct] = useState<any>(null);
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkMode);
        applyDarkMode(darkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkMode', String(newDarkMode)); // Store as string
        applyDarkMode(newDarkMode);
    };

    const applyDarkMode = (darkMode: boolean) => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.remove('text-black'); // Removed empty string
            document.body.classList.add('bg-black', 'text-gray-500');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('bg-black', 'text-gray-500');
            document.body.classList.add('text-black'); // Removed empty string
        }
    };

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Makbea | Modern 3D Printed Designs</title>
                <script src="https://cdn.tailwindcss.com"></script>
                <script src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js" defer></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js"></script>
                <style>
                    {`
                        html {
                            scroll-behavior: smooth;
                        }
                        @keyframes float {
                            0% { transform: translateY(0px); }
                            50% { transform: translateY(-20px); }
                            100% { transform: translateY(0px); }
                        }
                        .floating-item {
                            animation: float 4s ease-in-out infinite;
                        }
                    `}
                </style>
                <script>
                    {`
                        tailwind.config = {
                            darkMode: 'class',
                            theme: {
                                extend: {
                                    colors: {
                                        'primary': '#14b8a6',
                                    }
                                }
                            }
                        }
                    `}
                </script>
            </Head>
            <div className="text-black dark:bg-black dark:text-gray-500">
                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-sm dark:bg-black dark:bg-opacity-50">
                    <div className="container mx-auto flex justify-between items-center p-4">
                        <div className="text-2xl font-bold text-primary">MAKBEA</div>
                        <div className="flex space-x-4 items-center">
                            <button 
                                onClick={() => setSelectedProduct(null)}
                                className="relative group"
                            >
                                {/* Cart Icon */}
                            </button>
                            <button 
                                onClick={toggleDarkMode}
                                className="bg-transparent border-none hover:bg-opacity-20 transition-all duration-300 p-2 rounded-full"
                            >
                                {/* Dark Mode Toggle Icon */}
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Hero Section */}
                <section id="home" className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-navy-800 to-primary/10 overflow-hidden">
                    {/* Hero Content */}
                </section>

                {/* Products Section */}
                <section id="products" className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 py-16 relative">
                    {/* Products Content */}
                </section>

                {/* Testimonials Section */}
                <section id="testimonials" className="py-16 relative overflow-hidden">
                    {/* Testimonials Content */}
                </section>

                {/* Contact Us Section */}
                <section id="contact" className="py-16 relative overflow-hidden">
                    {/* Contact Form Content */}
                </section>

                {/* Footer */}
                <footer className="py-6">
                    <div className="container mx-auto text-center">
                        <p>&copy; 2023 Makbea. All rights reserved.</p>
                    </div>
                </footer>
            </div>
        </>
    );
};

export default Home;
