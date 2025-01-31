'use client'; 

import { useEffect, useState } from 'react';
import { supabase, isUserAdmin } from '../lib/supabaseService';
import ProductUpload from './ProductUpload';

const ProductsSection = () => {
    const [products, setProducts] = useState([]);
    const [currentCategory, setCurrentCategory] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [showUploadModal, setShowUploadModal] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetchProducts();
        checkAdminStatus();
    }, []);

    const checkAdminStatus = async () => {
        const adminStatus = await isUserAdmin();
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
        }
    };

    const filterCategory = (category) => {
        setCurrentCategory(category);
        setFilteredProducts(category === 'all' 
            ? products 
            : products.filter(product => product.category === category));
    };

    const openProductModal = (product) => {
        setSelectedProduct(product);
    };

    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            existingProduct.quantity = (existingProduct.quantity || 1) + 1;
        } else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
        showCartNotification(product);
    };

    const showCartNotification = (product) => {
        const existingNotifications = document.querySelectorAll('.cart-notification');
        existingNotifications.forEach(notification => notification.remove());

        const notification = document.createElement('div');
        notification.className = 'cart-notification fixed top-4 right-4 text-black px-4 py-2 rounded-lg shadow-lg';
        notification.textContent = `${product.name} added to cart`;
        document.body.appendChild(notification);
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 3000);
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => 
            total + (item.price * (item.quantity || 1)), 0
        ).toFixed(2);
    };

    const handleUploadSuccess = () => {
        fetchProducts();
        setShowUploadModal(false);
    };

    return (
        <section id="products" className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 py-16 relative">
            <div className="absolute inset-0 opacity-5 bg-pattern pointer-events-none"></div>
            <div className="container mx-auto relative z-10 px-4">
                <div className="text-center mb-12 space-y-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary tracking-tight">
                        Our 3D Printed Collections
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Explore our unique range of meticulously crafted 3D printed designs, 
                        perfect for every space and occasion.
                    </p>
                    {isAdmin && (
                        <button
                            onClick={() => setShowUploadModal(true)}
                            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-full hover:opacity-90 transition duration-300"
                        >
                            Upload New Product
                        </button>
                    )}
                </div>
                
                <div className="flex justify-center mb-8 space-x-4">
                    <div className="bg-navy-800 rounded-full p-1 flex items-center space-x-2">
                        {['all', 'home', 'tech', 'gifts'].map(category => (
                            <button 
                                key={category}
                                onClick={() => filterCategory(category)}
                                className={`px-4 py-2 rounded-full transition-all duration-300 ${currentCategory === category ? 'text-black' : 'text-gray-400'}`}
                            >
                                {category.charAt(0).toUpperCase() + category.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>
                
                <div id="products-grid" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                    {filteredProducts.map(product => (
                        <div 
                            key={product.id}
                            onClick={() => openProductModal(product)}
                            className="relative backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden cursor-pointer transform transition duration-400 hover:-translate-y-3 hover:shadow-2xl group"
                        >
                            <div className="relative overflow-hidden">
                                <img 
                                    src={product.image_url || 'https://via.placeholder.com/400x300?text=3D+Printed+Product'} 
                                    alt={product.name}
                                    className="w-full h-72 object-cover transform scale-100 group-hover:scale-110 transition duration-500 ease-in-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                            </div>
                            
                            <div className="absolute bottom-0 left-0 right-0 p-4 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition duration-400">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-500 truncate mb-1">{product.name}</h4>
                                        <span className="text-gray-300 text-lg font-medium">${product.price.toFixed(2)}</span>
                                    </div>
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                        className="bg-cyan-400 px-4 py-2 rounded-full hover:bg-cyan transition duration-300 flex items-center space-x-2 group"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                        </svg>
                                        <span className="text-sm font-medium">Add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Product Upload Modal - Only shown to admin users */}
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

                {/* Product Detail Modal */}
                {selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <div className="backdrop-blur-lg rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700/50 transform transition-all duration-400 scale-95 hover:scale-100">
                            <button 
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 text-gray-500 rounded-full p-2 hover:bg-gray-700/50 transition duration-300 z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>

                            <div className="grid md:grid-cols-2 gap-8 p-8">
                                <div className="relative">
                                    <img 
                                        src={selectedProduct.image_url} 
                                        alt={selectedProduct.name}
                                        className="w-full rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 object-cover"
                                    />
                                </div>
                                <div className="space-y-6">
                                    <div>
                                        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">{selectedProduct.name}</h2>
                                        <p className="text-gray-300 text-lg leading-relaxed">{selectedProduct.description}</p>
                                    </div>
                                    
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-500 mb-3">Features:</h3>
                                        <ul className="space-y-2 text-gray-400">
                                            {selectedProduct.features && selectedProduct.features.map((feature, index) => (
                                                <li key={index} className="flex items-center space-x-2 before:content-['▶'] before:text-cyan-400 before:mr-2">
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    <div className="flex items-center justify-between mt-6">
                                        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">${selectedProduct.price.toFixed(2)}</span>
                                        <button 
                                            onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                                            className="bg-gradient-to-r from-cyan-400 to-blue-500 text-[#00ffc2]/50 px-6 py-3 rounded-full hover:opacity-90 transition duration-300 flex items-center space-x-3 font-semibold shadow-lg"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                            </svg>
                                            <span>Add to Cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Cart Modal */}
                {cart.length > 0 && (
                    <div className="fixed bottom-6 right-6 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 w-96 transform transition-all duration-400 hover:scale-105">
                        <div className="p-6">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Your Cart</h3>
                                <span className="text-gray-400">{`${cart.length} Item${cart.length > 1 ? 's' : ''}`}</span>
                            </div>

                            <div className="space-y-4 max-h-64 overflow-y-auto">
                                {cart.map(item => (
                                    <div key={item.id} className="flex justify-between items-center p-3 rounded-xl">
                                        <div className="flex-grow">
                                            <span className="text-gray-500 font-semibold block">{item.name}</span>
                                            <span className="text-gray-400 text-sm">${(item.price * item.quantity).toFixed(2)}</span>
                                        </div>
                                        <button 
                                            onClick={() => removeFromCart(item.id)}
                                            className="text-red-400 hover:text-red-500 transition duration-300 ml-4"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6z" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 pt-4 border-t border-gray-700/50">
                                <div className="flex justify-between mb-4">
                                    <span className="text-lg font-semibold text-gray-300">Total:</span>
                                    <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">${calculateTotal()}</span>
                                </div>
                                <button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-[#00ffc2]/50 py-3 rounded-full hover:opacity-90 transition duration-300 font-semibold shadow-lg">
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default ProductsSection;
