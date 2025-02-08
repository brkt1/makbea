'use client'; // Marking this component as a client component

import { useEffect } from 'react';
import useOnScreen from './useOnScreen';

const HeroSection = () => {
    useEffect(() => {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        const heroCTA = document.querySelector('.hero-cta');

        setTimeout(() => {
            heroTitle.classList.remove('translate-y-full', 'opacity-0');
            heroSubtitle.classList.remove('translate-y-full', 'opacity-0');
            heroCTA.classList.remove('translate-y-full', 'opacity-0');
        }, 100);
    }, []);

    return (
        <section 
            id="hero" 
            className="py-16 relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url("https://www.eazao.com/wp-content/uploads/2021/06/vase3-711x400.png")' }}
        >
            <div className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-navy-800 to-primary/10 overflow-hidden ">
                <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-pattern pointer-events-none"></div>
                
                <div 
                    id="hero-content" 
                    className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10 px-4 md:px-8 lg:px-16 py-8 md:py-16"
                >
                    <div className="space-y-6 text-center md:text-left bg-white bg-opacity-50 rounded-lg p-4">
                        <div className="overflow-hidden">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary dark:text-primary-light transform translate-y-full opacity-0 transition-all duration-700 ease-out hero-title">
                                MAKBEA
                                <span className="text-sm block text-gray-600 dark:text-gray-400 mt-2 font-light">
                                    3D Printing Innovation
                                </span>
                            </h1>
                        </div>
                        
                        <div className="overflow-hidden">
                            <p className="text-lg md:text-xl lg:text-2xl  text-gray-700 max-w-md mx-auto md:mx-0 transform translate-y-full opacity-0 transition-all duration-700 ease-out delay-200 hero-subtitle">
                                Crafting Unique 3D Printed Designs for Home, Office, and Personalized Gifts
                            </p>
                        </div>
                        
                        <div className="overflow-hidden">
                            <div className="flex space-x-4 justify-center md:justify-start mt-6 md:mt-8 transform translate-y-full opacity-0 transition-all duration-700 ease-out delay-400 hero-cta">
                                <a 
                                    href="#products" 
                                    className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-6 md:px-8 py-2 md:py-3 rounded-full hover:opacity-90 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl group flex items-center"
                                >
                                    Products
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className="h-4 md:h-5 w-4 md:w-5 ml-2 group-hover:translate-y-1 transition" 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor"
                                    >
                                        <path 
                                            strokeLinecap="round" 
                                            strokeLinejoin="round" 
                                            strokeWidth="2" 
                                            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
                                        />
                                    </svg>
                                </a>
                                <a 
                                    href="#contact" 
                                    className="inline-block border-2 border-primary text-primary dark:border-primary-light dark:text-primary-light px-6 md:px-8 py-2 md:py-3 rounded-full hover:bg-primary/10 dark:hover:bg-primary-light/10 transition-all duration-300 ease-in-out transform hover:scale-105"
                                >
                                    Contact Us
                                </a>
                            </div>
                        </div>
                    </div>
                    
                    <div className="relative group">
                        <div className="absolute -inset-4 bg-primary/20 dark:bg-primary-light/10 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500"></div>
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <div className="absolute inset-0 bg-black/10 dark:bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
