'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function FilterSidebar() {
    const [expanded, setExpanded] = useState({
        categories: true,
        price: true,
        colors: true,
        sizes: true,
    });

    const categories = ['Glass', 'Gold', 'Kundan', 'Bridal', 'Velvet', 'Metal'];
    const colors = ['Red', 'Green', 'Blue', 'Gold', 'Silver', 'Black', 'Pink'];
    const sizes = ['2.2', '2.4', '2.6', '2.8', '2.10'];

    const toggleSection = (section: keyof typeof expanded) => {
        setExpanded(prev => ({ ...prev, [section]: !prev[section] }));
    };

    return (
        <div className="w-64 flex-shrink-0 pr-8 hidden lg:block">
            <div className="sticky top-24 space-y-8">

                {/* Categories */}
                <div className="border-b border-stone-200 pb-6">
                    <button
                        className="flex items-center justify-between w-full mb-4 font-bold text-stone-900"
                        onClick={() => toggleSection('categories')}
                    >
                        <span>Category</span>
                        {expanded.categories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expanded.categories && (
                        <div className="space-y-2">
                            {categories.map((cat) => (
                                <label key={cat} className="flex items-center gap-3 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 rounded border-stone-300 text-primary focus:ring-primary" />
                                    <span className="text-stone-600 group-hover:text-primary transition-colors">{cat}</span>
                                </label>
                            ))}
                        </div>
                    )}
                </div>

                {/* Price Range */}
                <div className="border-b border-stone-200 pb-6">
                    <button
                        className="flex items-center justify-between w-full mb-4 font-bold text-stone-900"
                        onClick={() => toggleSection('price')}
                    >
                        <span>Price</span>
                        {expanded.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expanded.price && (
                        <div className="space-y-4">
                            <input type="range" min="0" max="10000" className="w-full accent-primary h-1 bg-stone-200 rounded-lg appearance-none cursor-pointer" />
                            <div className="flex items-center justify-between text-sm text-stone-500">
                                <span>₹0</span>
                                <span>₹10,000+</span>
                            </div>
                        </div>
                    )}
                </div>

                {/* Colors */}
                <div className="border-b border-stone-200 pb-6">
                    <button
                        className="flex items-center justify-between w-full mb-4 font-bold text-stone-900"
                        onClick={() => toggleSection('colors')}
                    >
                        <span>Color</span>
                        {expanded.colors ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expanded.colors && (
                        <div className="flex flex-wrap gap-3">
                            {colors.map((color) => (
                                <button
                                    key={color}
                                    className="w-8 h-8 rounded-full border border-stone-200 hover:scale-110 transition-transform focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-white shadow-sm"
                                    style={{ backgroundColor: color.toLowerCase() }}
                                    title={color}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Sizes */}
                <div>
                    <button
                        className="flex items-center justify-between w-full mb-4 font-bold text-stone-900"
                        onClick={() => toggleSection('sizes')}
                    >
                        <span>Size</span>
                        {expanded.sizes ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {expanded.sizes && (
                        <div className="flex flex-wrap gap-2">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    className="px-3 py-1 text-sm border border-stone-300 rounded-md text-stone-600 hover:border-primary hover:text-primary transition-colors"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}
