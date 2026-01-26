import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-stone-900 text-stone-300 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-3 group">
                            <div className="relative w-16 h-16 shrink-0 rounded-full overflow-hidden border-2 border-stone-700 group-hover:border-primary transition-colors bg-white">
                                <Image
                                    src="/images/logo.png"
                                    alt="Nehal Bangles Logo"
                                    fill
                                    className="object-cover rounded-full"
                                />
                            </div>
                            <span className="text-2xl font-bold font-serif text-white tracking-wide">
                                NEHAL<span className="text-primary">BANGLES</span>
                            </span>
                        </Link>
                        <p className="text-sm leading-relaxed text-stone-400">
                            Adorning your wrists with elegance and tradition. We bring you the finest collection of Glass, Gold, and Kundan bangles for every special occasion.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Twitter size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-white font-serif text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {['Home', 'Shop All', 'Wedding Collection', 'New Arrivals', 'About Us'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-primary transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Care */}
                    <div>
                        <h3 className="text-white font-serif text-lg mb-6">Customer Care</h3>
                        <ul className="space-y-3 text-sm">
                            {['Track Order', 'Shipping Policy', 'Returns & Exchanges', 'Size Guide', 'FAQs'].map((item) => (
                                <li key={item}>
                                    <Link href="#" className="hover:text-primary transition-colors">{item}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-serif text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start space-x-3">
                                <MapPin size={18} className="text-primary mt-0.5" />
                                <span>Inside of Gol Bazar, Dhamtari, Chhattisgarh 493776</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Phone size={18} className="text-primary" />
                                <span>+91 98933 17861, +91 91099 23321</span>
                            </li>
                            <li className="flex items-center space-x-3">
                                <Mail size={18} className="text-primary" />
                                <span>hello@nehalbangles.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-stone-800 mt-16 pt-8 text-center text-xs text-stone-500">
                    <p>&copy; {new Date().getFullYear()} Nehal Bangles. All rights reserved. Designed with ❤️ in India.</p>
                </div>
            </div>
        </footer>
    );
}
