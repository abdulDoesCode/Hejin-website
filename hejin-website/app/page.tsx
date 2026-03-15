'use client';

import Link from 'next/link';
import ProductCard from '../components/ProductCard';
import { products } from '../lib/products';
import { useState, useEffect } from 'react';

export default function Home() {
  const featuredProducts = products.slice(0, 8); // Show first 8 products

  // Easy to customize: Just update this array with your own images
  const heroImages = [
    {
      url: 'https://via.placeholder.com/1200x600/8B4513/FFFFFF?text=Leather+Bag+1',
      thumbnail: 'https://via.placeholder.com/80x60/8B4513/FFFFFF?text=1',
      title: 'Handmade Leather Excellence',
      subtitle: 'Discover our collection of meticulously crafted leather bags and accessories.'
    },
    {
      url: 'https://via.placeholder.com/1200x600/654321/FFFFFF?text=Leather+Bag+2',
      thumbnail: 'https://via.placeholder.com/80x60/654321/FFFFFF?text=2',
      title: 'Timeless Craftsmanship',
      subtitle: 'Each piece is made by hand with premium materials and attention to detail.'
    },
    {
      url: 'https://via.placeholder.com/1200x600/4B2F20/FFFFFF?text=Leather+Bag+3',
      thumbnail: 'https://via.placeholder.com/80x60/4B2F20/FFFFFF?text=3',
      title: 'Sustainable Luxury',
      subtitle: 'Beautiful leather goods that last a lifetime and respect the environment.'
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <div>
      {/* Hero Section - Carousel */}
      <section className="relative h-96 md:h-[750px] overflow-hidden bg-gray-200">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full">
              <img
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 z-5"></div>
              <div className="relative z-10 flex items-center justify-center h-full">
                <div className="text-center text-white px-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">
                    {image.title}
                  </h1>
                  <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
                    {image.subtitle}
                  </p>
                  <Link
                    href="/shop"
                    className="bg-amber-600 text-white px-8 py-3 rounded-lg hover:bg-amber-700 transition-colors inline-block"
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {/* Carousel Indicators - Square Thumbnails */}
        <div className="absolute bottom-4 right-4 flex flex-col space-y-2 z-20">
          {heroImages.map((image, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-16 h-12 rounded border-2 transition-all duration-200 overflow-hidden ${
                index === currentSlide
                  ? 'border-white shadow-lg scale-110'
                  : 'border-white/50 hover:border-white/80'
              }`}
            >
              <img
                src={image.thumbnail}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/shop"
              className="bg-amber-600 text-white px-6 py-2 rounded hover:bg-amber-700"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-amber-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">
            Crafted with Passion
          </h2>
          <p className="text-lg text-amber-800 max-w-3xl mx-auto">
            At Hejin, we believe in the beauty of handmade craftsmanship. Every stitch,
            every cut, is done with care and attention to detail. Our leather products
            are not just accessories—they're heirlooms that tell a story of quality and tradition.
          </p>
          <Link
            href="/about"
            className="inline-block mt-6 bg-amber-800 text-white px-6 py-2 rounded hover:bg-amber-700"
          >
            Learn More About Us
          </Link>
        </div>
      </section>
    </div>
  );
}
