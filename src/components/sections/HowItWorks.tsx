import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Wand2, BarChart3, ArrowRight } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';

const steps = [
  {
    id: 1,
    title: 'Crear aula',
    description: 'Configura tu clase en minutos. Agrega estudiantes, define objetivos y personaliza la experiencia.',
    icon: Upload,
    benefits: ['Setup en 5 minutos','Configuración flexible'],
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Diseñar lección gamificada',
    description: 'Sube un PDF y nuestra IA genera automáticamente minijuegos adaptados al contenido.',
    icon: Wand2,
    benefits: ['IA generativa', 'Adaptación automática'],
    color: 'from-violet-500 to-purple-500'
  },
  {
    id: 3,
    title: 'Medir progreso',
    description: 'Obtén analíticas sobre atención, participación y áreas de mejora de cada estudiante.',
    icon: BarChart3,
    benefits: ['Métricas', 'Insights pedagógicos'],
    color: 'from-green-500 to-emerald-500'
  }
];

export const HowItWorks: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-white" id='testimonials'>
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
            Cómo funciona{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              PeakMind
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tres pasos simples para transformar tu aula en un espacio de aprendizaje gamificado
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8"
        >
          {steps.map((step, index) => (
            <motion.div key={step.id} variants={itemVariants} className="relative">
              <Card className="h-full text-center" padding="lg">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-white font-bold text-sm`}>
                    {step.id}
                  </div>
                </div>

                {/* Icon */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center mx-auto mb-6 mt-4`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Benefits */}
                <div className="space-y-2 space-x-1">
                  {step.benefits.map((benefit, benefitIndex) => (
                    <Badge key={benefitIndex} variant="secondary" size="sm">
                      {benefit}
                    </Badge>
                  ))}
                </div>
              </Card>

              {/* Arrow (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <ArrowRight className="w-4 h-4 text-violet-600" />
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Listo para revolucionar tu aula?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-violet-600 text-white rounded-xl font-semibold shadow-lg hover:bg-violet-700 transition-colors"
            >
              Comenzar ahora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};