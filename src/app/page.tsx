import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";
import { products } from "@/data/products";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  const categories = [
    { name: "Glass", image: "/images/categories/glass.png", description: "Everyday elegance in vibrant hues" },
    { name: "Gold", image: "/images/categories/gold.png", description: "Timeless classics with a royal touch" },
    { name: "Kundan", image: "/images/categories/kundan.png", description: "Heirloom-inspired statement pieces" },
    { name: "Bridal", image: "/images/categories/bridal.png", description: "Curated sets for your big day" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-[#FFFDF7] to-stone-100 text-foreground">
      <Navbar />

      <main className="pt-20 md:pt-24">
        <Hero />

        {/* Categories Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center text-center mb-14">
              <span className="text-secondary font-semibold tracking-[0.25em] uppercase text-xs md:text-sm">
                Curated Collections
              </span>
              <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
                Shop by <span className="text-primary">Category</span>
              </h2>
              <p className="mt-4 max-w-2xl text-sm md:text-base text-stone-600">
                Discover handpicked designs for every occasion – from everyday glass bangles to
                luxurious bridal sets crafted to perfection.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-500 border border-stone-100"
                >
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/70 via-stone-900/10 to-transparent" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-4 md:p-5">
                    <h3 className="text-lg md:text-xl font-serif font-semibold text-white tracking-wide">
                      {cat.name}
                    </h3>
                    <p className="mt-1 text-xs md:text-sm text-stone-200">
                      {cat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-white/80 border-y border-stone-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-900">
                  New Arrivals
                </h2>
                <p className="mt-2 text-sm md:text-base text-stone-500">
                  Fresh pieces added this season, crafted for modern celebrations.
                </p>
              </div>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-900 hover:border-primary hover:text-primary transition-colors"
              >
                View all products
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="mt-10 text-center md:hidden">
              <Link
                href="/shop"
                className="text-primary font-semibold underline underline-offset-4"
              >
                Browse full collection
              </Link>
            </div>
          </div>
        </section>

        {/* Wedding Collection Banner */}
        <section className="relative overflow-hidden py-20 md:py-24">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-900 via-stone-950 to-stone-900" />
          <div className="absolute -inset-x-40 -top-40 h-80 bg-gradient-to-b from-accent/20 to-transparent opacity-60 blur-3xl" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border border-accent/40 rounded-3xl bg-white/5 backdrop-blur-xl px-6 py-10 md:px-16 md:py-16 text-white shadow-[0_18px_60px_rgba(0,0,0,0.55)]">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                {/* Text Block */}
                <div className="text-center lg:text-left">
                  <span className="inline-flex items-center justify-center rounded-full border border-accent/60 bg-accent/20 px-5 py-1 text-[11px] md:text-xs font-semibold tracking-[0.28em] uppercase">
                    The Royal Edit
                  </span>
                  <h2 className="mt-6 text-3xl md:text-5xl lg:text-6xl font-serif font-bold">
                    Wedding Collection
                  </h2>
                  <p className="mt-4 md:mt-6 max-w-xl text-sm md:text-lg text-stone-200 leading-relaxed">
                    Make your special day unforgettable with meticulously crafted bridal chura, kadas,
                    and statement pieces that photograph as beautifully as they feel.
                  </p>
                  <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-4">
                    <Link
                      href="/wedding-collection"
                      className="inline-flex items-center justify-center rounded-full bg-white text-stone-900 px-10 py-3.5 md:px-12 md:py-4 text-sm md:text-base font-semibold tracking-[0.16em] uppercase hover:bg-accent hover:text-white transition-colors"
                    >
                      Explore wedding store
                    </Link>
                    <p className="text-xs md:text-sm text-stone-300">
                      Complimentary styling assistance for bridal orders.
                    </p>
                  </div>
                </div>

                {/* Image Block */}
                <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[2rem] overflow-hidden border border-accent/40 bg-stone-900/40">
                  <Image
                    src="/images/hero/bridalcollection.png"
                    alt="Luxury bridal bangle set from the Nehal Bangles wedding collection"
                    fill
                    priority
                    className="object-cover scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              </div>
            </div>
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 flex items-center justify-center"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} fill="white" />
      </a>
    </div>
  );
}
