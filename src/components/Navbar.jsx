import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './Navbar.css'; // Creating a dedicated CSS file

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    // Handle scroll for background effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Inicio', href: '#home' },
        { title: 'Ubicación', href: '#location' },
        { title: 'Itinerario', href: '#itinerary' },
        { title: 'Hospedaje', href: '#hotels' },
        { title: 'Regalos', href: '#gifts' },
        { title: 'Código de Vestimenta', href: '#dresscode' },
        { title: 'RSVP', href: '#rsvp' },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);
    const handleLinkClick = () => setIsOpen(false);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container navbar-container">
                {/* Logo */}
                <a href="#home" className="navbar-logo">
                    C & M
                </a>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <a key={link.title} href={link.href} className="nav-link">
                            {link.title}
                        </a>
                    ))}
                    <ThemeToggle />
                </div>

                {/* Mobile Controls */}
                {/* Mobile Controls */}
                <div className="mobile-controls">
                    <ThemeToggle />
                    <button
                        className="mobile-menu-btn"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Overlay - Portaled explicitly */}
                {createPortal(
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                key="mobile-menu"
                                initial={{ opacity: 0, x: '100%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '100%' }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="mobile-menu-overlay"
                            >
                                {navLinks.map((link) => (
                                    <a
                                        key={link.title}
                                        href={link.href}
                                        onClick={handleLinkClick}
                                        className="mobile-nav-link"
                                    >
                                        {link.title}
                                    </a>
                                ))}
                                <button
                                    className="mobile-close-btn"
                                    onClick={toggleMenu}
                                >
                                    <FaTimes />
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </motion.nav>
    );
}
