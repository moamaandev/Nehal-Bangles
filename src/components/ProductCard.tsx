'use client';

import Image from 'next/image';
import { Product } from '@/data/products';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface ProductCardProps {
    product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
    return (
        <motion.div
            className="group relative bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-stone-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Badges */}
            <div className="absolute top-3 left-3 z-10 flex flex-col gap-2">
                {product.isNew && (
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                        New
                    </span>
                )}
                {product.originalPrice && (
                    <span className="bg-secondary text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                        Sale
                    </span>
                )}
            </div>

            {/* Wishlist Button */}
            <button className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-stone-400 hover:text-red-500 hover:bg-white transition-all transform hover:scale-110 shadow-sm">
                <Heart size={16} fill="currentColor" className="opacity-0 group-hover:opacity-100 absolute transition-opacity" />
                <Heart size={16} className="group-hover:opacity-0 absolute transition-opacity" />
            </button>

            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden bg-stone-100">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-in-out"
                />

                {/* Quick Add Button - Slide Up on Hover */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out bg-gradient-to-t from-black/50 to-transparent">
                    <button className="w-full bg-white text-stone-900 py-3 rounded-lg font-medium text-sm hover:bg-primary hover:text-white transition-colors flex items-center justify-center gap-2 shadow-lg">
                        <ShoppingBag size={16} />
                        Quick Add
                    </button>
                </div>
            </div>

            {/* Product Details */}
            <div className="p-4">
                <div className="flex items-center gap-1 mb-1">
                    <Star size={12} className="text-accent fill-accent" />
                    <span className="text-xs text-stone-500 font-medium">{product.rating} ({product.reviews})</span>
                </div>

                <h3 className="font-serif text-lg text-stone-800 mb-1 group-hover:text-primary transition-colors line-clamp-1">
                    {product.name}
                </h3>

                <div className="flex items-center gap-2 mt-2">
                    <span className="text-lg font-bold text-stone-900">₹{product.price.toLocaleString('en-IN')}</span>
                    {product.originalPrice && (
                        <span className="text-sm text-stone-400 line-through decoration-stone-400/50">
                            ₹{product.originalPrice.toLocaleString('en-IN')}
                        </span>
                    )}
                </div>

                {/* Color Preview */}
                {product.colors && product.colors.length > 0 && (
                    <div className="flex gap-1 mt-3">
                        {product.colors.slice(0, 3).map((color, i) => (
                            <div
                                key={i}
                                className="w-3 h-3 rounded-full border border-stone-200"
                                style={{ backgroundColor: color.toLowerCase() }}
                                title={color}
                            />
                        ))}
                        {product.colors.length > 3 && (
                            <span className="text-[10px] text-stone-400 self-center">+{product.colors.length - 3}</span>
                        )}
                    </div>
                )}
            </div>
        </motion.div>
    );
}
