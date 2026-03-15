'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const isActive = (path: string) => pathname === path;

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled
        ? 'bg-amber-100/95 backdrop-blur-md shadow-lg'
        : 'bg-amber-100 shadow-md'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-amber-900 transition-transform hover:scale-105">
            Hejin
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-200 ${
                isActive('/')
                  ? 'text-amber-900 font-semibold'
                  : 'text-amber-800 hover:text-amber-600'
              }`}
            >
              Home
            </Link>
            <Link
              href="/shop"
              className={`transition-colors duration-200 ${
                isActive('/shop')
                  ? 'text-amber-900 font-semibold'
                  : 'text-amber-800 hover:text-amber-600'
              }`}
            >
              Shop
            </Link>
            <Link
              href="/about"
              className={`transition-colors duration-200 ${
                isActive('/about')
                  ? 'text-amber-900 font-semibold'
                  : 'text-amber-800 hover:text-amber-600'
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`transition-colors duration-200 ${
                isActive('/contact')
                  ? 'text-amber-900 font-semibold'
                  : 'text-amber-800 hover:text-amber-600'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-amber-800 hover:text-amber-600 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-amber-200 pt-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-200 ${
                  isActive('/')
                    ? 'text-amber-900 font-semibold'
                    : 'text-amber-800 hover:text-amber-600'
                }`}
              >
                Home
              </Link>
              <Link
                href="/shop"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-200 ${
                  isActive('/shop')
                    ? 'text-amber-900 font-semibold'
                    : 'text-amber-800 hover:text-amber-600'
                }`}
              >
                Shop
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-200 ${
                  isActive('/about')
                    ? 'text-amber-900 font-semibold'
                    : 'text-amber-800 hover:text-amber-600'
                }`}
              >
                About
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMenuOpen(false)}
                className={`transition-colors duration-200 ${
                  isActive('/contact')
                    ? 'text-amber-900 font-semibold'
                    : 'text-amber-800 hover:text-amber-600'
                }`}
              >
                Contact
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}