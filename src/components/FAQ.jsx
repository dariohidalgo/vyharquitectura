import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqs = [
        {
            q: "¿Cuánto tiempo se tarda en entregar los planos finales?",
            a: "El tiempo varía según la magnitud, pero por ejemplo, el anteproyecto y planos ejecutivos de una vivienda unifamiliar suelen requerir entre 4 y 6 semanas de diseño ininterrumpido."
        },
        {
            q: "¿Estos planos me sirven para pedir licencia de construcción?",
            a: "Totalmente. Entregamos el proyecto básico o de ejecución con la rigurosidad técnica necesaria para ser visado y presentado ante cualquier ayuntamiento o municipalidad."
        },
        {
            q: "¿Hacen la construcción o solo diseño?",
            a: "Ambas. Podemos entregar los planos ejecutivos para tu propia constructora, o bien encargarnos de la dirección y construcción integral 'llave en mano'."
        },
        {
            q: "¿Qué pasa si el presupuesto de obra supera lo esperado?",
            a: "Nuestros planos incorporan mediciones y cálculos exhaustivos precisamente para evitar sorpresas. Logramos presupuestos de construcción cerrados donde las desviaciones imprevistas son virtualmente inexistentes."
        }
    ];

    return (
        <section className="py-24 bg-ivory-dark relative border-t border-ink/5">
            <div className="container mx-auto px-6 md:px-12 max-w-3xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-serif text-ink mb-6">
                        Consultas <span className="italic text-gold-muted">Frecuentes</span>
                    </h2>
                </motion.div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: 0.1 * index }}
                                className="border-b border-ink/10"
                            >
                                <button
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="w-full text-left py-6 flex justify-between items-center group"
                                >
                                    <span className="font-serif text-lg tracking-wide text-ink group-hover:text-gold-muted transition-colors pr-8">
                                        {faq.q}
                                    </span>
                                    <ChevronDown
                                        size={20}
                                        className={`text-ink/40 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-gold' : ''}`}
                                    />
                                </button>

                                <AnimatePresence>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                                            className="overflow-hidden"
                                        >
                                            <p className="pb-6 text-ink/70 font-sans text-sm leading-relaxed pr-8">
                                                {faq.a}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
