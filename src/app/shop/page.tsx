import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { products } from "@/data/products";
import { Filter } from "lucide-react";

export default function Shop() {
    return (
        <div className="min-h-screen bg-stone-50">
            <Navbar />

            <main className="pt-24 pb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-stone-200 pb-4">
                    <div>
                        <h1 className="text-3xl font-serif font-bold text-stone-900">All Bangles</h1>
                        <p className="text-stone-500 mt-1">Showing {products.length} results</p>
                    </div>

                    <div className="flex items-center gap-4 mt-4 md:mt-0">
                        <button className="lg:hidden flex items-center gap-2 px-4 py-2 bg-white border border-stone-300 rounded-lg text-stone-700 font-medium">
                            <Filter size={18} /> Filters
                        </button>

                        <select className="px-4 py-2 bg-white border border-stone-300 rounded-lg text-stone-700 outline-none focus:border-primary">
                            <option>Sort by: Featured</option>
                            <option>Price: Low to High</option>
                            <option>Price: High to Low</option>
                            <option>Newest First</option>
                        </select>
                    </div>
                </div>

                <div className="flex">
                    {/* Sidebar */}
                    <FilterSidebar />

                    {/* Product Grid */}
                    <div className="flex-1">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                            {/* Duplicate products to fill the grid for demo */}
                            {products.map((product) => (
                                <ProductCard key={`${product.id}-dup`} product={{ ...product, id: `${product.id}-dup` }} />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center mt-12 gap-2">
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-stone-300 text-stone-600 hover:border-primary hover:text-primary transition-colors">1</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white">2</button>
                            <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-stone-300 text-stone-600 hover:border-primary hover:text-primary transition-colors">3</button>
                        </div>
                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
}
