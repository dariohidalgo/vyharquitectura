import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-40 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-ivory/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="font-serif text-2xl font-semibold tracking-wide text-ink relative z-50">
                    V&H <span className="text-gold-muted font-normal italic">Arquitectura</span>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-12">
                    <div className="flex space-x-8 text-sm uppercase tracking-widest font-sans font-medium text-ink/80">
                        <a href="#solucion" className="hover:text-gold transition-colors duration-300">Enfoque</a>
                        <a href="#como-funciona" className="hover:text-gold transition-colors duration-300">Proceso</a>
                        <a href="#servicios" className="hover:text-gold transition-colors duration-300">Servicios</a>
                    </div>
                    <a
                        href="https://wa.me/5492996220665"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-ink text-ivory px-6 py-3 text-sm font-medium tracking-wide hover:-translate-y-0.5 transition-transform duration-300 hover:shadow-lg inline-block"
                    >
                        Contactar
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-ink relative z-50 p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`
        fixed inset-0 bg-ivory z-40 flex flex-col items-center justify-center space-y-8
        transition-all duration-500 ease-in-out
        ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      `}>
                <a onClick={() => setMobileMenuOpen(false)} href="#solucion" className="font-serif text-3xl text-ink hover:text-gold transition-colors">Enfoque</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#como-funciona" className="font-serif text-3xl text-ink hover:text-gold transition-colors">Proceso</a>
                <a onClick={() => setMobileMenuOpen(false)} href="#servicios" className="font-serif text-3xl text-ink hover:text-gold transition-colors">Servicios</a>
                <a
                    href="https://wa.me/5492996220665"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 border border-ink bg-transparent text-ink px-8 py-3 w-[200px] text-center hover:bg-ink hover:text-ivory transition-colors duration-300 block"
                >
                    Contactar
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
