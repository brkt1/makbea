'use client';

import { motion } from 'framer-motion';
import { FaLightbulb, FaLeaf, FaCode } from 'react-icons/fa';
import useOnScreen from './useOnScreen';

const AboutSection = () => {
    const [setRef, isVisible] = useOnScreen({ threshold: 0.1 });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1, 
            transition: { 
                staggerChildren: 0.3,
                delayChildren: 0.2 
            } 
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { 
                duration: 0.6,
                ease: "easeOut" 
            }
        }
    };

    return (
        <section 
            id="about" 
            className="py-16 md:py-24 lg:py-32 relative overflow-hidden 
            bg-gradient-to-br from-navy-900 to-navy-800"
            ref={setRef}
        >
            {/* Decorative Background Elements */}
            <motion.div 
                className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ 
                    duration: 3, 
                    repeat: Infinity 
                }}
            />
            <motion.div 
                className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
                animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.6, 0.8, 0.6]
                }}
                transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    delay: 0.5
                }}
            />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div 
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Text Content */}
                    <motion.div className="space-y-8" variants={itemVariants}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white tracking-tight leading-tight">
                            Redefining <br/>
                            <span className="text-primary">Design Possibilities</span>
                        </h2>
                        
                        <div className="space-y-6">
                            {[ 
                                { 
                                    icon: <FaLightbulb />, 
                                    text: "Pioneering the future of design through cutting-edge 3D printing technology" 
                                },
                                { 
                                    icon: <FaLeaf />, 
                                    text: "Committed to sustainable innovation and eco-conscious design" 
                                }
                            ].map((item, index) => (
                                <motion.p 
                                    key={index}
                                    className="text-gray-300 text-lg leading-relaxed flex items-center"
                                    variants={itemVariants}
                                >
                                    <span className="h-8 w-8 mr-4 text-primary">
                                        {item.icon}
                                    </span>
                                    <span>{item.text}</span>
                                </motion.p>
                            ))}
                        </div>

                        {/* Stats Grid */}
                        <motion.div 
                            className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8"
                            variants={containerVariants}
                        >
                            {[ 
                                { value: "100%", label: "Custom Designs", icon: <FaCode /> },
                                { value: "∞", label: "Innovative Solutions", icon: <FaLightbulb /> },
                                { value: "24/7", label: "Support", icon: <FaLeaf /> }
                            ].map((stat, index) => (
                                <motion.div 
                                    key={index}
                                    className="bg-navy-700 border border-white/10 p-6 rounded-xl text-center 
                                    transform transition duration-300 
                                    hover:scale-105 hover:shadow-2xl 
                                    hover:border-primary/30"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.05 }}
                                >
                                    <div className="text-primary mb-2 text-4xl flex justify-center">
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-4xl font-bold text-primary mb-2">
                                        {stat.value}
                                    </h3>
                                    <p className="text-gray-400 text-sm uppercase tracking-wider">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div 
                        className="relative group"
                        variants={itemVariants}
                    >
                        <motion.div 
                            className="absolute -inset-4 bg-gradient-to-br 
                            from-primary/20 to-cyan-500/20 
                            rounded-2xl blur-2xl 
                            opacity-0 group-hover:opacity-50 
                            transition duration-500"
                            whileHover={{ scale: 1.05 }}
                        />

                        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                            <motion.img 
                                src="https://www.shutterstock.com/image-photo/hand-show-icon-address-phone-600nw-2475999141.jpg" 
                                alt="Makbea Innovation" 
                                className="w-full h-[400px] md:h-[500px] lg:h-[600px] 
                                object-cover rounded-2xl"
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.5 }}
                            />
                            
                            <motion.div 
                                className="absolute bottom-0 left-0 right-0 
                                bg-black/60 backdrop-blur-sm 
                                p-4 transform translate-y-full 
                                group-hover:translate-y-0 
                                transition duration-500"
                                initial={{ y: '100%' }}
                                whileHover={{ y: 0 }}
                            >
                                <p className="text-gray-300 text-sm text-center">
                                    Pushing the boundaries of design and technology
                                </p>
                            </motion.div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;
