import React from 'react';
import { motion } from 'framer-motion';
import { Ruler, Home, Settings } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Ruler size={32} strokeWidth={1} />,
            title: "Diseño de Planos",
            desc: "Croquis, anteproyecto, planimetría y simulaciones. Todo medido para ajustarse a normativa y a la parcela real con precisión estética."
        },
        {
            icon: <Home size={32} strokeWidth={1} />,
            title: "Arquitectura Interior",
            desc: "Iluminación natural, materialidad y flujo espacial. Diseñamos cómo se vivirá el espacio, mucho más allá de los metros cuadrados."
        },
        {
            icon: <Settings size={32} strokeWidth={1} />,
            title: "Dirección de Obra",
            desc: "Gestión rigurosa in situ de proveedores y contratistas para garantizar que se respete cada detalle del plano ejecutivo."
        }
    ];

    return (
        <section id="servicios" className="py-24 md:py-32 bg-ivory">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-serif text-ink mb-6">
                            Áreas de <span className="italic text-gold-muted">Expertise</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-6 md:gap-12 lg:gap-16 mb-24">
                    {services.map((svc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            className="group border border-ink/10 p-10 hover:border-gold/30 hover:bg-white/50 transition-all duration-500 cursor-default"
                        >
                            <div className="text-ink/60 mb-8 group-hover:text-gold transition-colors duration-500">
                                {svc.icon}
                            </div>
                            <h3 className="text-xl font-serif text-ink mb-4 font-semibold tracking-wide">
                                {svc.title}
                            </h3>
                            <p className="text-ink/70 font-sans text-sm leading-relaxed">
                                {svc.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <a
                        href="https://wa.me/5492996220665"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ink text-ivory px-10 py-4 font-sans text-sm tracking-wide font-medium hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl hover:bg-ink-light inline-block"
                    >
                        Solicitar Presupuesto
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Services;
