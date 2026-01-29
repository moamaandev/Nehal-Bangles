'use client';

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function WeddingCollectionPage() {
    const bridalProducts = products.filter((p) => p.category === "Bridal");

    return (
        <div className="min-h-screen bg-gradient-to-b from-stone-50 via-[#FFFDF7] to-stone-100">
            <Navbar />

            {/* Bridal Hero Banner */}
            <section className="relative overflow-hidden pt-24 pb-20 md:pt-32 md:pb-24">
                <div className="absolute inset-0">
                    <Image
                        src="/images/hero/bridalcollection.png"
                        alt="Wedding Collection Banner"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/20" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_minmax(0,1fr)] gap-10 lg:gap-16 items-center">
                        {/* Text block */}
                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-white"
                        >
                            <span className="inline-flex items-center rounded-full border border-secondary/50 bg-secondary/20 px-5 py-1 text-[11px] md:text-xs font-semibold tracking-[0.3em] uppercase mb-5">
                                The Royal Edit
                            </span>
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight">
                                Wedding Collection
                            </h1>
                            <p className="mt-5 max-w-2xl text-sm md:text-lg text-stone-200 leading-relaxed">
                                Handcrafted bridal chura, kadas and statement bangles designed to
                                complement your lehenga, photography and every ceremony from
                                engagement to vidaai.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <Link
                                    href="#bridal-sets"
                                    className="inline-flex items-center justify-center rounded-full bg-white text-stone-900 px-8 py-3 text-sm md:text-base font-semibold tracking-[0.16em] uppercase hover:bg-secondary hover:text-white transition-colors"
                                >
                                    Browse bridal sets
                                </Link>
                                <button className="inline-flex items-center justify-center rounded-full border border-white/50 px-8 py-3 text-sm md:text-base font-semibold tracking-[0.16em] uppercase text-white/90 hover:bg-white/10 transition-colors">
                                    Book styling consult
                                </button>
                            </div>
                        </motion.div>

                        {/* Hero collage */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
                            className="hidden sm:block"
                        >
                            <div className="grid grid-cols-2 gap-4 lg:gap-5">
                                <div className="relative col-span-2 aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-white/5 backdrop-blur-sm">
                                    <Image
                                        src="/images/products/ruby_red_bridal_chura.png"
                                        alt="Ruby red bridal chura"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-white/5">
                                    <Image
                                        src="/images/products/royal_kundan_bridal_set.png"
                                        alt="Royal kundan bridal set"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                                <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-white/20 bg-white/5">
                                    <Image
                                        src="/images/products/antique_gold_temple_kadas.png"
                                        alt="Antique gold temple kadas"
                                        fill
                                        className="object-contain p-4"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    </div>
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
                        <div className="md:col-span-2 relative rounded-3xl overflow-hidden group">
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
                            <div className="relative flex-1 rounded-3xl overflow-hidden group">
                                <Image
                                    src="/images/hero/artistic_stack_vogue.png"
                                    alt="Detail Shot"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                            <div className="relative flex-1 rounded-3xl overflow-hidden group">
                                <Image
                                    src="/images/products/royal_kundan_bridal_set.png"
                                    alt="Jewellery Detail"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                            </div>
                        </div>
                    </div>
                    {/* Secondary gallery row */}
                    <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="relative h-64 rounded-3xl overflow-hidden group">
                            <Image
                                src="/images/hero/gold_kadas.png"
                                alt="Gold kada stack"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="relative h-64 rounded-3xl overflow-hidden group">
                            <Image
                                src="/images/products/emerald_polki_statement_bangles.png"
                                alt="Emerald polki statement bangles"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <div className="relative h-64 rounded-3xl overflow-hidden group">
                            <Image
                                src="/images/products/classic_golden_glass_velvet_set.png"
                                alt="Classic golden glass velvet set"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                        </div>
                    </div>
                </div>
            </section>

            {/* How it works / styling steps */}
            <section className="bg-white/80 border-y border-stone-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
                    <div className="grid grid-cols-1 md:grid-cols-[1.2fr_minmax(0,1fr)] gap-10 md:gap-16 items-start">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-serif text-stone-900 mb-4">
                                Your bridal bangle styling, made simple
                            </h2>
                            <p className="text-sm md:text-base text-stone-600 mb-8 max-w-xl">
                                Whether you are a minimalist bride or love full traditional looks,
                                our team helps you layer glass, gold and kundan pieces so your wrists
                                look perfect in every photograph.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    {
                                        step: "01",
                                        title: "Share your lehenga",
                                        text: "Show us your outfit colours and embroidery details in-store or on WhatsApp.",
                                    },
                                    {
                                        step: "02",
                                        title: "Curated combinations",
                                        text: "We mix glass, metal and kundan bangles to create balanced stacks for each ceremony.",
                                    },
                                    {
                                        step: "03",
                                        title: "Final fitting",
                                        text: "Try everything together and we fine‑tune sizes and colours for a comfortable fit.",
                                    },
                                ].map((item) => (
                                    <div
                                        key={item.step}
                                        className="rounded-2xl border border-stone-200 bg-white/70 px-4 py-5"
                                    >
                                        <p className="text-xs font-semibold tracking-[0.18em] uppercase text-secondary">
                                            Step {item.step}
                                        </p>
                                        <h3 className="mt-2 text-sm md:text-base font-semibold text-stone-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-xs md:text-sm text-stone-600">
                                            {item.text}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-3xl border border-secondary/30 bg-secondary/5 px-6 py-6 md:px-8 md:py-8">
                            <h3 className="text-lg md:text-xl font-serif text-stone-900 mb-3">
                                Visit our bridal styling desk
                            </h3>
                            <p className="text-sm text-stone-600 mb-4">
                                Inside Gol Bazar, Dhamtari – walk in with your outfit pictures and
                                we will help you style for roka, sangeet, wedding and reception.
                            </p>
                            <ul className="space-y-2 text-sm text-stone-700">
                                <li>• Dedicated bridal appointments available</li>
                                <li>• Matching kaleeras and churas on request</li>
                                <li>• Custom colour mixes for glass bangles</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Products Grid */}
            <main
                id="bridal-sets"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20"
            >
                <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-serif text-stone-900">
                            All Bridal Sets ({bridalProducts.length})
                        </h2>
                        <p className="mt-2 text-sm md:text-base text-stone-500 max-w-xl">
                            Curated edit of bangles and chura sets that pair seamlessly with both
                            traditional and contemporary bridal looks.
                        </p>
                    </div>
                    <p className="text-xs md:text-sm text-stone-500">
                        Need guidance? Visit our Gol Bazar store in Dhamtari for personalised styling.
                    </p>
                </div>

                {bridalProducts.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {bridalProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-stone-500 py-20">
                        New bridal collections arriving soon.
                    </p>
                )}
            </main>

            <Footer />
        </div>
    );
}
