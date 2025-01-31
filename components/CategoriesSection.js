const CategoriesSection = () => {
    const categories = [
        {
            title: "Home Decor",
            description: "Transforming spaces with innovative design",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-6 text-primary transform transition group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                </svg>
            ),
            gradient: "from-blue-500/20 to-purple-500/20"
        },
        {
            title: "Kids Toys",
            description: "Imagination meets technology",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-6 text-primary transform transition group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            ),
            gradient: "from-green-500/20 to-teal-500/20"
        },
        {
            title: "Gifts",
            description: "Thoughtful designs for every occasion",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-6 text-primary transform transition group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.478-.634-2.026M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.478.634-2.026M14 10h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H9.75A2.25 2.25 0 007.5 6v1.75c0 1.243 1.007 2.25 2.25 2.25z" />
                </svg>
            ),
            gradient: "from-pink-500/20 to-red-500/20"
        }
    ];

    return (
        <section 
            id="categories" 
            className="py-16 md:py-24 bg-gradient-to-br from-navy-900 to-navy-800 relative overflow-hidden"
        >
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                        Explore <span className="text-primary">Design Universes</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Discover our curated collections that blend creativity, functionality, and innovation across multiple categories.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <div 
                            key={index}
                            className="group relative overflow-hidden rounded-2xl 
                            bg-navy-800 border border-white/10 
                            transform transition duration-300 
                            hover:scale-105 hover:border-primary/30 
                            hover:shadow-2xl"
                        >
                            {/* Animated Gradient Background */}
                            <div 
                                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} 
                                opacity-0 group-hover:opacity-100 
                                transition-all duration-500 z-0`}
                            ></div>

                            <div className="relative z-10 p-8 text-center">
                                {/* Icon */}
                                <div className="mb-6 transition transform group-hover:-translate-y-2">
                                    {category.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-2xl font-bold mb-4 
                                text-white group-hover:text-primary 
                                transition duration-300">
                                    {category.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-400 mb-6 
                                opacity-0 group-hover:opacity-100 
                                transition duration-500">
                                    {category.description}
                                </p>

                                {/* Hover CTA */}
                                <div className="absolute bottom-0 left-0 right-0 
                                opacity-0 group-hover:opacity-100 
                                transition duration-500">
                                    <div className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
                                    <div className="bg-navy-700 p-3 flex justify-center items-center">
                                        <span className="text-white text-sm flex items-center">
                                            Explore More
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                className="h-4 w-4 ml-2" 
                                                fill="none" 
                                                viewBox="0 0 24 24" 
                                                stroke="currentColor"
                                            >
                                                <path 
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" 
                                                    strokeWidth={2} 
                                                    d="M13 7l5 5m0 0l-5 5m5-5H6" 
                                                />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;