export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: 'Glass' | 'Gold' | 'Kundan' | 'Bridal' | 'Other';
  image: string;
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Heritage Kundan Bridal Set',
    price: 4999,
    originalPrice: 8999,
    category: 'Bridal',
    image: '/images/products/royal_kundan_bridal_set.png',
    colors: ['Red', 'Gold', 'White'],
    sizes: ['2.4', '2.6', '2.8'],
    isNew: true,
    rating: 4.8,
    reviews: 124,
  },
  {
    id: '2',
    name: 'Vibrant Feroza Glass Bangle Set',
    price: 499,
    category: 'Glass',
    image: '/images/products/feroza_glass_bangle_set.png',
    colors: ['Blue', 'Green', 'Red'],
    sizes: ['2.2', '2.4', '2.6', '2.8'],
    rating: 4.5,
    reviews: 89,
  },
  {
    id: '3',
    name: 'Antique Gold Temple Kadas',
    price: 2499,
    originalPrice: 2999,
    category: 'Gold',
    image: '/images/products/antique_gold_temple_kadas.png',
    colors: ['Gold'],
    sizes: ['2.4', '2.6'],
    rating: 4.9,
    reviews: 56,
  },
  {
    id: '4',
    name: 'Emerald Polki Statement Bangles',
    price: 3299,
    category: 'Kundan',
    image: '/images/products/emerald_polki_statement_bangles.png',
    colors: ['Green', 'Gold'],
    sizes: ['2.4', '2.6', '2.8'],
    isNew: true,
    rating: 4.7,
    reviews: 82,
  },
  {
    id: '5',
    name: 'Ruby Red Bridal Chura',
    price: 1999,
    originalPrice: 2499,
    category: 'Bridal',
    image: '/images/products/ruby_red_bridal_chura.png',
    colors: ['Red', 'Maroon'],
    sizes: ['2.4', '2.6', '2.8'],
    rating: 4.6,
    reviews: 210,
  },
  {
    id: '6',
    name: 'Classic Golden Glass Velvet Set',
    price: 799,
    category: 'Glass',
    image: '/images/products/classic_golden_glass_velvet_set.png',
    colors: ['Red', 'Green', 'Yellow', 'Blue'],
    sizes: ['2.2', '2.4', '2.6', '2.8'],
    rating: 4.3,
    reviews: 155,
  },
  {
    id: '7',
    name: 'Maharani Polki Bangle Set',
    price: 3599,
    category: 'Bridal',
    image: '/images/products/royal_kundan_bridal_set.png', // Reusing for demo
    colors: ['Gold', 'White'],
    sizes: ['2.4', '2.6', '2.8'],
    rating: 4.9,
    reviews: 42,
  },
  {
    id: '8',
    name: 'Rose Gold Bridal Stack',
    price: 2199,
    category: 'Bridal',
    image: '/images/products/ruby_red_bridal_chura.png', // Reusing for demo
    colors: ['Rose Gold'],
    sizes: ['2.4', '2.6'],
    rating: 4.6,
    reviews: 30,
  },
  {
    id: '9',
    name: 'Viraasat Polki Heritage Set',
    price: 5499,
    category: 'Bridal',
    image: '/images/products/royal_kundan_bridal_set.png',
    colors: ['Gold', 'Kundan'],
    sizes: ['2.4', '2.6', '2.8'],
    isNew: true,
    rating: 5.0,
    reviews: 15,
  },
  {
    id: '10',
    name: 'Crimson Velvet Chura Set',
    price: 1899,
    originalPrice: 2299,
    category: 'Bridal',
    image: '/images/products/ruby_red_bridal_chura.png',
    colors: ['Crimson', 'Red'],
    sizes: ['2.4', '2.6'],
    rating: 4.7,
    reviews: 45,
  },
];
