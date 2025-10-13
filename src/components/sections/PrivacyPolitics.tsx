import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Shield, Info, Lock, Users, FileText, AlertCircle, Mail } from 'lucide-react';

const FECHA_ACTUALIZACION = "12 de Octubre de 2025";

const SECCIONES = [
    {
        id: 'introduccion',
        icon: Info,
        titulo: '1. Introducción y Responsable del Tratamiento',
        contenido: (
            <>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Esta Política de Privacidad describe cómo <strong>PeakMind</strong> ("nosotros", "nuestro" o "la Compañía") recopila, utiliza y protege su información personal en relación con su uso de la aplicación móvil y/o web de PeakMind (el "Servicio").
                </p>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Al utilizar el Servicio, usted acepta la recopilación y el uso de la información de acuerdo con esta política.
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Nombre de la Entidad Operadora:</strong> PeakMind</li>
                    <li><strong>Domicilio Legal:</strong> Udaondo 2998, Argentina</li>
                    <li><strong>Correo Electrónico de Contacto de Privacidad:</strong> peakmind.info@gmail.com</li>
                </ul>
                <p className="text-gray-700 mt-4 leading-relaxed">
                    Operamos bajo la legislación argentina, buscando cumplir con los estándares internacionales de protección de datos (ej. Ley 25.326).
                </p>
            </>
        )
    },
    {
        id: 'recoleccion',
        icon: FileText,
        titulo: '2. Información que Recopilamos',
        contenido: (
            <>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Recopilamos dos tipos principales de información de nuestros usuarios:
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    A. Información Personal Proporcionada Directamente
                </h3>
                <div className="bg-gray-50 rounded-lg overflow-hidden mb-6">
                    <table className="w-full">
                        <thead className="bg-violet-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tipo de Dato</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Propósito</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-white transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-700">Correo Electrónico</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Creación de cuenta y comunicaciones del servicio.</td>
                            </tr>
                            <tr className="hover:bg-white transition-colors">
                                <td className="px-4 py-3 text-sm text-gray-700">Fecha de Nacimiento</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Verificación de edad y personalización del servicio.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    B. Información Obtenida de Terceros (Autenticación)
                </h3>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Al usar <strong>"Iniciar sesión con Google"</strong>, obtenemos su <strong>Nombre</strong> (para personalizar la experiencia) y su <strong>Correo Electrónico</strong> (para la autenticación).
                </p>

                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    C. Información de Uso Recopilada Automáticamente
                </h3>
                <p className="text-gray-700 leading-relaxed">
                    Recopilamos el <strong>ID de Publicidad</strong> (iOS IDFA o Android ADID) para fines publicitarios, ayudando a nuestros socios a mostrarle anuncios relevantes.
                </p>
            </>
        )
    },
    {
        id: 'uso_proposito',
        icon: Shield,
        titulo: '3. Propósito y Base Legal del Uso de la Información',
        contenido: (
            <>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Utilizamos su información personal exclusivamente para los siguientes propósitos esenciales:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li><strong>Proveer y Mantener el Servicio:</strong> Ejecución del contrato con el usuario (el uso principal de PeakMind).</li>
                    <li><strong>Gestión de Pagos:</strong> Procesar transacciones a través de Stripe.</li>
                    <li><strong>Comunicaciones de Servicio:</strong> Enviarle actualizaciones importantes sobre el funcionamiento de la aplicación.</li>
                </ul>
            </>
        )
    },
    {
        id: 'comparticion',
        icon: Users,
        titulo: '4. Compartición y Divulgación de su Información',
        contenido: (
            <>
                <p className="text-gray-700 mb-6 leading-relaxed">
                    Compartimos su información únicamente con los siguientes terceros o en las siguientes circunstancias:
                </p>
                <div className="bg-gray-50 rounded-lg overflow-hidden mb-6">
                    <table className="w-full">
                        <thead className="bg-violet-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Tercero</th>
                                <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Propósito</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            <tr className="hover:bg-white transition-colors">
                                <td className="px-4 py-3 text-sm font-semibold text-gray-900">Stripe</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Procesamiento seguro de pagos (no almacenamos sus datos de tarjeta).</td>
                            </tr>
                            <tr className="hover:bg-white transition-colors">
                                <td className="px-4 py-3 text-sm font-semibold text-gray-900">Google AdSense</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Mostrar publicidad dirigida dentro del Servicio.</td>
                            </tr>
                            <tr className="hover:bg-white transition-colors">
                                <td className="px-4 py-3 text-sm font-semibold text-gray-900">Autoridades Legales</td>
                                <td className="px-4 py-3 text-sm text-gray-700">Cuando la ley lo exija (ej. orden judicial válida).</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-gray-600 italic leading-relaxed">
                    <strong>Nota sobre la Transferencia de Datos:</strong> Aunque no transferimos sus datos fuera de su país de forma directa, tenga en cuenta que nuestros proveedores de servicios (como Google o Stripe) pueden tener servidores ubicados en otros países.
                </p>
            </>
        )
    },
    {
        id: 'derechos',
        icon: AlertCircle,
        titulo: '5. Derechos del Usuario',
        contenido: (
            <>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    Usted puede ejercer sus derechos sobre su información personal en cualquier momento.
                </p>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-violet-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                            <strong>Derecho de Acceso y Rectificación:</strong> Solicitar una copia o la corrección de sus datos.
                        </span>
                    </li>
                    <li className="flex items-start">
                        <span className="inline-block w-2 h-2 bg-violet-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span>
                            <strong>Derecho de Eliminación (Derecho al Olvido):</strong> Puede solicitar la <strong>eliminación de su cuenta entera</strong> y todos los datos personales asociados.
                        </span>
                    </li>
                </ul>
                <p className="text-gray-700 mt-6 leading-relaxed">
                    Para ejercer cualquiera de estos derechos, por favor, envíenos un correo electrónico a la dirección de contacto: <strong>peakmind.info@gmail.com</strong>.
                </p>
            </>
        )
    },
    {
        id: 'seguridad',
        icon: Lock,
        titulo: '6. Seguridad y Tecnología',
        contenido: (
            <>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    La seguridad de su información es fundamental. Implementamos medidas de seguridad para proteger sus datos.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    Utilizamos <strong>JSON Web Tokens (JWT)</strong> para la autenticación y gestión de sesiones, lo que ayuda a prevenir accesos no autorizados a su cuenta. Sin embargo, recuerde que ningún método de transmisión por Internet es 100% seguro.
                </p>
            </>
        )
    },
    {
        id: 'menores',
        icon: Users,
        titulo: '7. Privacidad de los Menores',
        contenido: (
            <>
                <p className="text-gray-700 mb-4 leading-relaxed">
                    PeakMind está dirigido a un público <strong>mayor de 13 años</strong>.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    No recopilamos intencionalmente información personal de niños menores de 13 años. Si usted es padre o tutor y sabe que su hijo menor de 13 años nos ha proporcionado información, contáctenos inmediatamente a <strong>peakmind.info@gmail.com</strong> para que podamos eliminarla.
                </p>
            </>
        )
    },
    {
        id: 'cambios',
        icon: FileText,
        titulo: '8. Cambios a Esta Política de Privacidad',
        contenido: (
            <p className="text-gray-700 leading-relaxed">
                Podemos actualizar esta Política de Privacidad ocasionalmente. Le notificaremos de cualquier cambio importante publicando la nueva Política en esta página y actualizando la fecha de "Última Actualización". Los cambios son efectivos desde el momento de su publicación.
            </p>
        )
    },
];

