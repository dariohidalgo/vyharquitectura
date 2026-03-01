import React, { useRef, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

const SocialProof = () => {
    const cases = [
        {
            situation: "Vivienda Unifamiliar",
            context: "Terreno irregular de 300m² con pendiente.",
            result: "Aprovechamiento total de M² y diseño aprobado al primer intento urbanístico."
        },
        {
            situation: "Estudio Creativo",
            context: "Reconversión de nave industrial.",
            result: "Diseño y remodelación finalizada en 6 meses cerrando el presupuesto exacto."
        },
        {
            situation: "Instalaciones Corporativas",
            context: "Modernización de oficinas obsoletas.",
            result: "Ampliación de capacidad operativa en un 40% mejorando iluminación natural."
        },
        {
            situation: "Desarrollo Residencial",
            context: "Complejo de 4 viviendas adosadas.",
            result: "Optimización de costos constructivos en 15% mediante ingeniería de planos detallada."
        }
    ];

    const controls = useAnimation();
    const ref = useRef(null);
    const inView = useInView(ref);

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <section className="py-24 bg-ink text-ivory overflow-hidden">
            <div className="container mx-auto px-6 md:px-12 mb-16">
                <h2 className="text-3xl font-serif text-ivory mb-4">
                    Evidencia <span className="italic text-gold-muted font-normal">Real</span>
                </h2>
                <div className="w-16 h-[1px] bg-gold-muted/50"></div>
            </div>

            <div className="relative w-full" ref={ref}>
                <motion.div
                    className="flex space-x-6 md:space-x-12 px-6 md:px-12 w-max"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                >
                    {/* Duplicate for infinite loop */}
                    {[...cases, ...cases].map((item, index) => (
                        <div
                            key={index}
                            className="w-[300px] md:w-[400px] shrink-0 border border-ivory/10 p-8 md:p-10 relative group hover:border-gold-muted/30 transition-colors duration-500"
                        >
                            <span className="text-xs uppercase tracking-[0.2em] text-gold-muted mb-6 block">
                                Situación // {item.situation}
                            </span>
                            <p className="font-sans text-ivory/60 text-sm mb-8 min-h-[40px]">
                                {item.context}
                            </p>
                            <div className="h-[1px] w-full bg-ivory/10 mb-8" />
                            <p className="font-serif text-lg leading-relaxed">
                                "{item.result}"
                            </p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default SocialProof;
