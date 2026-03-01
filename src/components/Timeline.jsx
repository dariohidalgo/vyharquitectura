import React from 'react';
import { motion } from 'framer-motion';

const Timeline = () => {
    const steps = [
        {
            num: "01",
            title: "Anteproyecto y Viabilidad",
            desc: "Evaluamos el terreno y normativas. Definimos tu visión, requisitos y presupuesto, creando los primeros esquemas espaciales para alinear expectativas de diseño."
        },
        {
            num: "02",
            title: "Planos y Dirección Ejecutiva",
            desc: "Desarrollamos la documentación técnica completa: instalaciones, estructuras y acabados, lista para que cualquier equipo constructor trabaje sin margen de error."
        },
        {
            num: "03",
            title: "Construcción Integral",
            desc: "Materializamos el diseño. Supervisamos rigurosamente la calidad de la ejecución, materiales y plazos hasta entregarte las llaves de tu nuevo espacio."
        }
    ];

    return (
        <section id="como-funciona" className="py-32 bg-ivory">
            <div className="container mx-auto px-6 md:px-12 max-w-6xl">
                <div className="flex flex-col md:flex-row md:justify-between items-start mb-24 md:items-end">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-serif text-ink mb-6">
                            Nuestra <span className="italic text-gold-muted">Metodología</span>
                        </h2>
                        <p className="text-ink/70 font-sans max-w-md">
                            Un enfoque metódico para asegurar que el diseño y la obra fluyan con exactitud.
                        </p>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-8 lg:gap-16">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: 0.2 * index }}
                            className="relative group"
                        >
                            {/* Divider line for desktop */}
                            {index !== steps.length - 1 && (
                                <div className="hidden md:block absolute top-[28px] left-[60%] w-[80%] h-[1px] bg-ink/10" />
                            )}

                            <div className="flex flex-col items-start cursor-default">
                                <span className="font-serif text-5xl lg:text-6xl text-ink/20 group-hover:text-gold transition-colors duration-500 mb-8 block">
                                    {step.num}
                                </span>
                                <h3 className="text-xl font-serif text-ink mb-4 font-semibold">
                                    {step.title}
                                </h3>
                                <p className="text-ink/70 font-sans text-sm leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Timeline;
