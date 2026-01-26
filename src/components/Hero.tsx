'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative h-[90vh] min-h-[600px] overflow-hidden flex items-center justify-center bg-stone-50">
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 z-0 opacity-10 pattern-grid-lg text-secondary"></div>
            <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-center lg:text-left"
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-secondary/20 text-secondary font-bold text-sm tracking-widest uppercase mb-6">
                            Festival Season Sale
                        </span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold text-stone-900 leading-tight mb-6">
                            Adorn Your Wrists with <span className="text-primary italic">Elegance</span>
                        </h1>
                        <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                            Explore our exclusive collection of handcrafted glass, gold, and Kundan bangles designed for the modern Indian bride.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Link
                                href="/shop"
                                className="bg-primary hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
                            >
                                Shop Collection <ArrowRight size={20} />
                            </Link>
                            <Link
                                href="/wedding-collection"
                                className="bg-white hover:bg-stone-50 text-stone-900 border-2 border-stone-200 px-8 py-4 rounded-full font-bold text-lg transition-all hover:border-stone-900 flex items-center justify-center"
                            >
                                Wedding Edit
                            </Link>
                        </div>
                    </motion.div>

                    {/* Image/Visual Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative w-full aspect-[4/5] max-w-[500px] mx-auto">
                            {/* Decorative Circle Behind */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-secondary/20 rounded-full animate-[spin_20s_linear_infinite]"></div>

                            {/* Main Featured Image */}
                            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-stone-100">
                                <Image
                                    src="/images/products/ruby_red_bridal_chura.png"
                                    alt="Traditional Bridal Bangles"
                                    fill
                                    className="object-contain p-4 hover:scale-105 transition-transform duration-700"
                                />

                                {/* Floating Badge */}
                                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-stone-100">
                                    <p className="font-serif text-lg font-bold text-stone-900">Wedding Collection</p>
                                    <div className="flex justify-between items-center mt-1">
                                        <p className="text-sm text-stone-500">Handcrafted Bridal Set</p>
                                        <p className="text-primary font-bold">Explore</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
