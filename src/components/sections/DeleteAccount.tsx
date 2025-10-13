import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Trash2,
  Shield,
  ChevronDown,
  Send,
  CheckCircle2,
  Info,
  Delete,
} from "lucide-react";

const FECHA_ACTUALIZACION = "12 de Octubre de 2025";

const PASOS = [
  {
    id: "paso1",
    icon: Info,
    titulo: "1. Antes de comenzar",
    descripcion: (
      <>
        <p className="text-gray-700 leading-relaxed mb-3">
          Lamentamos que quieras eliminar tu cuenta 😔.  
          Antes de continuar, recordá que esta acción es <strong>permanente</strong> y todos los datos asociados (perfil, progreso y estadísticas) serán eliminados de forma irreversible.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Si estás seguro, seguí los pasos a continuación para completar la solicitud.
        </p>
      </>
    ),
  },
  {
    id: "paso2",
    icon: Mail,
    titulo: "2. Envíanos un correo",
    descripcion: (
      <>
        <p className="text-gray-700 leading-relaxed mb-4">
          Para eliminar tu cuenta, enviá un correo desde la dirección registrada en la app a:
        </p>
        <a
          href="mailto:peakmind.info@gmail.com?subject=Solicitud%20de%20eliminación%20de%20cuenta"
          className="inline-flex items-center gap-2 px-6 py-3 bg-violet-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          <Send className="w-5 h-5" />
          peakmind.info@gmail.com
        </a>
        <div className="mt-6 bg-gray-50 rounded-xl p-4 text-gray-700 text-sm">
          <p className="font-semibold mb-1">📝 Asunto sugerido:</p>
          <p className="italic">Solicitud de eliminación de cuenta</p>
          <p className="font-semibold mt-4 mb-1">📧 Cuerpo del mensaje:</p>
          <pre className="bg-white p-3 rounded-lg border border-gray-200 overflow-auto text-sm">
            {`Hola equipo de PeakMind,

Solicito la eliminación definitiva de mi cuenta asociada al siguiente correo electrónico:

📧 miusuario@gmail.com

Entiendo que esta acción es irreversible.

Gracias.`}
          </pre>
        </div>
      </>
    ),
  },
  {
    id: "paso3",
    icon: Shield,
    titulo: "3. Verificación de identidad",
    descripcion: (
      <>
        <p className="text-gray-700 leading-relaxed mb-3">
          Por seguridad, nuestro equipo verificará que el correo desde el cual se envió la solicitud
          coincida con el registrado en tu cuenta.
        </p>
        <p className="text-gray-700 leading-relaxed">
          En algunos casos, podríamos solicitar información adicional (por ejemplo, fecha de registro o número de teléfono)
          para confirmar tu identidad antes de proceder con la eliminación.
        </p>
      </>
    ),
  },
  {
    id: "paso4",
    icon: CheckCircle2,
    titulo: "4. Confirmación y eliminación",
    descripcion: (
      <>
        <p className="text-gray-700 leading-relaxed mb-3">
          Una vez confirmada tu identidad, eliminaremos todos los datos asociados a tu cuenta
          en un plazo de <strong>hasta 7 días hábiles</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Te enviaremos un correo de confirmación cuando la eliminación se haya completado.  
          ¡Gracias por haber formado parte de PeakMind! 💜
        </p>
      </>
    ),
  },
];

const DeleteAccount = () => {
  const [expanded, setExpanded] = useState(null);

  const handleExpand = (id) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-violet-500 to-indigo-500 rounded-2xl mb-6">
            <Trash2 className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Eliminación de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Cuenta
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            Última Actualización: {FECHA_ACTUALIZACION}
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {PASOS.map((paso, index) => {
            const isOpen = expanded === paso.id;
            const Icon = paso.icon;
            return (
              <motion.div
                key={paso.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <button
                    onClick={() => handleExpand(paso.id)}
                    className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-inset"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-10 h-10 bg-gradient-to-br from-violet-100 to-indigo-100 rounded-xl flex items-center justify-center">
                          <Icon className="w-5 h-5 text-violet-600" />
                        </div>
                        <h2 className="text-lg font-semibold text-gray-900 pr-4">
                          {paso.titulo}
                        </h2>
                      </div>
                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="w-6 h-6 text-gray-400" />
                      </motion.div>
                    </div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 border-t border-gray-100">
                          <div className="pt-6">{paso.descripcion}</div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl p-8 text-white text-center shadow-xl">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">
              ¿Necesitás ayuda con el proceso?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Escribinos a nuestro correo de soporte y te ayudamos paso a paso:
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

export default DeleteAccount;
