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
      value: "46%",
      label: "Caída en participación",
      description: "Reducción del engagement estudiantil en los últimos 5 años",
      source: "https://www.revistadepsicologiayeducacion.es/pdf/135.pdf"
    },
    {
      id: "teacher-burnout",
      value: "76%",
      label: "Docentes reportan agotamiento",
      description: "Por dificultades para mantener la atención de sus estudiantes",
      source: "https://vibe.us/blog/teacher-burnout/?srsltid=AfmBOooCQHUl1z97NxjFJYziC5qYWrWdl_x0Z4bzOqwlIc8rWTwQA52w"
    },
    {
      id: "gamification-impact",
      value: "+20%",
      label: "Mejora en retención",
      description: "Incremento en sus calificaciones y un aumento significativo en la participación en clase con gamificación educativa",
      source: "file:///C:/Users/Matu/Downloads/Dialnet-LaGamificacionEducativaAlternativaParaLaEnsenanzaC-9911844.pdf"
    }
  ],
  gameMechanics: [
    {
      id: "swipe-vf",
      name: "Swipe V/F",
      description: "Desliza para responder verdadero o falso, con feedBack sensorial",
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
      id: "cascade",
      name: "Cascade",
      description: "Toca las respuestas correctas que caen rapidamente a contra del tiempo",
      pedagogicalSkill: "Reconocimiento de palabras por memoria",
      icon: "TouchApp"
    },
    {
      id: "connect",
      name: "Conectar",
      description: "Relaciona conceptos para formar pares correctos y reforzar la comprensión",
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
      id: "mascota",
      name: "Personalizacion de Mascota",
      description: "Gana Livis jugando y compra cosmeticos para personalizar a tu Peaky",
      pedagogicalSkill: "Planificación y gestión de recursos",
      icon: "Heart"
    },
  ],
  teacherFeatures: [
    {
      id: "ai-lesson-creation",
      title: "Creación con IA",
      description: "Sube un PDF y nuestra IA genera automáticamente lecciones gamificadas",
      benefits: [
        "Ahorra 80% del tiempo de preparación",
        "Sugiere mecánicas según el tema"
      ],
      icon: "Brain"
    },
    {
      id: "class-management",
      title: "Gestión de Aulas",
      description: "Configura clases, invita estudiantes y personaliza experiencias",
      benefits: [
        "Dashboard centralizado",
        "Grupos flexibles",
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
      ],
      icon: "BarChart3"
    },
    {
      id: "streak-control",
      title: "Control de Mecánicas",
      description: "Ajusta vidas y tiempos según objetivos pedagógicos",
      benefits: [
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
      id: "Luca-Fernandez",
      name: "Luca Fernandez",
      role: "Profesor de Programacion",
      institution: "San Judas Tadeo",
      content: "PeakMind cambió mi aula. Incluso los más distraídos ahora participan jugando y aprendiendo. Además, las propuestas automáticas me ahorran mucho tiempo de planificación",
      avatar: "/assets/Luc.jpg",
      rating: 5
    },
    {
      id: "carlos-mendez",
      name: "Carlos Méndez",
      role: "Director Académico",
      institution: "Instituto Tecnológico del Sur",
      content: "Implementamos PeakMind en toda la institución. Los resultados son extraordinarios: 40% menos ausentismo y 60% más participación en clase.",
      rating: 5
    },
    {
      id: "ana-rodriguez",
      name: "Ana Rodríguez",
      role: "Profesora de Ciencias",
      institution: "Escuela Primaria Esperanza",
      content: "Mis estudiantes de 4to grado ahora entienden conceptos complejos jugando. Las analíticas me ayudan a identificar exactamente dónde necesitan apoyo adicional.",
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
      answer: "Cumplimos con FERPA y GDPR. Los datos están encriptados, almacenados en servidores seguros y nunca se comparten con terceros. Los docentes tienen control total sobre la información de sus estudiantes.",
      category: "privacy"
    },
    {
      id: "device-compatibility",
      question: "¿En qué dispositivos funciona PeakMind?",
      answer: "PeakMind funciona en tablets y smartphones . Es una aplicación movil que funciona de manera online. proximamente en Pizarras interactivas y computadoras.",
      category: "technical"
    },
    {
      id: "internet-requirements",
      question: "¿Necesito conexión a internet constante?",
      answer: "Si. PeakMind funciona de forma online. Los datos se sincronizan automáticamente cuando hay conexión disponible.",
      category: "technical"
    },
    {
      id: "implementation-time",
      question: "¿Cuánto tiempo toma implementar PeakMind?",
      answer: "La configuración inicial toma menos de 15 minutos. Crear tu primera lección gamificada con IA toma solo 5 minutos subiendo un PDF.",
      category: "general"
    },
    {
      id: "pricing-model",
      question: "¿Cuál es el modelo de precios?",
      answer: "PeakMind es 100% gratuito, Si bien hay opciones de pago, ninguna es obligatoria ni influye en el uso de la app.",
      category: "pricing"
    }
  ],
  roadmap: [
    {
      id: "ai-adaptive",
      title: "IA Adaptativa",
      description: "Sistema que ajusta automáticamente las clases según el progreso individual",
      quarter: "Q3 2025",
      status: "in-progress"
    },
    {
      id: "groupal-games",
      title: "Juegos Grupales",
      description: "Juegos en los cuales los alumnos compiten entre equipos ",
      quarter: "Q4 2025",
      status: "planned"
    },
    {
      id: "multilingual",
      title: "Soporte Multiidioma",
      description: "Expansión a inglés, portugués y francés",
      quarter: "Q1 2026",
      status: "planned"
    },
    {
      id: "parent-portal",
      title: "Portal para Padres",
      description: "Dashboard para que las familias sigan el progreso de sus hijos",
      quarter: "Q1 2026",
      status: "planned"
    },
    {
      id: "multiPlatform",
      title: "Implementacion web y Pizarras virtuales",
      description: "Aplicacion sobre nuevas plataformas para que todos puedan estar conectados a PeakMind",
      quarter: "Q2 2026",
      status: "planned"
    },
  ]
};