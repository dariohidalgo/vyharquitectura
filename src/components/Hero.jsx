import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Award } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-[95vh] flex items-center pt-24 pb-12 overflow-hidden">
            {/* Background with shadow and architecture concept */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-ivory to-ivory-dark z-10 opacity-90" />
                {/* Abstract Architectural Lines / Shadows */}
                <div className="absolute right-0 top-0 w-1/2 h-full opacity-5 pointer-events-none border-l-[1px] border-ink bg-[url('https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-multiply flex items-center justify-center">
                    {/* Soft overlay over image to keep it subtle luxury */}
                    <div className="absolute inset-0 bg-ivory/80 backdrop-grayscale" />
                </div>
            </div>

            <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-12 gap-12 items-center">

                <div className="md:col-span-8 lg:col-span-7">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center space-x-3 mb-8"
                    >
                        <div className="w-8 h-[1px] bg-gold" />
                        <span className="text-xs font-sans tracking-[0.2em] text-ink/70 uppercase">
                            Estudio de Arquitectura
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-ink leading-[1.1] mb-6">
                            Planos y Construcción de <span className="italic text-gold-muted font-normal">Alta Precisión</span>
                        </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg text-ink/80 font-sans max-w-xl mb-12 leading-relaxed"
                    >
                        <p className="mb-4">
                            Desde el diseño inicial de planos hasta la ejecución íntegra. Tu visión para tu hogar o empresa, transformada en una estructura sólida, elegante y sin errores técnicos.
                        </p>
                        <p className="text-sm font-medium text-ink/60 uppercase tracking-widest mt-6">
                            📍 Cutral Co, Neuquén, Argentina
                        </p>
                    </motion.div>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6"
                    >
                        <a
                            href="https://wa.me/5492996220665"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto bg-ink text-ivory px-8 py-4 font-sans text-sm tracking-wide font-medium hover:-translate-y-0.5 transition-all duration-300 hover:shadow-xl hover:bg-ink-light flex items-center justify-center group"
                        >
                            Contactar al Estudio
                            <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#servicios" className="w-full sm:w-auto px-8 py-4 font-sans text-sm tracking-wide font-medium text-ink hover:text-gold transition-colors duration-300 flex items-center justify-center">
                            Ver Servicios
                        </a>
                    </motion.div>

                    {/* Trust Metric below fold */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="mt-16 flex items-center space-x-4 border-t border-ink/10 pt-6"
                    >
                        <Award className="text-gold-muted" size={24} />
                        <p className="font-serif text-ink/90 italic text-lg tracking-wide">
                            Más de 10 años de experiencia comprobada
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};

export default Hero;
