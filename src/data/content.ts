import { CMSContent } from '../types';

export const cmsContent: CMSContent = {
  hero: {
    title: "La educación entra en modo juego",
    subtitle: "Gamificación con propósito pedagógico para captar y sostener la atención en el aula",
    primaryCTA: "Probar demo",
    secondaryCTA: "Ver cómo funciona",
    mascotImage: "/src/assets/Peaky Base.png"
  },
  statistics: [
    {
      id: "attention-span",
      value: "8 seg",
      label: "Duración promedio de atención",
      description: "Los estudiantes pierden el foco cada 8 segundos en clases tradicionales",
      source: "Microsoft Research 2023"
    },
    {
      id: "engagement-drop",
      value: "67%",
      label: "Caída en participación",
      description: "Reducción del engagement estudiantil en los últimos 5 años"
    },
    {
      id: "teacher-burnout",
      value: "73%",
      label: "Docentes reportan agotamiento",
      description: "Por dificultades para mantener la atención de sus estudiantes"
    },
    {
      id: "gamification-impact",
      value: "+89%",
      label: "Mejora en retención",
      description: "Incremento en retención de conocimiento con gamificación educativa"
    }
  ],
  gameMechanics: [
    {
      id: "swipe-vf",
      name: "Swipe V/F",
      description: "Desliza para responder verdadero o falso de forma intuitiva",
      pedagogicalSkill: "Evaluación rápida y toma de decisiones",
      icon: "Move"
    },
    {
      id: "drag-drop",
      name: "Drag & Drop",
      description: "Arrastra elementos para clasificar, ordenar y relacionar conceptos",
      pedagogicalSkill: "Pensamiento lógico y categorización",
      icon: "Move"
    },
    {
      id: "tap-answer",
      name: "Tap-to-Answer",
      description: "Toca la respuesta correcta en desafíos de opción múltiple",
      pedagogicalSkill: "Reconocimiento de patrones y memoria",
      icon: "TouchApp"
    },
    {
      id: "pressure-mode",
      name: "Modo Presión",
      description: "Responde contra el tiempo para aumentar la concentración",
      pedagogicalSkill: "Atención sostenida y gestión del estrés",
      icon: "Timer"
    },
    {
      id: "streaks",
      name: "Rachas",
      description: "Mantén respuestas correctas consecutivas para desbloquear recompensas",
      pedagogicalSkill: "Persistencia y motivación intrínseca",
      icon: "Zap"
    },
    {
      id: "lives",
      name: "Sistema de Vidas",
      description: "Gestiona tus oportunidades estratégicamente",
      pedagogicalSkill: "Planificación y gestión de recursos",
      icon: "Heart"
    },
    {
      id: "ranking",
      name: "Rankings",
      description: "Compite sanamente con tus compañeros de clase",
      pedagogicalSkill: "Motivación social y colaboración",
      icon: "Trophy"
    },
    {
      id: "rewards",
      name: "Recompensas",
      description: "Desbloquea logros, avatares y contenido especial",
      pedagogicalSkill: "Refuerzo positivo y autorregulación",
      icon: "Gift"
    }
  ],
  teacherFeatures: [
    {
      id: "ai-lesson-creation",
      title: "Creación con IA",
      description: "Sube un PDF y nuestra IA genera automáticamente lecciones gamificadas",
      benefits: [
        "Ahorra 80% del tiempo de preparación",
        "Adapta contenido a diferentes niveles",
        "Sugiere mecánicas según el tema"
      ],
      icon: "Brain"
    },
    {
      id: "class-management",
      title: "Gestión de Aulas",
      description: "Configura clases, asigna estudiantes y personaliza experiencias",
      benefits: [
        "Dashboard centralizado",
        "Grupos flexibles",
        "Configuración por estudiante"
      ],
      icon: "Users"
    },
    {
      id: "analytics",
      title: "Analíticas Avanzadas",
      description: "Métricas detalladas de progreso, atención y áreas de mejora",
      benefits: [
        "Reportes automáticos",
        "Identificación de dificultades",
        "Seguimiento longitudinal"
      ],
      icon: "BarChart3"
    },
    {
      id: "streak-control",
      title: "Control de Mecánicas",
      description: "Ajusta rachas, vidas y recompensas según objetivos pedagógicos",
      benefits: [
        "Personalización por materia",
        "Equilibrio motivacional",
        "Intervención oportuna"
      ],
      icon: "Settings"
    }
  ],
  studentFeatures: [
    {
      id: "intrinsic-motivation",
      title: "Motivación Intrínseca",
      description: "Desarrolla amor por el aprendizaje a través del juego significativo",
      benefits: [
        "Curiosidad natural",
        "Autonomía en el aprendizaje",
        "Satisfacción por el logro"
      ],
      icon: "Sparkles"
    },
    {
      id: "visual-progress",
      title: "Progreso Visual",
      description: "Ve tu crecimiento con gráficos, medallas y mapas de progreso",
      benefits: [
        "Retroalimentación inmediata",
        "Metas claras y alcanzables",
        "Celebración de logros"
      ],
      icon: "TrendingUp"
    },
    {
      id: "avatars-rewards",
      title: "Avatares y Recompensas",
      description: "Personaliza tu experiencia y desbloquea contenido exclusivo",
      benefits: [
        "Expresión personal",
        "Metas a largo plazo",
        "Reconocimiento social"
      ],
      icon: "Crown"
    },
    {
      id: "social-learning",
      title: "Aprendizaje Social",
      description: "Colabora, compite sanamente y aprende con tus compañeros",
      benefits: [
        "Trabajo en equipo",
        "Competencia positiva",
        "Apoyo entre pares"
      ],
      icon: "Users2"
    }
  ],
  testimonials: [
    {
      id: "maria-gonzalez",
      name: "María González",
      role: "Profesora de Matemáticas",
      institution: "Colegio San Patricio",
      content: "PeakMind transformó completamente mi aula. Los estudiantes que antes se distraían ahora participan activamente. La creación de lecciones con IA me ahorra horas de preparación.",
      avatar: "/placeholder-avatar-1.jpg",
      rating: 5
    },
    {
      id: "carlos-mendez",
      name: "Carlos Méndez",
      role: "Director Académico",
      institution: "Instituto Tecnológico del Sur",
      content: "Implementamos PeakMind en toda la institución. Los resultados son extraordinarios: 40% menos ausentismo y 60% más participación en clase.",
      avatar: "/placeholder-avatar-2.jpg",
      rating: 5
    },
    {
      id: "ana-rodriguez",
      name: "Ana Rodríguez",
      role: "Profesora de Ciencias",
      institution: "Escuela Primaria Esperanza",
      content: "Mis estudiantes de 4to grado ahora entienden conceptos complejos jugando. Las analíticas me ayudan a identificar exactamente dónde necesitan apoyo adicional.",
      avatar: "/placeholder-avatar-3.jpg",
      rating: 5
    }
  ],
  faqs: [
    {
      id: "what-is-peakmind",
      question: "¿Qué es PeakMind exactamente?",
      answer: "PeakMind es una plataforma educativa que utiliza gamificación con propósito pedagógico para mejorar la atención y motivación en el aula. Combina minijuegos educativos, mecánicas de juego y analíticas para crear experiencias de aprendizaje más efectivas.",
      category: "general"
    },
    {
      id: "data-privacy",
      question: "¿Cómo protegen los datos de mis estudiantes?",
      answer: "Cumplimos con COPPA, FERPA y GDPR. Los datos están encriptados, almacenados en servidores seguros y nunca se comparten con terceros. Los docentes tienen control total sobre la información de sus estudiantes.",
      category: "privacy"
    },
    {
      id: "device-compatibility",
      question: "¿En qué dispositivos funciona PeakMind?",
      answer: "PeakMind funciona en tablets, computadoras, smartphones y pizarras interactivas. Es una aplicación web que no requiere instalación y funciona tanto online como offline.",
      category: "technical"
    },
    {
      id: "internet-requirements",
      question: "¿Necesito conexión a internet constante?",
      answer: "No. PeakMind funciona offline una vez descargado el contenido. Los datos se sincronizan automáticamente cuando hay conexión disponible.",
      category: "technical"
    },
    {
      id: "implementation-time",
      question: "¿Cuánto tiempo toma implementar PeakMind?",
      answer: "La configuración inicial toma menos de 30 minutos. Crear tu primera lección gamificada con IA toma solo 5 minutos subiendo un PDF.",
      category: "general"
    },
    {
      id: "pricing-model",
      question: "¿Cuál es el modelo de precios?",
      answer: "Ofrecemos planes flexibles por estudiante/mes, con descuentos por volumen para instituciones. Incluye prueba gratuita de 30 días sin compromiso.",
      category: "pricing"
    }
  ],
  roadmap: [
    {
      id: "ai-adaptive",
      title: "IA Adaptativa Avanzada",
      description: "Sistema que ajusta automáticamente la dificultad según el progreso individual",
      quarter: "Q2 2024",
      status: "in-progress"
    },
    {
      id: "vr-integration",
      title: "Integración con Realidad Virtual",
      description: "Experiencias inmersivas para materias como Historia y Ciencias",
      quarter: "Q3 2024",
      status: "planned"
    },
    {
      id: "parent-portal",
      title: "Portal para Padres",
      description: "Dashboard para que las familias sigan el progreso de sus hijos",
      quarter: "Q4 2024",
      status: "planned"
    },
    {
      id: "multilingual",
      title: "Soporte Multiidioma",
      description: "Expansión a inglés, portugués y francés",
      quarter: "Q1 2025",
      status: "planned"
    }
  ]
};