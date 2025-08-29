import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';

export const StickyNavigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Cómo funciona', href: '#how-it-works' },
    { label: 'Mecánicas', href: '#game-mechanics' },
    { label: 'Producto', href: '#product' },
    { label: 'Testimonios', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}

          {/* Logo */}
          <div className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img
                src="/assets/titleLogo.png"
                alt="Logo"
                className={`h-16 w-auto transition-all duration-300 ${isScrolled
                    ? "drop-shadow-md [filter:drop-shadow(0_0_3px_rgba(0,0,0,0.8))]"
                    : ""
                  }`}
              />
            </motion.div>
          </div>


          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`font-medium transition-colors text-xl ${isScrolled
                  ? 'text-gray-600 hover:text-gray-400'
                  : 'text-white hover:text-white/60'
                  }`}
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden rounded-lg hover:bg-gray-100 transition-colors w-auto flex items-center justify-center"
            style={{ minWidth: 'auto' }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-600" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white flex flex-col items-center justify-center md:hidden"
          >
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="absolute top-6 right-6 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <X className="w-8 h-8 text-gray-600" />
            </button>
            <div className="space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-2xl text-gray-700 hover:text-violet-600 font-semibold transition-colors text-center"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};