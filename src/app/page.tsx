import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { products } from "@/data/products";
import { MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen bg-stone-50">
      <Navbar />

      <main>
        <Hero />

        {/* Categories Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <span className="text-secondary font-bold tracking-widest uppercase text-sm">Collections</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900 mt-2">Shop by Category</h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {[
                { name: 'Glass', image: '/images/categories/glass.png' },
                { name: 'Gold', image: '/images/categories/gold.png' },
                { name: 'Kundan', image: '/images/categories/kundan.png' },
                { name: 'Bridal', image: '/images/categories/bridal.png' }
              ].map((cat) => (
                <div key={cat.name} className="group cursor-pointer">
                  <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-3 shadow-md">
                    <div className="absolute inset-0 bg-stone-200 group-hover:scale-105 transition-transform duration-700">
                      <Image
                        src={cat.image}
                        alt={cat.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                    <div className="absolute bottom-4 left-0 right-0 text-center">
                      <h3 className="text-xl font-serif font-bold text-white tracking-wide">{cat.name}</h3>
                    </div>
                  </div>
                </div>
              ))
              }
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-end mb-12">
              <div>
                <h2 className="text-3xl font-serif font-bold text-stone-900">New Arrivals</h2>
                <p className="text-stone-500 mt-2">Handpicked for the festive season</p>
              </div>
              <button className="hidden md:block text-primary font-bold hover:underline">View All Products</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 text-center md:hidden">
              <button className="text-primary font-bold hover:underline">View All Products</button>
            </div>
          </div>
        </section>

        {/* Wedding Collection Banner */}
        <section className="py-20 bg-stone-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/black-linen.png')]"></div>
          <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <span className="text-accent uppercase tracking-[0.2em] text-sm font-bold">The Royal Edit</span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold mt-4 mb-6">Wedding Collection</h2>
            <p className="max-w-2xl mx-auto text-stone-300 text-lg mb-10 leading-relaxed">
              Make your special day unforgettable with our exquisite range of handcrafted bridal sets.
            </p>
            <button className="bg-white text-stone-900 px-10 py-4 rounded-full font-bold hover:bg-accent hover:text-white transition-colors">
              Explore Wedding Store
            </button>
          </div>
        </section>

        <Testimonials />
      </main>

      <Footer />

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919893317861"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center animate-bounce-slow"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
}
