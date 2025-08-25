import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Twitter, 
  Linkedin, 
  Youtube,
  Heart,
  ExternalLink
} from 'lucide-react';

export const Footer: React.FC = () => {
  const footerLinks = {
    product: [
      { label: 'Cómo funciona', href: '#how-it-works' },
      { label: 'Mecánicas de juego', href: '#game-mechanics' },
      { label: 'Analíticas', href: '#analytics' },
      { label: 'Integraciones', href: '#integrations' },
      { label: 'Precios', href: '#pricing' }
    ],
    resources: [
      { label: 'Blog educativo', href: '/blog' },
      { label: 'Guías pedagógicas', href: '/guides' },
      { label: 'Casos de estudio', href: '/case-studies' },
      { label: 'Webinars', href: '/webinars' },
      { label: 'Centro de ayuda', href: '/help' }
    ],
    company: [
      { label: 'Sobre nosotros', href: '/about' },
      { label: 'Equipo', href: '/team' },
      { label: 'Carreras', href: '/careers' },
      { label: 'Prensa', href: '/press' },
      { label: 'Contacto', href: '/contact' }
    ],
    legal: [
      { label: 'Privacidad', href: '/privacy' },
      { label: 'Términos de uso', href: '/terms' },
      { label: 'Cookies', href: '/cookies' },
      { label: 'COPPA', href: '/coppa' },
      { label: 'FERPA', href: '/ferpa' }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: 'https://twitter.com/peakmind', label: 'Twitter' },
    { icon: Linkedin, href: 'https://linkedin.com/company/peakmind', label: 'LinkedIn' },
    { icon: Youtube, href: 'https://youtube.com/peakmind', label: 'YouTube' }
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
                  <span className="text-white font-bold">P</span>
                </div>
                <span className="text-2xl font-bold">PeakMind</span>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transformamos la educación a través de la gamificación inteligente, 
                ayudando a docentes y estudiantes a alcanzar su máximo potencial.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">hola@peakmind.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-4 h-4" />
                  <span className="text-sm">+54 11 1234-5678</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
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
          >
            <h3 className="font-bold text-white mb-4">Producto</h3>
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-bold text-white mb-4">Recursos</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm flex items-center gap-1"
                  >
                    {link.label}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
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

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="font-bold text-white mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
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

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t border-gray-800 pt-8 mb-8"
        >
          <div className="max-w-md">
            <h3 className="font-bold text-white mb-2">
              Mantente actualizado
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Recibe las últimas novedades sobre gamificación educativa
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
              />
              <button className="px-6 py-2 bg-violet-600 hover:bg-violet-700 rounded-lg font-medium transition-colors">
                Suscribirse
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-2 text-gray-300 text-sm">
            <span>© 2024 PeakMind. Hecho con</span>
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