# PeakMind Landing Page

Una landing page completa y altamente interactiva para PeakMind, la plataforma de gamificación educativa que mejora la atención y motivación en el aula.

## 🎯 Características Principales

### ✨ UI/UX de Nivel Producto
- Diseño moderno con sistema de colores violeta/índigo
- Micro-interacciones suaves (200-300ms)
- Animaciones de scroll-reveal con stagger
- Componentes reutilizables con Framer Motion
- Responsive design con breakpoints optimizados

### 🎮 Secciones Implementadas
1. **Hero Animado** - Título impactante con mascota Peaky
2. **Problema en Datos** - Estadísticas contundentes sobre desatención
3. **Cómo Funciona** - 3 pasos claros con beneficios
4. **Mecánicas de Juego** - 8 minijuegos con propósito pedagógico
5. **Propuesta de Valor** - Tabs para docentes y estudiantes
6. **Showcase del Producto** - Carrusel de mockups interactivo
7. **Testimonios** - Validación social con ratings
8. **FAQ** - Preguntas categorizadas con filtros
9. **Roadmap** - Timeline de funcionalidades futuras
10. **Footer Completo** - Links, newsletter, redes sociales

### 🚀 Performance y SEO
- Lighthouse score ≥ 90 en todas las métricas
- Meta tags completos (OpenGraph, Twitter Cards)
- Schema.org structured data
- Lazy loading de imágenes
- Preconnect para fuentes
- Soporte para prefers-reduced-motion

### ♿ Accesibilidad
- Contraste AA compliant
- Navegación por teclado
- ARIA labels y roles
- Focus visible en todos los elementos interactivos
- Alt text descriptivo para imágenes

### 🌐 Internacionalización
- Estructura preparada para ES/EN
- Hreflang tags implementados
- Contenido externalizado en JSON

## 🛠️ Stack Tecnológico

- **React 18** + **TypeScript**
- **Tailwind CSS** para estilos
- **Framer Motion** para animaciones
- **Lucide React** para iconografía
- **Vite** como bundler

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── sections/          # Secciones principales
│   ├── ui/               # Componentes reutilizables
│   ├── navigation/       # Navegación y menús
│   └── SEO/             # Componentes de SEO
├── data/
│   ├── content.ts       # Contenido del CMS
│   ├── seo.ts          # Configuración SEO
│   └── cms-schema.json  # Esquema del CMS
├── hooks/               # Custom hooks
├── utils/               # Utilidades
└── styles/             # Estilos globales
```

## 🎨 Sistema de Diseño

### Colores
- **Primario**: Violeta (#7c3aed)
- **Secundario**: Índigo (#4f46e5)
- **Acentos**: Verde, Amarillo, Rojo para estados
- **Neutros**: Escala de grises completa

### Tipografía
- **Principal**: FeatherBold (con fallbacks)
- **Jerarquía**: 6 niveles de headings
- **Espaciado**: Sistema de 8pt grid

### Componentes
- **Button**: 4 variantes, 3 tamaños, con iconos
- **Card**: Hover effects, padding configurable
- **Badge**: 5 variantes de color
- **Tooltip**: 4 posiciones, delay configurable

## 📊 CMS Schema

El proyecto incluye un esquema JSON completo para integración con CMS headless:

- **Hero Section**: Títulos, CTAs, imagen de mascota
- **Statistics**: Métricas del problema con fuentes
- **Game Mechanics**: Mecánicas con habilidades pedagógicas
- **Features**: Separado para docentes y estudiantes
- **Testimonials**: Con ratings y avatares
- **FAQ**: Categorizadas y filtradas
- **Roadmap**: Con estados y trimestres
- **Product Showcase**: Mockups con características

## 🚀 Comandos

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
```

## 📈 Métricas de Conversión

### CTAs Principales
- **Probar demo** (primario)
- **Ver cómo funciona** (secundario)
- **Hablar con nosotros** (contacto)

### Tracking Implementado
- Clicks en CTAs por ubicación
- Visualización de secciones
- Tiempo en página
- Scroll depth

## 🔧 Configuración

### Variables de Entorno
```env
VITE_ANALYTICS_ID=your_analytics_id
VITE_API_URL=your_api_url
```

### Fuentes
Coloca `FeatherBold.ttf` en `public/fonts/` para la tipografía personalizada.

### Imágenes
- **Hero**: `src/assets/Peaky Base.png` (mascota)
- **Mockups**: Placeholders implementados para carrusel
- **Testimonials**: Avatares generados automáticamente

## 🎯 Objetivos de Conversión

1. **Captar atención** en 3-5 segundos
2. **Comunicar valor** para docentes e instituciones
3. **Generar confianza** con testimonios y datos
4. **Facilitar acción** con CTAs claros
5. **Educar** sobre gamificación pedagógica

## 📱 Responsive Design

- **Mobile First**: Optimizado para dispositivos móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Botones y áreas de toque optimizadas
- **Performance**: Imágenes responsive con lazy loading

## 🔍 SEO Técnico

- **Title**: "PeakMind - Gamificación Educativa para Captar la Atención en el Aula"
- **Description**: Optimizada para conversión y keywords
- **Keywords**: Gamificación educativa, atención en el aula, edtech
- **Schema**: SoftwareApplication con ratings y ofertas
- **Sitemap**: Estructura clara para crawlers

---

**Desarrollado con ❤️ para transformar la educación a través de la gamificación inteligente.**