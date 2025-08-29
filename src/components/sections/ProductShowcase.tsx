import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Card } from '../ui/Card';

const mockups = [
  {
    id: 'dashboard',
    title: 'Dashboard del Docente',
    description: 'Vista completa del progreso de la clase con métricas en tiempo real',
    image: '/placeholder-dashboard.jpg',
    features: ['Analíticas en tiempo real', 'Gestión de estudiantes', 'Configuración de lecciones']
  },
  {
    id: 'game-interface',
    title: 'Interfaz de Juego',
    description: 'Experiencia inmersiva para estudiantes con mecánicas intuitivas',
    image: '/placeholder-game.jpg',
    features: ['Controles táctiles', 'Feedback inmediato', 'Progreso visual']
  },
  {
    id: 'analytics',
    title: 'Analíticas Detalladas',
    description: 'Reportes comprensivos sobre el desempeño y áreas de mejora',
    image: '/placeholder-analytics.jpg',
    features: ['Reportes automáticos', 'Insights pedagógicos', 'Seguimiento longitudinal']
  },
  {
    id: 'lesson-creator',
    title: 'Creador de Lecciones IA',
    description: 'Herramienta inteligente que convierte PDFs en experiencias gamificadas',
    image: '/placeholder-creator.jpg',
    features: ['Procesamiento IA', 'Adaptación automática', 'Múltiples formatos']
  }
];

export const ProductShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockups.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockups.length) % mockups.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id='product'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conoce a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Peaky
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Main Slide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl mb-8"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="relative"
              >
                {/* Mockup Image Placeholder */}
                <div className="aspect-video bg-gradient-to-br from-violet-100 to-indigo-100 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 bg-violet-200 rounded-2xl mx-auto flex items-center justify-center">
                      <Play className="w-12 h-12 text-violet-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-violet-700 mb-2">
                        {mockups[currentSlide].title}
                      </h3>
                      <p className="text-violet-600">
                        Imagen: {mockups[currentSlide].image}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Overlay with Info */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end">
                  <div className="p-8 text-white">
                    <h3 className="text-3xl font-bold mb-2">
                      {mockups[currentSlide].title}
                    </h3>
                    <p className="text-lg opacity-90 mb-4">
                      {mockups[currentSlide].description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {mockups[currentSlide].features.map((feature, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-white/20 rounded-full text-sm backdrop-blur-sm"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </motion.div>

          {/* Thumbnails */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {mockups.map((mockup, index) => (
              <motion.button
                key={mockup.id}
                onClick={() => goToSlide(index)}
                className={`relative overflow-hidden rounded-xl transition-all duration-300 ${
                  currentSlide === index
                    ? 'ring-4 ring-violet-500 shadow-lg'
                    : 'hover:shadow-md'
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-8 h-8 bg-gray-300 rounded-lg mx-auto mb-2"></div>
                    <p className="text-xs text-gray-600 font-medium">
                      {mockup.title}
                    </p>
                  </div>
                </div>
                {currentSlide === index && (
                  <div className="absolute inset-0 bg-violet-500/20"></div>
                )}
              </motion.button>
            ))}
          </motion.div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {mockups.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-violet-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>


      </div>
    </section>
  );
};