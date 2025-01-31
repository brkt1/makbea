// components/AboutSection.js
'use client'; // Marking this component as a client component

const AboutSection = () => {
    return (
        <section id="about" className="py-16 relative overflow-hidden">
            <div className="absolute inset-0 opacity-20 pointer-events-none"></div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                    <h2 className="text-5xl font-bold mb-6 text-primary tracking-tight leading-tight">
                        Redefining <br/><span className="text-gray-500">Design Possibilities</span>
                    </h2>
                    <div className="space-y-4">
                        <p className="text-gray-300 text-lg leading-relaxed flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                            </svg>
                            Pioneering the future of design through cutting-edge 3D printing technology
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                            </svg>
                            Committed to sustainable innovation and eco-conscious design
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                        <div className="bg-gradient-to-br p-5 rounded-lg text-center transform transition hover:scale-105 hover:shadow-lg">
                            <h3 className="text-3xl font-bold text-primary mb-2 animate-pulse">100%</h3>
                            <p className="text-gray-400">Custom Designs</p>
                        </div>
                        <div className="bg-gradient-to-br p-5 rounded-lg text-center transform transition hover:scale-105 hover:shadow-lg">
                            <h3 className="text-3xl font-bold text-primary mb-2">∞</h3>
                            <p className="text-gray-400">Innovative Solutions</p>
                        </div>
                        <div className="bg-gradient-to-br p-5 rounded-lg text-center transform transition hover:scale-105 hover:shadow-lg">
                            <h3 className="text-3xl font-bold text-primary mb-2">24/7</h3>
                            <p className="text-gray-400">Support</p>
                        </div>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-2 rounded-xl blur-2xl opacity-50"></div>
                    <img 
                        src="https://www.shutterstock.com/image-photo/ hand-show-icon-address-phone-600nw-2475999141.jpg" 
                        alt="Makbea Innovation" 
                        className="w-full h-[500px] object-cover rounded-xl relative z-10 shadow-2xl border-2 border-primary/20 transform transition hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 z-20">
                        <p className="text-gray-500 text-sm text-center">
                            Pushing the boundaries of design and technology
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;