import React, { useEffect, useState } from 'react'; // <-- Agrega useEffect y useState
import { motion } from 'framer-motion';
import { Play, ArrowRight, Sparkles, ArrowDown } from 'lucide-react';
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import './../../assets/fonts/index.css'; // Si usas un archivo CSS para la fuente

export const Hero: React.FC = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollIndicator(window.scrollY < 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    
    <section className="font-[feather] relative min-h-screen bg-gradient-to-br from-violet-50 via-white to-indigo-50 overflow-hidden">
      {/* Background Elements */}

      <div className="absolute inset-0">
        <img src="/assets/Fondo.png" alt="Background" className="absolute object-cover top-0 left-0 w-full h-full bg-violet-200 mix-blend-multiply" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-20 pb-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Badge variant="primary" className="mb-6">
                <img src="/assets/Student.png" alt="Student Icon" className="w-8 h-8 mr-2" />
                <p className="text-sm text-black border-white-600 text-6xl">Gamificación Educativa</p>
              </Badge>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl fontFeather lg:text-7xl text-white leading-tight"
            >
              La educación entra en{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#]-600 to-indigo-600">
                modo juego
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl"
            >
              <p className="text-xl lg:text-2xl text-white leading-relaxed max-w-2xl">
                Gamificación con propósito pedagógico para captar y sostener la atención en el aula
              </p>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="outline"
                size="lg"
                icon={ArrowRight}
                iconPosition="right"
              >
                <p className="text-sm font-featherBold text-white">Ver cómo funciona</p>
              </Button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex items-center gap-6 pt-8"
            >
              <div className="text-sm text-white">
                Confiado por más de <span className="text-[#C9D104]">100 docentes</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Mascot/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="relative">
              {/* Placeholder for Peaky mascot */}
              <div className="w-full max-w-lg mx-auto aspect-square bg-gradient-to-br from-violet-100 to-indigo-100 rounded-3xl flex items-center justify-center border-4 border-white shadow-2xl">
                <div className="text-center space-y-7">
                  <img src="/assets/Peaky Base.png" alt="Peaky Mascota" className="w-80 h-90  mx-auto" />
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-1 bg-white/40 rounded-full p-3 shadow-lg w-16 h-16 flex items-center justify-center"
              >
                <img src="/assets/Heart.png" alt="Heart Icon" className="w-10 h-10 text-white" />
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -left-0 bg-white/40 rounded-full p-3 shadow-lg w-16 h-16 flex items-center justify-center"
              >
                <img src="/assets/Flame.png" alt="Streak Icon" className="w-8 h-10 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {showScrollIndicator && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollClick}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-10 h-10 border-2 border-violet-300 rounded-full flex justify-center"
          >
            <ArrowDown className="w-7 h-5 text-violet-300 mt-2" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};