
const CategoriesSection = () => {
    return (
        <section id="categories" className="py-12 md:py-16 bg-gradient-to-br relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
            <div className="w-full px-4 mx-auto relative z-10">
                <h2 className="text-3xl md:text-5xl font-bold text-center mb-10 md:mb-16 text-primary tracking-tight">
                    Explore <span className="text-gray-500">Design Universes</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8">
                    {/* Home Decor Category */}
                    <div className="rounded-xl p-6 md:p-8 text-center relative overflow-hidden group transform transition hover:scale-105 hover:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-6 text-primary transform transition group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
                            </svg>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-500 mb-2 md:mb-4 transition group-hover:text-primary">Home Decor</h3>
                            <p className="text-sm md:text-base text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition">Transforming spaces with innovative design</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        </div>
                    </div>

                    {/* Kids Toys Category */}
                    <div className="rounded-xl p-6 md:p-8 text-center relative overflow-hidden group transform transition hover:scale-105 hover:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-6 text-primary transform transition group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-500 mb-2 md:mb-4 transition group-hover:text-primary">Kids Toys</h3>
                            <p className="text-sm md:text-base text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition">Imagination meets technology </p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        </div>
                    </div>

                    {/* Gifts Category */}
                    <div className="rounded-xl p-6 md:p-8 text-center relative overflow-hidden group transform transition hover:scale-105 hover:shadow-2xl">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        <div className="relative z-10">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 md:h-20 md:w-20 mx-auto mb-4 md:mb-6 text-primary transform transition group-hover:rotate-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.768-.231-1.478-.634-2.026M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.768.231-1.478.634-2.026M14 10h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H9.75A2.25 2.25 0 007.5 6v1.75c0 1.243 1.007 2.25 2.25 2.25z" />
                            </svg>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-500 mb-2 md:mb-4 transition group-hover:text-primary">Gifts</h3>
                            <p className="text-sm md:text-base text-gray-400 mb-4 opacity-0 group-hover:opacity-100 transition">Thoughtful designs for every occasion</p>
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CategoriesSection;