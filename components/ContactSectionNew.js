import React from 'react';
import useOnScreen from './useOnScreen';
import { motion } from 'framer-motion';

export default function ContactSection() {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1 });

    return (
        <section 
            ref={setRef}
            className="relative py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800"
        >
            <div className="container mx-auto px-4 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Illustration & Decorative Elements */}
                    <div className="relative">
                        {/* Floating Decorative Elements */}
                        <div className="absolute -top-12 -left-12 w-32 h-32 bg-primary/20 rounded-full blur-2xl animate-float"></div>
                        <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-cyan-500/20 rounded-full blur-2xl animate-float delay-500"></div>

                        {/* Inline SVG Illustration */}
                        <div className="relative z-10">
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                viewBox="0 0 600 400" 
                                className="w-full h-auto transform transition-transform duration-500 hover:scale-105"
                            >
                                {/* Background */}
                                <rect width="600" height="400" fill="transparent"/>
                                
                                {/* Device */}
                                <rect x="200" y="100" width="200" height="300" rx="20" fill="#2D3748" />
                                
                                {/* Screen */}
                                <rect x="220" y="130" width="160" height="240" rx="10" fill="#1A202C" />
                                
                                {/* Message Bubbles */}
                                <rect x="240" y="160" width="120" height="40" rx="10" fill="#4A5568" />
                                <rect x="240" y="220" width="100" height="40" rx="10" fill="#4A5568" />
                                <rect x="240" y="280" width="140" height="40" rx="10" fill="#4A5568" />
                                
                                {/* Send Icon */}
                                <path 
                                    d="M400 310 L430 290 L460 310" 
                                    stroke="#48BB78" 
                                    strokeWidth="4" 
                                    fill="none" 
                                    strokeLinecap="round"
                                />
                                
                                {/* Decorative Elements */}
                                <circle cx="180" cy="200" r="20" fill="#4299E1" opacity="0.5" />
                                <circle cx="420" cy="80" r="15" fill="#ED64A6" opacity="0.5" />
                            </svg>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <motion.div 
                        className="bg-navy-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl"
                        initial={{ opacity: 0 }}
                        animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className="text-center mb-10">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                Let's <span className="text-primary">Connect</span>
                            </h2>
                            <p className="text-gray-400 max-w-md mx-auto">
                                Have a project in mind or just want to say hello? 
                                Fill out the form and we'll get back to you soon.
                            </p>
                        </div>

                        {/* Form Fields */}
                        <form className="space-y-6">
                            {/* Name Input */}
                            <div className="group relative">
                                <input 
                                    type="text" 
                                    placeholder="Full Name"
                                    className="w-full px-4 py-3 bg-navy-700 
                                    text-white rounded-lg border 
                                    border-white/10 focus:border-primary 
                                    transition duration-300 
                                    group-hover:border-primary/50"
                                />
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="absolute right-4 top-1/2 -translate-y-1/2 
                                    text-gray-400 group-focus-within:text-primary 
                                    transition duration-300"
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                >
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                            </div>

                            {/* Email Input */}
                            <div className="group relative">
                                <input 
                                    type="email" 
                                    placeholder="Email Address"
                                    className="w-full px-4 py-3 bg-navy-700 
                                    text-white rounded-lg border 
                                    border-white/10 focus:border-primary 
                                    transition duration-300 
                                     group-hover:border-primary/50"
                                />
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="absolute right-4 top-1/2 -translate-y-1/2 
                                    text-gray-400 group-focus-within:text-primary 
                                    transition duration-300"
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                >
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>

                            {/* Message Textarea */}
                            <div className="group relative">
                                <textarea 
                                    placeholder="Your Message"
                                    rows="4"
                                    className="w-full px-4 py-3 bg-navy-700 
                                    text-white rounded-lg border 
                                    border-white/10 focus:border-primary 
                                    transition duration-300 
                                    group-hover:border-primary/50"
                                ></textarea>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    className="absolute right-4 top-4 
                                    text-gray-400 group-focus-within:text-primary 
                                    transition duration-300"
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                >
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                                </svg>
                            </div>

                            {/* Submit Button */}
                            <button 
                                type="submit" 
                                className="w-full py-3 bg-gradient-to-r from-primary to-cyan-600 
                                text-white font-semibold rounded-lg 
                                hover:opacity-90 transition duration-300 
                                flex items-center justify-center space-x-2 
                                transform active:scale-95"
                            >
                                <span>Send Message</span>
                                <svg 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    width="24" 
                                    height="24" 
                                    viewBox="0 0 24 24" 
                                    fill="none" 
                                    stroke="currentColor"
                                >
                                    <line x1="22" y1="2" x2="11" y2="13"/>
                                    <polygon points="22 2 15 22 11 13 2 9 22 2"/>
                                </svg>
                            </button>
                        </form>

                        {/* Social Media Links */}
                        <div className="mt-8 flex justify-center space-x-6">
                            {['twitter', 'linkedin', 'github'].map((social) => (
                                <a 
                                    key={social}
                                    href="#" 
                                    className="text-gray-400 hover:text-primary 
                                    transition duration-300 transform hover:scale-110"
                                >
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        width="24" 
                                        height="24" 
                                        viewBox="0 0 24 24"  fill="none" 
                                        stroke="currentColor"
                                    >
                                        {/* SVG paths for social icons */}
                                        {social === 'twitter' && (
                                            <path d="M23 3a10.9 10.9 0 01-3.1.9A4.5 4.5 0 0022.4 2a9 9 0 01-2.8 1.1A4.5 4.5 0 0016 0a4.5 4.5 0 00-4.5 4.5c0 .35.04.69.1 1.02A12.8 12.8 0 011.6 1.1a4.5 4.5 0 001.4 6A4.5 4.5 0 01.9 7.5v.06a4.5 4.5 0 003.6 4.4 4.5 4.5 0 01-2 .1 4.5 4.5 0 004.2 3.1A 9 9 0 010 19.5a12.8 12.8 0 006.9 2A12.8 12.8 0 0023 3z" />
                                        )}
                                        {social === 'linkedin' && (
                                            <path d="M16 8a6 6 0 00-6 6v6h-4v-6a10 10 0 1120 0v6h-4v-6a6 6 0 00-6-6z" />
                                        )}
                                        {social === 'github' && (
                                            <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.5-3.9-1.5-.5-1.3-1.2-1.6-1.2-1.6-.9-.6 0-.6 0-.6 1.1 0 1.7 1.1 1.7 1.1 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.7-2.5-.3-5.1-1.2-5.1-5.3a4.2 4.2 0 011.1-2.9c-.1-.3-.5-1.5.1-3.1 0 0 .9-.3 3 1.1a10.5 10.5 0 015.5 0c2.1-1.4 3-1.1 3-1.1.6 1.6.2 2.8.1 3.1a4.2 4.2 0 011.1 2.9c0 4.1-2.6 5-5.1 5.3.4.3.7.9.7 1.7v2.2c0 .3.2.7.8.6A12 12 0 0012 0z" />
                                        )}
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
