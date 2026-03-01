import React from 'react';
import { ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-ink text-ivory">
            {/* Heavy CTA Section */}
            <div className="py-24 md:py-32 border-b border-ivory/10">
                <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                        Diseñemos un proyecto <span className="italic text-gold-soft">sin fisuras.</span>
                    </h2>
                    <p className="font-sans text-ivory/60 mb-12 max-w-xl mx-auto text-lg">
                        Da el primer paso para materializar tu visión. Cuéntanos sobre tu terreno o espacio.
                    </p>

                    <a
                        href="https://wa.me/5492996220665"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gold hover:bg-gold-soft text-ink px-10 py-5 font-sans text-sm tracking-wide font-medium hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center mx-auto group w-max"
                    >
                        Empezar Conversación
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <p className="font-sans text-xs text-ivory/40 mt-6 tracking-wider uppercase">
                        Responderemos en 24h · Sin Compromiso
                    </p>
                </div>
            </div>

            {/* Clean Bottom Footer */}
            <div className="py-8 bg-ink-light">
                <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-ivory/40 tracking-wider">
                    <p className="mb-4 md:mb-0">
                        &copy; {new Date().getFullYear()} Trama Servicios de Arquitectura. Todos los derechos reservados.
                    </p>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-gold-soft transition-colors">Aviso Legal</a>
                        <a href="#" className="hover:text-gold-soft transition-colors">Privacidad</a>
                        <a href="#" className="hover:text-gold-soft transition-colors">Instagram</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
