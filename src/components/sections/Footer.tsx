import React from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Heart,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: 'Cómo funciona', href: '#how-it-works' },
      { label: 'Mecánicas de juego', href: '#game-mechanics' },
      { label: 'Testimonios', href: '#testimonials' },
      { label: 'Precios', href: '#faq' }
    ],
  };

  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com/peakmind.dev', label: 'Instagram' },
    { icon: Linkedin, href: 'https://www.linkedin.com/company/peakmind-dev', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Logo */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold">
                    <img src="/logo.png" alt="Logo" className="w-10 h-8 p-1" />
                  </span>
                </div>
                <span className="text-2xl font-bold">PeakMind</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformamos la educación a través de la gamificación inteligente,
                ayudando a docentes y estudiantes a alcanzar su máximo potencial.
              </p>

              {/* Contact Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">peakmind.info@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+54 11 2374-1777</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Buenos Aires, Argentina</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-start-6 mt-12 lg:col-span-1 lg:pr-8"
          >
            <h3 className="font-bold text-white mb-4 text-lg">Producto</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <span>© 2025 PeakMind. Hecho con</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>para la educación.</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="w-10 h-10 bg-gray-800 hover:bg-violet-600 rounded-lg flex items-center justify-center transition-colors"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};