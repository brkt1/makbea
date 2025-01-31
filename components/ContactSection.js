
const ContactSection = () => {
    return (
        <section id="contact" className="py-16 relative overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10">
                <div className="space-y-6">
                    <h2 className="text-5xl font-bold mb-6 text-primary tracking-tight leading-tight">
                        Get in Touch <br/><span className="text-gray-600">We'd Love to Hear from You</span>
                    </h2>
                    <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                        Fill out the form below to reach out to us. We are here to assist you!
                    </p>
                    <div className="max-w-lg mx-auto">
                        <form action="#" method="POST" className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                            <div className="mb-4">
                                <label htmlFor="name" className="block text-gray-800 dark:text-gray-300">Name</label>
                                <input type="text" id="name" name="name" required className="mt-1 block w-full p-3 rounded-md bg-gray-100 dark :bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500" placeholder="Your Name" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-gray-800 dark:text-gray-300">Email</label>
                                <input type="email" id="email" name="email" required className="mt-1 block w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500" placeholder="Your Email" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="block text-gray-800 dark:text-gray-300">Message</label>
                                <textarea id="message" name="message" required className="mt-1 block w-full p-3 rounded-md bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring focus:ring-blue-500" rows="4" placeholder="Your Message"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold py-3 rounded-md hover:bg-blue-800 transition duration-200 transform hover:scale-105">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="relative">
                    <div className="absolute -inset-2 rounded-xl blur-2xl opacity-50 bg-gradient-to-br from-blue-500 to-purple-500"></div>
                    <img 
                        src="https://www.shutterstock.com/image-photo/hand-show-icon-address-phone-600nw-2475999141.jpg" 
                        alt="Contact Us" 
                        className="w-full h-[500px] object-cover rounded-xl relative z-10 shadow-2xl border-2 border-gray-300 dark:border-gray-600 transform transition hover:scale-105"
                    />
                    <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-lg p-4 z-20">
                        <p className="text-gray-500 dark:text-gray-300 text-sm text-center">
                            We're here to assist you with any inquiries.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;