import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseService'; // Adjust the import path as necessary

const ProductDisplay = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [currentCategory, setCurrentCategory] = useState('all');
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from('products') // Replace 'products' with your actual table name
                    .select('*');

                if (error) throw error;

                setProducts(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const filterCategory = (category) => {
        setCurrentCategory(category);
    };

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(item => item.id === product.id);
            if (existingProduct) {
                return prevCart.map(item =>
                    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            }
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter(item => item.id !== id));
    };

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const filteredProducts = currentCategory === 'all' 
        ? products 
        : products.filter(product => product.category === currentCategory);

    if (loading) return <p className="text-center">Loading...</p>;
    if (error) return <p className="text-center text-red-500">Error: {error}</p>;

    return (
        <section className="min-h-screen bg-gradient-to-br from-navy-900 to-navy-800 py-16 relative">
            <div className="container mx-auto relative z-10 px-4">
              

                <div className="flex justify-center mb-8 space-x-4">
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

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
                    {filteredProducts.map(product => (
                        <div 
                            key={product.id} 
                            onClick={() => setSelectedProduct(product)}
                            className="relative border border-gray-700 rounded-2xl overflow-hidden cursor-pointer transform transition duration-400 hover:-translate-y-3 hover:shadow-2xl group"
                        >
                            <img 
                                src={product.image_url || 'https://via.placeholder.com/200x150?text=Image+Not+Available'} 
                                alt={product.name}
                                className="w-full h-72 object-cover transform scale-100 group-hover:scale-110 transition duration-500 ease-in-out"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 transform translate-y-full group-hover:translate-y-0 transition duration-400">
                                <h3 className="text -xl font-bold text-gray-500 truncate mb-1">{product.name}</h3>
                                <span className="text-gray-300 text-lg font-medium">${product.price}</span>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); addToCart(product); }}
                                    className="bg-cyan-400 text-[#00ffc2]/50 px-4 py-2 rounded-full hover:bg-cyan-300 transition duration-300 flex items-center space-x-2"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                    </svg>
                                    <span className="text-sm font-medium">Add</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
                        <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-gray-700/50 transform transition-all duration-400 scale-95 hover:scale-100">
                            <button 
                                onClick={() => setSelectedProduct(null)}
                                className="absolute top-6 right-6 text-gray-500 rounded-full p-2 hover:bg-gray-700/50 transition duration-300 z-10"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                            <div className="grid md:grid-cols-2 gap-8 p-8">
                                <img 
                                    src={selectedProduct.image_url} 
                                    alt={selectedProduct.name}
                                    className="w-full rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105 object-cover"
                                />
                                <div className="space-y-6">
                                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-4">{selectedProduct.name}</h2>
                                    <p className="text-gray-300 text-lg leading-relaxed">{selectedProduct.description}</p>
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

                {cart.length > 0 && (
                    <div className="fixed bottom-6 right-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-2xl border border-gray-700/50 w-96 transform transition-all duration-400 hover:scale-105">
                        <div className="p-6">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Your Cart</h3>
                            <div className="space-y-4 max-h-64 overflow-y-auto ">
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
                                <button 
                                    className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-[#00ffc2]/50 py-3 rounded-full hover:opacity-90 transition duration-300 font-semibold shadow-lg"
                                >
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

export default ProductDisplay;