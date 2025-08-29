import React from 'react';
import { motion } from 'framer-motion';
import { 
  Move, 
  Timer, 
  Zap, 
  Heart, 
  Trophy, 
  Gift,
  TouchpadIcon as TouchApp
} from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { cmsContent } from '../../data/content';

const iconMap = {
  Move,
  TouchApp,
  Timer,
  Zap,
  Heart,
  Trophy,
  Gift
};

export const GameMechanics: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 via-white to-indigo-50">
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
            Minijuegos y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              mecánicas
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada mecánica está diseñada con un propósito pedagógico específico para maximizar el aprendizaje
          </p>
        </motion.div>

        {/* Mechanics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cmsContent.gameMechanics.map((mechanic, index) => {
            const Icon = iconMap[mechanic.icon as keyof typeof iconMap];
            
            return (
              <motion.div key={mechanic.id} variants={itemVariants}>
                <Card className="h-full text-center group cursor-pointer" hover={true}>
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {mechanic.name}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {mechanic.description}
                  </p>

                  {/* Pedagogical Skill */}
                  <Badge variant="primary" size="sm" className="text-xs">
                    {mechanic.pedagogicalSkill}
                  </Badge>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Interactive Demo Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center" padding="lg">
            <h3 className="text-3xl font-bold mb-4">
              ¿Quieres ver las mecánicas en acción?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Prueba nuestra app y experimenta cómo cada minijuego refuerza el aprendizaje
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Descargar aplicacion en tu plataforma preferida
            </motion.button>
          </Card>
        </motion.div>

        {/* Benefits Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 grid md:grid-cols-3 gap-8"
        >
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎯</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Atención Sostenida</h4>
            <p className="text-gray-600 text-sm">Mantiene el foco durante toda la lección</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🧠</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Retención Mejorada</h4>
            <p className="text-gray-600 text-sm">Refuerza conceptos a través del juego</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Motivación Intrínseca</h4>
            <p className="text-gray-600 text-sm">Desarrolla amor genuino por aprender</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};