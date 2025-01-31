
const TestimonialsSection = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24 relative overflow-hidden bg-navy-900">
            <div className="absolute inset-0 opacity-10 bg-pattern pointer-events-none"></div>
            <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-primary tracking-tight">
                    Voices of <span className="text-gray-500">Innovation</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {/* Testimonial 1 */}
                    <div className="bg-navy-800 border border-gray-700/50 p-6 md:p-8 rounded-xl relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.642 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.642 3.995-5.849h-4v-10h10z"/>
                        </svg>
                        <p className="italic mb-6 text-gray-300 leading-relaxed text-base md:text-lg">
                            "The 3D printed designs from Makbea are not just products, they're a glimpse into the future of design. Each piece tells a unique technological story."
                        </p>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-primary text-lg md:text-xl mb-1">Sarah Johnson</h4>
                                <p className="text-xs md:text-sm text-gray-500">Design Innovator</p>
                            </div>
                            <div className="flex space-x-1">
                                {[...Array(4)].map((_, index) => (
                                    <svg 
                                        key={index} 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`h-4 w-4 md:h-5 md:w-5 ${
                                            index < 3 ? 'text-primary' : 'text-gray-600'
                                        }`} 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
    
                    {/* Testimonial 2 */}
                    <div className="bg-navy-800 border border-gray-700/50 p-6 md:p-8 rounded-xl relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.642 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.642 3.995-5.849h-4v-10h10z"/>
                        </svg>
                        <p className="italic mb-6 text-gray-300 leading-relaxed text-base md:text-lg">
                            "The attention to detail in Makbea's designs is unparalleled. They transform spaces into art galleries."
                        </p>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-primary text-lg md:text-xl mb-1">Mike Rodriguez</h4>
                                <p className="text-xs md:text-sm text-gray-500">Interior Designer</p>
                            </div>
                            <div className="flex space-x-1">
                                {[...Array(4)].map((_, index) => (
                                    <svg 
                                        key={index} 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`h-4 w-4 md:h-5 md:w-5 ${
                                            index < 3 ? 'text-primary' : 'text-gray-600'
                                        }`} 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38- 1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
    
                    {/* Testimonial 3 */}
                    <div className="bg-navy-800 border border-gray-700/50 p-6 md:p-8 rounded-xl relative overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 md:h-12 md:w-12 text-primary mb-4 opacity-50" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.642 3.995-5.849h-4v-10h10zm14.017 0v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.642 3.995-5.849h-4v-10h10z"/>
                        </svg>
                        <p className="italic mb-6 text-gray-300 leading-relaxed text-base md:text-lg">
                            "Makbea's creations are the perfect blend of art and technology. They elevate any space with their unique charm."
                        </p>
                        <div className="flex items-center justify-between">
                            <div>
                                <h4 className="font-bold text-primary text-lg md:text-xl mb-1">Emily Chen</h4>
                                <p className="text-xs md:text-sm text-gray-500">Creative Director</p>
                            </div>
                            <div className="flex space-x-1">
                                {[...Array(4)].map((_, index) => (
                                    <svg 
                                        key={index} 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        className={`h-4 w-4 md:h-5 md:w-5 ${
                                            index < 3 ? 'text-primary' : 'text-gray-600'
                                        }`} 
                                        viewBox="0 0 20 20" 
                                        fill="currentColor"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;