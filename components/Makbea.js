
"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';

const Makbea = () => {
    const [cart, setCart] = useState([]);
const [isDarkMode, setIsDarkMode] = useState(false); // Default value for server-side rendering

    useEffect(() => {
        const darkMode = localStorage.getItem('darkMode') === 'true';
        setIsDarkMode(darkMode);
        applyDarkMode(darkMode);
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode);
        applyDarkMode(newDarkMode);
    };

    const applyDarkMode = (darkMode) => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.remove('text-black');
            document.body.classList.add('bg-black', 'text-gray-500');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('bg-black', 'text-gray-500');
            document.body.classList.add('text-black');
        }
    };

    return (
        <>
            <Head>
                <title>Makbea | Modern 3D Printed Designs</title>
                <link href="https://cdn.tailwindcss.com" rel="stylesheet" />
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
            </Head>
            <div className={`text-black ${isDarkMode ? 'bg-black text-gray-500' : 'bg-white'}`}>
                <nav className="fixed top-0 left-0 right-0 z-50 bg-opacity-50 backdrop-blur-sm dark:bg-black dark:bg-opacity-50">
                    <div className="container mx-auto flex justify-between items-center p-4">
                        <div className="text-2xl font-bold text-primary">MAKBEA</div>
                        <div className="flex space-x-4 items-center">
                            <button
                                onClick={() => setCart([])}
                                className="relative group"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 group-hover:text-primary transition dark:text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 text-gray-500 rounded-full px-2 py-1 text-xs">
                                        {cart.length}
                                    </span>
                                )}
                            </button>
                            <button
                                onClick={toggleDarkMode}
                                className="bg-transparent border-none text-gray-500 hover:text-primary transition"
                            >
                                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                            </button>
                        </div>
                    </div>
                </nav>
                <main className="pt-16">
                    {/* Your main content goes here */}
                </main>
            </div>
        </>
    );
};

export default Makbea;