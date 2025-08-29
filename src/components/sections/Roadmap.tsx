import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, Calendar } from 'lucide-react';
import { Card } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { cmsContent } from '../../data/content';

const statusIcons = {
  completed: CheckCircle,
  'in-progress': Clock,
  planned: Calendar
};

const statusColors = {
  completed: 'text-green-600 bg-green-100',
  'in-progress': 'text-blue-600 bg-blue-100',
  planned: 'text-gray-600 bg-gray-100'
};

const statusLabels = {
  completed: 'Completado',
  'in-progress': 'En desarrollo',
  planned: 'Planificado'
};

export const Roadmap: React.FC = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="roadmap" className="py-20 bg-white">
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
            Nuestro{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              roadmap
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conoce las próximas funcionalidades que harán de PeakMind una herramienta aún más poderosa
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-violet-200 via-indigo-200 to-gray-200"></div>

          {/* Roadmap Items */}
          <div className="space-y-8">
            {cmsContent.roadmap.map((item, index) => {
              const StatusIcon = statusIcons[item.status];
              
              return (
                <motion.div key={item.id} variants={itemVariants}>
                  <div className="relative flex items-start gap-6">
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-16 h-16 rounded-full flex items-center justify-center ${statusColors[item.status]}`}>
                      <StatusIcon className="w-8 h-8" />
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8">
                      <Card className="h-full" hover={true}>
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                          <div className="flex flex-col items-end gap-2 ml-4">
                            <Badge 
                              variant={item.status === 'completed' ? 'success' : item.status === 'in-progress' ? 'info' : 'secondary'}
                              size="sm"
                            >
                              {statusLabels[item.status]}
                            </Badge>
                            <span className="text-sm font-medium text-violet-600">
                              {item.quarter}
                            </span>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Future Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white text-center" padding="lg">
            <h3 className="text-3xl font-bold mb-4">
              El futuro de la educación gamificada
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Estamos construyendo la plataforma educativa más avanzada del mundo, 
              donde cada estudiante puede alcanzar su máximo potencial a través del juego inteligente
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-violet-600 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                Únete al beta
              </motion.button>

            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};