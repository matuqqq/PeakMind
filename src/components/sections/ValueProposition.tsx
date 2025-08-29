import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, GraduationCap } from 'lucide-react';
import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card } from '../ui/Card';
import { cmsContent } from '../../data/content';

export const ValueProposition: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'teachers' | 'students'>('teachers');

  // Normaliza nombres tipo "shield", "check-circle", "calendar_check" -> "Shield", "CheckCircle", "CalendarCheck"
  const toPascal = (name: string) =>
    name
      ?.trim()
      .replace(/[-_ ]+(\w)/g, (_, c) => c.toUpperCase())
      .replace(/^\w/, (c) => c.toUpperCase());

  const getIcon = (name: string): LucideIcon => {
    // Intento directo (por si ya viene en PascalCase exacto)
    const direct = Icons[name as keyof typeof Icons] as LucideIcon | undefined;
    if (direct) return direct;

    // Intento normalizado a PascalCase
    const pascal = toPascal(name);
    return (Icons[pascal as keyof typeof Icons] as LucideIcon) ?? Icons.HelpCircle;
  };

  const tabVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -20 }
  };

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
    <section className="py-20 bg-white">
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
            Valor para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              todos
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            PeakMind está diseñado para empoderar tanto a docentes como a estudiantes
          </p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-12"
        >
          <div className="bg-gray-100 rounded-2xl p-2 flex">
            <button
              onClick={() => setActiveTab('teachers')}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'teachers'
                  ? 'bg-white text-violet-600 shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <Users className="w-5 h-5" />
              Docentes
            </button>
            <button
              onClick={() => setActiveTab('students')}
              className={`flex items-center gap-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === 'students'
                  ? 'bg-white text-violet-600 shadow-lg'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              <GraduationCap className="w-5 h-5" />
              Estudiantes
            </button>
          </div>
        </motion.div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          {activeTab === 'teachers' && (
            <motion.div
              key="teachers"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8"
              >
                {cmsContent.teacherFeatures.map((feature) => {
                  const IconComponent = getIcon(feature.icon);

                  return (
                    <motion.div key={feature.id} variants={itemVariants}>
                      <Card className="h-full" hover={true}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-violet-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {feature.description}
                            </p>
                            <div className="space-y-2">
                              {feature.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-violet-400 rounded-full"></div>
                                  <span className="text-sm text-gray-700">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}

          {activeTab === 'students' && (
            <motion.div
              key="students"
              variants={tabVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              transition={{ duration: 0.5 }}
            >
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid md:grid-cols-2 gap-8"
              >
                {cmsContent.studentFeatures.map((feature) => {
                  const IconComponent = getIcon(feature.icon);

                  return (
                    <motion.div key={feature.id} variants={itemVariants}>
                      <Card className="h-full" hover={true}>
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                            <IconComponent className="w-6 h-6 text-indigo-600" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                              {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                              {feature.description}
                            </p>
                            <div className="space-y-2">
                              {feature.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-indigo-400 rounded-full"></div>
                                  <span className="text-sm text-gray-700">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>



      </div>
    </section>
  );
};
