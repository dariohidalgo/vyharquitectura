import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

const ProblemSolution = () => {
    return (
        <section id="solucion" className="py-24 bg-ivory-dark relative">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-ink mb-4">
                        El Problema de Construir <span className="italic text-gold-muted mt-2 block md:inline">Sin Precisión</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">

                    {/* Vertical divider on desktop */}
                    <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-ink/10 -translate-x-1/2" />

                    {/* Column 1: Problem */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center space-x-4 mb-8">
                            <span className="text-xs tracking-[0.2em] font-sans uppercase text-ink/50">La Fricción Habitual</span>
                        </div>

                        <ul className="space-y-8">
                            {[
                                "Planos genéricos que generan problemas graves y retrasos al iniciar la obra real.",
                                "Espacios mal distribuidos que no se adaptan al estilo de vida del cliente o a la topografía del terreno.",
                                "Costos imprevistos y presupuestos desbordados por falta de rigor técnico en el diseño inicial."
                            ].map((text, i) => (
                                <li key={i} className="flex cross-start space-x-4">
                                    <AlertCircle className="text-ink/40 shrink-0 mt-1" size={24} />
                                    <p className="text-ink/80 font-sans leading-relaxed">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Column 2: Solution */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-8"
                    >
                        <div className="flex items-center space-x-4 mb-8">
                            <span className="text-xs tracking-[0.2em] font-sans uppercase text-gold-muted">El Estándar Trama</span>
                        </div>

                        <ul className="space-y-8">
                            {[
                                "Documentación ejecutiva milimétrica para evitar improvisaciones o errores de los contratistas.",
                                "Diseño proyectual a medida, pensado para maximizar luz natural, fluidez y materiales de alta gama.",
                                "Control riguroso de cada fase, asegurando presupuestos cerrados y tiempos de entrega predecibles."
                            ].map((text, i) => (
                                <li key={i} className="flex cross-start space-x-4">
                                    <CheckCircle2 className="text-gold-muted shrink-0 mt-1" size={24} />
                                    <p className="text-ink text-base font-sans leading-relaxed font-medium">{text}</p>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
