import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, MessageCircle, X } from 'lucide-react';
import { Button } from './Button';

export const StickyCTA: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show after scrolling 50% of viewport
      setIsVisible(scrollPosition > windowHeight * 0.5 && !isDismissed);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-6 left-6 right-6 z-50 max-w-4xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-4">
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">
                  ¿Listo para transformar tu aula?
                </h3>
                <p className="text-sm text-gray-600">
                  Únete a más de 500 docentes que ya usan PeakMind
                </p>
              </div>
              
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="hidden sm:flex group"
                >
                  <MessageCircle className="w-4 h-4 text-gray-600 group-hover:text-white" />
                  <p className="font-featherBold text-gray-900 group-hover:text-white">Hablar con nosotros</p>
                </Button>
                <button
                  onClick={handleDismiss}
                  className="p-2 text-gray-600  rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};