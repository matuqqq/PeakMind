import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, Shield, Smartphone, DollarSign, HelpCircle } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { cmsContent } from '../../data/content';

const categoryIcons = {
  general: HelpCircle,
  privacy: Shield,
  technical: Smartphone,
  pricing: DollarSign
};

const categoryColors = {
  general: 'bg-blue-100 text-blue-600',
  privacy: 'bg-green-100 text-green-600',
  technical: 'bg-purple-100 text-purple-600',
  pricing: 'bg-orange-100 text-orange-600'
};

export const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const toggleItem = (id: string) => {
    setOpenItems(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const categories = [
    { id: 'all', label: 'Todas', count: cmsContent.faqs.length },
    { id: 'general', label: 'General', count: cmsContent.faqs.filter(faq => faq.category === 'general').length },
    { id: 'privacy', label: 'Privacidad', count: cmsContent.faqs.filter(faq => faq.category === 'privacy').length },
    { id: 'technical', label: 'Técnico', count: cmsContent.faqs.filter(faq => faq.category === 'technical').length },
    { id: 'pricing', label: 'Precios', count: cmsContent.faqs.filter(faq => faq.category === 'pricing').length }
  ];

  const filteredFAQs = activeCategory === 'all' 
    ? cmsContent.faqs 
    : cmsContent.faqs.filter(faq => faq.category === activeCategory);

  return (
    <section className="py-20 bg-gray-50" id='faq'>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Preguntas{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              frecuentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre PeakMind
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-violet-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <AnimatePresence>
            {filteredFAQs.map((faq, index) => {
              const isOpen = openItems.includes(faq.id);
              const Icon = categoryIcons[faq.category];
              
              return (
                <motion.div
                  key={faq.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden" hover={false}>
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-inset"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4 flex-1">
                          <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${categoryColors[faq.category]}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <h3 className="text-lg font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </h3>
                        </div>
                        <div className="flex-shrink-0">
                          {isOpen ? (
                            <Minus className="w-5 h-5 text-violet-600" />
                          ) : (
                            <Plus className="w-5 h-5 text-gray-400" />
                          )}
                        </div>
                      </div>
                    </button>
                    
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6">
                            <div className="pl-12">
                              <p className="text-gray-600 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Card className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white" padding="lg">
            <h3 className="text-2xl font-bold mb-4">
              ¿No encuentras lo que buscas?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo está aquí para ayudarte con cualquier pregunta específica
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-white text-violet-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-shadow"
              >
                Contactar soporte
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-white text-white rounded-xl font-semibold hover:bg-white hover:text-violet-600 transition-colors"
              >
                Agendar llamada
              </motion.button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};