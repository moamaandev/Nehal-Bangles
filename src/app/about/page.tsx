import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 via-[#FFFDF7] to-stone-100">
      <Navbar />
      <main className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <section className="text-center mb-12">
          <span className="text-secondary font-semibold tracking-[0.25em] uppercase text-xs">
            Our Story
          </span>
          <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-stone-900">
            About Nehal Bangles
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-sm md:text-base text-stone-600">
            We curate elegant pieces and wedding essentials designed to complement your celebrations.
            Visit our Gol Bazar store in Dhamtari for personalised styling and complete ceremony-ready collections.
          </p>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="rounded-2xl border border-stone-200 bg-white px-4 py-5">
              <p className="text-sm md:text-base text-stone-800 font-semibold">
                All the makeup brands’ products are available in the shop.
              </p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-white px-4 py-5">
              <p className="text-sm md:text-base text-stone-800 font-semibold">
                All the wedding products are available in the shop.
              </p>
            </div>
          </div>
          <div className="mt-6">
            <Link
              href="/shop"
              className="inline-flex items-center justify-center rounded-full border border-stone-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-stone-900 hover:border-primary hover:text-primary transition-colors"
            >
              Explore the shop
            </Link>
          </div>
        </section>

        <section className="py-12">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-secondary font-semibold tracking-[0.25em] uppercase text-xs md:text-sm">
              Beauty & Styling
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif font-bold text-stone-900">
              Makeup Brands Showcase
            </h2>
            <p className="mt-2 max-w-2xl text-xs md:text-sm text-stone-600">
              Discover popular beauty looks and editorial‑inspired styling that pairs effortlessly with our collections.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-3xl overflow-hidden group bg-stone-100">
              <Image
                src="/images/user_uploaded_reference.png"
                alt="Makeup Brands Showcase"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden group bg-stone-100">
              <Image
                src="/images/hero/artistic_stack_vogue.png"
                alt="Artistic product styling"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden group bg-stone-100">
              <Image
                src="/images/hero/gold_kadas.png"
                alt="Gold styling inspiration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="flex flex-col items-center text-center mb-8">
            <span className="text-secondary font-semibold tracking-[0.25em] uppercase text-xs md:text-sm">
              Wedding Essentials
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl font-serif font-bold text-stone-900">
              Wedding Products Gallery
            </h2>
            <p className="mt-2 max-w-2xl text-xs md:text-sm text-stone-600">
              Curated bridal chura, kadas and statement sets crafted to photograph beautifully on your big day.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-64 rounded-3xl overflow-hidden group bg-stone-100">
              <Image
                src="/images/products/royal_kundan_bridal_set.png"
                alt="Royal kundan bridal set"
                fill
                className="object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden group bg-stone-100">
              <Image
                src="/images/products/ruby_red_bridal_chura.png"
                alt="Ruby red bridal chura"
                fill
                className="object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
            <div className="relative h-64 rounded-3xl overflow-hidden group bg-stone-100">
              <Image
                src="/images/products/antique_gold_temple_kadas.png"
                alt="Antique gold temple kadas"
                fill
                className="object-contain p-4"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/wedding-collection"
              className="inline-flex items-center justify-center rounded-full bg-white text-stone-900 px-8 py-3 text-sm font-semibold tracking-[0.16em] uppercase border border-stone-300 hover:border-secondary hover:text-secondary transition-colors"
            >
              Explore wedding collection
            </Link>
          </div>
        </section>
      </main>
      {/* Bottom composite image */}
      <section className="px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl overflow-hidden border border-stone-200 bg-white">
            <div className="relative w-full h-[340px] sm:h-[420px] lg:h-[520px]">
              <Image
                src="/images/about-bottom-graphic.svg"
                alt="Cohesive graphic combining Makeup Brands Showcase and Wedding Products Gallery"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
