import React from 'react';
import { motion } from 'framer-motion';
import { TrendingDown, Clock, Users, TrendingUp } from 'lucide-react';
import { Card } from '../ui/Card';
import { cmsContent } from '../../data/content';

const iconMap = {
  'attention-span': Clock,
  'engagement-drop': TrendingDown,
  'teacher-burnout': Users,
  'gamification-impact': TrendingUp
};

export const ProblemStats: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gray-50">
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
            El problema es real y{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              urgente
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La crisis de atención en las aulas está afectando el aprendizaje de millones de estudiantes
          </p>
        </motion.div>

        {/* Featured Stat */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <Card className="text-center max-w-2xl mx-auto bg-gradient-to-br from-red-50 to-orange-50 border-red-100" padding="lg">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <div className="text-6xl lg:text-7xl font-bold text-red-600">
                {cmsContent.statistics[0].value}
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                {cmsContent.statistics[0].label}
              </h3>
              <p className="text-lg text-gray-600">
                {cmsContent.statistics[0].description}
              </p>
              {cmsContent.statistics[0].source && (
                <p className="text-sm text-gray-500">
                  Fuente: {cmsContent.statistics[0].source}
                </p>
              )}
            </div>
          </Card>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {cmsContent.statistics.slice(1).map((stat, index) => {
            const Icon = iconMap[stat.id as keyof typeof iconMap] || TrendingDown;
            const isPositive = stat.id === 'gamification-impact';
            
            return (
              <motion.div key={stat.id} variants={itemVariants}>
                <Card className={`text-center h-full ${isPositive ? 'bg-gradient-to-br from-green-50 to-emerald-50 border-green-100' : 'bg-gradient-to-br from-red-50 to-orange-50 border-red-100'}`}>
                  <div className="space-y-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto ${isPositive ? 'bg-green-100' : 'bg-red-100'}`}>
                      <Icon className={`w-6 h-6 ${isPositive ? 'text-green-600' : 'text-red-600'}`} />
                    </div>
                    <div className={`text-4xl font-bold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
                      {stat.value}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {stat.label}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {stat.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <p className="text-xl text-gray-700 mb-6">
            Es hora de transformar la educación con{' '}
            <span className="font-semibold text-violet-600">gamificación inteligente</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};