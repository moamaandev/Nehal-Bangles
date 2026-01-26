'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-md py-2' : 'bg-white py-4 shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2 group">
                        <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/20 bg-white group-hover:border-primary transition-colors">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                                className="w-full h-full"
                            >
                                <Image
                                    src="/images/logo.png"
                                    alt="Nehal Bangles Logo"
                                    fill
                                    className="object-contain p-1"
                                />
                            </motion.div>
                        </div>
                        <span className="text-2xl font-bold font-serif text-stone-900 tracking-wide">
                            NEHAL<span className="text-primary">BANGLES</span>
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'Shop', 'Wedding Collection', 'About'].map((item) => (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                className="text-stone-800 hover:text-primary transition-colors font-medium text-sm uppercase tracking-wider"
                            >
                                {item}
                            </Link>
                        ))}
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-6">
                        <button className="text-stone-800 hover:text-primary transition-colors">
                            <Search size={22} />
                        </button>
                        <button className="text-stone-800 hover:text-primary transition-colors">
                            <User size={22} />
                        </button>
                        <button className="text-stone-800 hover:text-primary transition-colors relative">
                            <ShoppingBag size={22} />
                            <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                                2
                            </span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-primary transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden glass-effect border-t border-gray-100"
                    >
                        <div className="px-4 pt-2 pb-6 space-y-4 flex flex-col items-center">
                            {['Home', 'Shop', 'Wedding Collection', 'About'].map((item) => (
                                <Link
                                    key={item}
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                                    className="text-foreground hover:text-primary font-medium text-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item}
                                </Link>
                            ))}
                            <div className="flex space-x-6 mt-4">
                                <button className="text-foreground hover:text-primary">
                                    <Search size={24} />
                                </button>
                                <button className="text-foreground hover:text-primary">
                                    <User size={24} />
                                </button>
                                <button className="text-foreground hover:text-primary relative">
                                    <ShoppingBag size={24} />
                                    <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                                        2
                                    </span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