const PoliticaDePrivacidad = () => {
    const [expanded, setExpanded] = useState(null);

    const handleChange = (panel) => {
        setExpanded(expanded === panel ? null : panel);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl mb-6">
                        <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Política de{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
                            Privacidad
                        </span>
                    </h1>
                    <p className="text-lg text-gray-600">
                        Última Actualización: {FECHA_ACTUALIZACION}
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {SECCIONES.map((seccion, index) => {
                        const isOpen = expanded === seccion.id;
                        const Icon = seccion.icon;

                        return (
                            <motion.div
                                key={seccion.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-100 hover:shadow-md transition-shadow">
                                    <button
                                        onClick={() => handleChange(seccion.id)}
                                        className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-inset"
                                    >
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-4 flex-1">
                                                <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                                                    <Icon className="w-5 h-5 text-violet-600" />
                                                </div>
                                                <h2 className="text-lg font-semibold text-gray-900 pr-4">
                                                    {seccion.titulo}
                                                </h2>
                                            </div>
                                            <motion.div
                                                animate={{ rotate: isOpen ? 180 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                className="flex-shrink-0"
                                            >
                                                <ChevronDown className="w-6 h-6 text-gray-400" />
                                            </motion.div>
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
                                                <div className="px-6 pb-6 border-t border-gray-100">
                                                    <div className="pt-6">
                                                        {seccion.contenido}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16"
                >
                    <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
                        <Mail className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-3">
                            ¿Tienes preguntas sobre nuestra política?
                        </h3>
                        <p className="text-lg mb-6 opacity-90">
                            Si tiene preguntas o inquietudes sobre esta Política, contáctenos en:
                        </p>
                        <a
                            href="mailto:peakmind.info@gmail.com"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-violet-600 rounded-xl font-semibold hover:shadow-lg transition-shadow"
                        >
                            <Mail className="w-5 h-5" />
                            peakmind.info@gmail.com
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default PoliticaDePrivacidad;
