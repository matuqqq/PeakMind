import React, { Suspense, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, Loader2 } from 'lucide-react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, PresentationControls, Html, useProgress } from '@react-three/drei';
import * as THREE from 'three';

/* ----------------------------- Mockups data ----------------------------- */
const mockups = [
  {
    id: 'dashboard',
    title: 'Dashboard del Docente',
    description: 'Vista completa del progreso de la clase con métricas en tiempo real',
    image: '/placeholder-dashboard.jpg',
    features: ['Analíticas en tiempo real', 'Gestión de estudiantes', 'Configuración de lecciones']
  },
  {
    id: 'game-interface',
    title: 'Interfaz de Juego',
    description: 'Experiencia inmersiva para estudiantes con mecánicas intuitivas',
    image: '/placeholder-game.jpg',
    features: ['Controles táctiles', 'Feedback inmediato', 'Progreso visual']
  },
  {
    id: 'analytics',
    title: 'Analíticas Detalladas',
    description: 'Reportes comprensivos sobre el desempeño y áreas de mejora',
    image: '/placeholder-analytics.jpg',
    features: ['Reportes automáticos', 'Insights pedagógicos', 'Seguimiento longitudinal']
  },
  {
    id: 'lesson-creator',
    title: 'Creador de Lecciones IA',
    description: 'Herramienta inteligente que convierte PDFs en experiencias gamificadas',
    image: '/placeholder-creator.jpg',
    features: ['Procesamiento IA', 'Adaptación automática', 'Múltiples formatos']
  }
];

/* ------------------------- Drei/Three helpers -------------------------- */
// Loader overlay while Suspense is pending
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 text-violet-600 animate-spin mb-4" />
        <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-violet-600 to-indigo-600 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(100, Math.max(0, progress))}%` }}
            transition={{ duration: 0.2 }}
          />
        </div>
        <p className="text-sm text-gray-600 mt-2">{Math.round(progress)}% loaded</p>
      </div>
    </Html>
  );
}

// Simple fallback geometry if GLB fails
function FallbackModel() {
  const modelRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += hovered ? 0.01 : 0.005;
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <mesh
      ref={modelRef}
      scale={[1.5, 1.5, 1.5]}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <icosahedronGeometry args={[1, 2]} />
      <meshStandardMaterial
        color={hovered ? '#8b5cf6' : '#6366f1'}
        roughness={0.2}
        metalness={0.8}
        envMapIntensity={1.5}
      />
    </mesh>
  );
}

// GLB model component (no hooks in try/catch; use ErrorBoundary for fallback)
function ModelGLB() {
  const groupRef = useRef<THREE.Group>(null!);
  const [hovered, setHovered] = useState(false);
  const gltf = useGLTF('/public/assets/models/Peaky3D.glb', true); // Suspense + cache

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += hovered ? 0.01 : 0.005;
      groupRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <primitive
      ref={groupRef}
      object={gltf.scene}
      scale={2}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    />
  );
}

// Error boundary to fallback if GLB fails to load (404, etc.)
class ErrorBoundary extends React.Component<{
  fallback: React.ReactNode;
  children: React.ReactNode;
}, { hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {
    // noop: could log
  }
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children as any;
  }
}

/* ----------------------------- 3D Card UI ------------------------------ */
function Peaky3DCard() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
    >
      {/* 3D Canvas */}
      <div className="aspect-video bg-gradient-to-br from-violet-50 via-indigo-50 to-purple-50 relative">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 50, near: 0.1, far: 1000 }}
          dpr={[1, 2]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        >
          {/* Lights */}
          <ambientLight intensity={0.4} />
          <directionalLight
            position={[10, 10, 5]}
            intensity={1}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
          />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          <pointLight position={[10, -10, 10]} intensity={0.5} color="#3b82f6" />

          {/* Env reflections */}
          <Environment preset="studio" />

          {/* Controls & Model */}
          <PresentationControls
            enabled
            global={false}
            cursor
            snap={false}
            speed={1}
            zoom={1}
            rotation={[0, 0, 0]}
            polar={[-Math.PI / 3, Math.PI / 3]}
            azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}
          >
            <Suspense fallback={<Loader />}>
              <ErrorBoundary fallback={<FallbackModel />}>
                <ModelGLB />
              </ErrorBoundary>
            </Suspense>
          </PresentationControls>

          <OrbitControls
            enablePan={false}
            enableZoom
            enableRotate
            minDistance={3}
            maxDistance={8}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI - Math.PI / 6}
          />
        </Canvas>

        {/* Gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

        {/* Instructions */}
        <div className="absolute bottom-4 left-4 right-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 text-center"
          >
            <p className="text-sm text-gray-700 font-medium">
              🖱️ Arrastrá para rotar • 🔍 Zoom con rueda • 📱 Toca y deslizá en móvil
            </p>
          </motion.div>
        </div>

        {/* Perf dot */}
        <div className="absolute top-4 right-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.4 }}
            className="w-3 h-3 bg-green-500 rounded-full shadow-lg animate-pulse"
            title="Modelo 3D cargado y optimizado"
          />
        </div>
      </div>

    </motion.div>
  );
}

/* --------------------------- Main export component --------------------------- */
export const ProductShowcase: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % mockups.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + mockups.length) % mockups.length);
  const goToSlide = (index: number) => setCurrentSlide(index);

  const active = mockups[currentSlide];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white" id="product">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Conocé a{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Peaky
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro perezoso que representa al alumno que nunca tiene ganas de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              estudiar.
            </span>
            
          </p>
        </motion.div>

        {/* 3D Card */}
        <Peaky3DCard />

        {/* Mockups carousel */}
        <div className="mt-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-bold text-gray-900">Producto en acción</h3>
            <div className="flex items-center gap-2">
              <button
                onClick={prevSlide}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition"
                aria-label="Anterior"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition"
                aria-label="Siguiente"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch"
          >
            {/* Image / mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 bg-white">
              <div className="aspect-video bg-gray-100">
                {/* Reemplazá por tu componente de imagen optimizada si tenés */}
                <img
                  src={active.image}
                  alt={active.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Details */}
            <div className="rounded-2xl border border-gray-200 bg-white p-6 lg:p-8 flex flex-col">
              <h4 className="text-2xl font-bold text-gray-900">{active.title}</h4>
              <p className="mt-2 text-gray-600">{active.description}</p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {active.features.map((f) => (
                  <div
                    key={f}
                    className="flex items-center gap-2 p-3 rounded-xl border border-gray-200 bg-gray-50"
                  >
                    <span className="w-2 h-2 rounded-full bg-indigo-500" />
                    <span className="text-gray-800 text-sm font-medium">{f}</span>
                  </div>
                ))}
              </div>

              {/* Bullets */}
              <div className="mt-auto pt-6 flex items-center gap-2">
                {mockups.map((m, i) => (
                  <button
                    key={m.id}
                    onClick={() => goToSlide(i)}
                    className={`h-2.5 rounded-full transition-all ${
                      i === currentSlide ? 'w-6 bg-indigo-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Ir a ${m.title}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Opcional: precarga del GLB si existe
useGLTF.preload('/public/assets/models/Peaky3D.glb');
