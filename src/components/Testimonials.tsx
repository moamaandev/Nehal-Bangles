'use client';

import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Priya Sharma",
        location: "Delhi",
        text: "The bridal set was absolutely stunning! It matched my lehenga perfectly. The craftsmanship is top-notch.",
        rating: 5
    },
    {
        id: 2,
        name: "Anjali Mehta",
        location: "Mumbai",
        text: "Love the glass bangles collection. Colors are so vibrant and exactly as shown in the pictures. Highly recommend!",
        rating: 5
    },
    {
        id: 3,
        name: "Sneha Reddy",
        location: "Hyderabad",
        text: "Great quality gold plated kadas. They look like real gold. Fast delivery and good packaging.",
        rating: 4
    }
];

export default function Testimonials() {
    return (
        <section className="py-20 bg-stone-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mb-4">Loved by Brides</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex gap-1 text-accent mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill={i < t.rating ? "currentColor" : "none"} className={i < t.rating ? "" : "text-stone-300"} />
                                ))}
                            </div>
                            <p className="text-stone-700 italic mb-6 leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <h4 className="font-bold text-stone-900 text-sm">{t.name}</h4>
                                    <span className="text-xs text-stone-500">{t.location}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
