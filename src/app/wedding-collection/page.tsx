'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WeddingCollectionPage() {
    const bridalProducts = products.filter(p => p.category === 'Bridal');

    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar />

            {/* Bridal Hero Banner */}
            <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/bridal_collection.png"
                        alt="Wedding Collection Banner"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>

                <div className="relative z-10 text-center text-white p-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-secondary tracking-[0.3em] uppercase text-sm font-bold mb-4 block">The Royal Edit</span>
                        <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">Wedding Collection</h1>
                        <p className="max-w-xl mx-auto text-stone-200 text-lg font-light leading-relaxed">
                            Handcrafted heirlooms for your special day. Discover our exquisite range of Chura, Kaleeras, and Polki sets.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Curated Gallery Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-secondary font-bold tracking-widest uppercase text-sm">Inspiration</span>
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Real Brides, Real Royal</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[600px] md:h-[500px]">
                        {/* Large Left Image */}
                        <div className="md:col-span-2 relative rounded-lg overflow-hidden group">
                            <Image
                                src="/images/hero/luxury_model_vogue.png"
                                alt="Bridal Editorial"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <h3 className="text-2xl font-serif">The Vogue Edit</h3>
                            </div>
                        </div>

                        {/* Right Column Stack */}
                        <div className="flex flex-col gap-6">
                            <div className="relative flex-1 rounded-lg overflow-hidden group">
                                <Image
                                    src="/images/hero/artistic_stack_vogue.png"
                                    alt="Detail Shot"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="relative flex-1 rounded-lg overflow-hidden group">
                                <Image
                                    src="/images/products/royal_kundan_bridal_set.png"
                                    alt="Jewellery Detail"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20" />
                                <div className="absolute bottom-4 left-4 text-white">
                                    <p className="font-serif italic">Intricate Details</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="mb-12">
                    <h2 className="text-3xl font-serif text-stone-900 border-b border-stone-200 pb-4 inline-block">
                        All Bridal Sets ({bridalProducts.length})
                    </h2>
                </div>

                {bridalProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {bridalProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-stone-500 py-20">New bridal collections arriving soon.</p>
                )}
            </main>

            <Footer />
        </div>
    );
}
