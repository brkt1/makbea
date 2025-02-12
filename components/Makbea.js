"use client";
import { useEffect, useState } from 'react';
import Head from 'next/head';

const Makbea = () => {
    const [cart, setCart] = useState([]);
    const [isDarkMode, setIsDarkMode] = useState(true);


    useEffect(() => {
        // Check for saved dark mode preference or system preference
        const savedDarkMode = localStorage.getItem('darkMode');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        const initialDarkMode = savedDarkMode !== null 
            ? savedDarkMode === 'true' 
            : false;

        
        setIsDarkMode(initialDarkMode);
            applyDarkMode(false);


        // Listen for system dark mode changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleColorSchemeChange = (e) => {
            const newDarkMode = e.matches;
            setIsDarkMode(newDarkMode);
            applyDarkMode(newDarkMode);
            localStorage.setItem('darkMode', newDarkMode.toString());
        };

        mediaQuery.addListener(handleColorSchemeChange);

        // Cleanup listener
        return () => {
            mediaQuery.removeListener(handleColorSchemeChange);
        };
    }, []);

    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('darkMode', newDarkMode.toString());
        applyDarkMode(newDarkMode);
    };

    const applyDarkMode = (darkMode) => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
            document.body.classList.remove('bg-white', 'text-black');
            document.body.classList.add('bg-gray-900', 'text-gray-300');
        } else {
            document.documentElement.classList.remove('dark');
            document.body.classList.remove('bg-gray-900', 'text-gray-300');
            document.body.classList.add('bg-white', 'text-black');
        }
    };

    return (
<nav className="fixed w-auto top-0 left-0 right-0 z-50 bg-white/25 backdrop-blur-sm p-4">

<div className="container mx-auto flex justify-between items-center">

            <div className="text-2xl font-bold text-black">
                MAKBEA
            </div>
<div className="flex space-x-2 items-center">

                <button
                    onClick={() => setCart([])}
                    className="relative group"
                    aria-label="Shopping Cart"
                >
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="h-6 w-6 text-gray-700 group-hover:text-black transition" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                    >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth="2" 
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" 
                        />
                    </svg>
                    {cart.length > 0 && (
                        <span className="absolute -top-2 -right-2 bg-black rounded-full px-2 py-1 text-xs text-white">
                            {cart.length}
                        </span>
                    )}
                </button>
                <button
                    onClick={toggleDarkMode}
                    className="flex items-center space-x-2 text-gray-700 hover:text-black transition"
                    aria-label="Toggle Dark Mode"
                >
                    {isDarkMode ? (
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                        </svg>
                    ) : (
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            className="h-5 w-5" 
                            viewBox="0 0 20 20" 
                            fill="currentColor"
                        >
                            <path 
                                fillRule="evenodd" 
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" 
                                clipRule="evenodd" 
                            />
                        </svg>
                    )}
                    <span className="hidden md:inline">
                        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                    </span>
                </button>
            </div>
        </div>
    </nav>
    );
};

export default Makbea;
