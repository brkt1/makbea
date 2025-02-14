'use client';

import { useEffect, useState } from 'react';
import { supabase, isUserAdmin } from '../lib/supabaseService';

import ProductUpload from './ProductUpload';

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0); // Track the current product index
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetchProducts();
        checkAdminStatus();
    }, []);

    const checkAdminStatus = async () => {
        // Get current user session
        const { data: { user } } = await supabase.auth.getUser();
        
        if (!user) {
            setIsAdmin(false);
            return;
        }

        // Check if the user is an admin
        const adminStatus = await isUserAdmin(user.id);
        setIsAdmin(adminStatus);
    };


    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from('products')
            .select('*');

        if (error) {
            console.error('Error fetching products:', error);
        } else {
            setProducts(data);
            setFilteredProducts(data);
            setCurrentIndex(0); // Reset index when products are fetched
        }
    };

    const filterCategory = (category) => {
        setCurrentCategory(category);
        const filtered = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);
        setFilteredProducts(filtered);
        setCurrentIndex(0); // Reset index when category is changed
    };

    const nextProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredProducts.length);
    };

    const prevProduct = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredProducts.length) % filteredProducts.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextProduct(); // Automatically go to the next product
        }, 15000); // Change product every 15 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [nextProduct]);

    const currentProduct = filteredProducts[currentIndex];

    return (
        <section id="products" className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 py-16 relative">
            <div className="absolute inset-0 opacity-5 bg-pattern pointer-events-none"></div>
            <div className="container mx-auto relative z-10 px-4">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        Our Products
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore our unique range of meticulously crafted 3D printed designs, 
                        perfect for every space and occasion.
                    </p>
                    {isAdmin && (
                        <button
                            onClick={() => setShowUploadModal(true)}
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-2 rounded-full hover:opacity-90 transition duration-300"
                        >
                            Upload New Product
                        </button>
                    )}
                </div>
                
                {currentProduct && (
                    <div className="flex flex-col md:flex-row items-center justify-center p-2 rounded-lg shadow-lg relative">
                        <button onClick={prevProduct} className="ml-5 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300 transform hover:scale-105">Previous</button>

                        {/* Background Circle */}
                        <div className="absolute right-1/4 transform -translate-x-1/44 -translate-y-1/4 flex items-center justify-center">
                            <div className="w-[400px] h-[300px] bg-black/20 rounded-full"></div>
                        </div>
                        <div className="absolute right-1 transform -translate-x-1/3 -translate-y-1/2 flex items-center justify-center">
                            <div className="w-[300px] h-[300px] bg-blue-500/20 rounded-full"></div>
                        </div>

                        {currentProduct && (
                            <div className="flex flex-col w-auto md:flex-row items-center justify-center p-10 rounded-lg shadow-lg">
                                <div className="flex flex-col items-center md:items-start md:w-1/2 mb-8 md:mb-0">
                                    <h3 className="text-5xl font-serif font-bold text-gray-800 mb-4">{currentProduct.name}</h3>
                                    <p className="text-gray-600 text-lg text-center md:text-left mb-6">{currentProduct.description}</p>
                                    <span className="text-3xl font-serif font-bold text-gray-800 mb-4"></span>
                                </div>
                            </div>
                        )}
                        <div className="flex justify-center space-x-4"></div>

                        {/* Image Container */}
                        <div className="relative overflow-hidden cursor-pointer">
                            <img 
                                src={currentProduct.image_url || 'https://via.placeholder.com/400x300?text=3D+Printed+Product'} 
                                alt={currentProduct.name}
                                className="w-auto h-[400] object-cover relative z-20 rounded-lg shadow-lg" 
                                onError={(e) => { e.target.onerror = null; e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Available'; }} // Fallback image on error
                            />
                        </div>
                        <button onClick={nextProduct} className="ml-4 text-gray-800 px-4 py-2 rounded-full hover:bg-gray-400 transition duration-300 transform hover:scale-105">Next</button>
                    </div>
                )}

                {/* Product Upload Modal */}
                {showUploadModal && isAdmin && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <div className="bg-navy-900 rounded-3xl max-w-2xl w-full p-8 relative">
                            <button 
                                onClick={() => setShowUploadModal(false)}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-400"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <h3 className="text-2xl font-bold text-gray-300 mb-6">Upload New Product</h3>
                            <ProductUpload onUploadSuccess={handleUploadSuccess} />
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsSection;
