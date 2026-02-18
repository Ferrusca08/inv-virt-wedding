import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeToggle from './ThemeToggle';
import './Navbar.css'; // Creating a dedicated CSS file

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Added hook
    const isHomePage = location.pathname === '/';

    // Handle scroll for background effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { title: 'Inicio', id: 'home', isRoute: false },
        { title: 'Nuestra Historia', path: '/nuestra-historia', isRoute: true },
        { title: 'Ubicación', id: 'location', isRoute: false },
        { title: 'Itinerario', id: 'itinerary', isRoute: false },
        { title: 'Hospedaje', id: 'hotels', isRoute: false },
        { title: 'Regalos', id: 'gifts', isRoute: false },
        { title: 'Código de Vestimenta', id: 'dresscode', isRoute: false },
        { title: 'RSVP', id: 'rsvp', isRoute: false },
    ];

    const toggleMenu = () => setIsOpen(!isOpen);

    const handleNavClick = async (link) => {
        setIsOpen(false);

        if (link.isRoute) {
            navigate(link.path);
            window.scrollTo(0, 0);
            return;
        }

        // Handle scroll links
        if (!isHomePage) {
            await navigate('/');
            // Small delay to ensure page load before scrolling
            setTimeout(() => {
                const element = document.getElementById(link.id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(link.id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container navbar-container">
                {/* Logo */}
                <button
                    onClick={() => handleNavClick({ id: 'home', isRoute: false })}
                    className="navbar-logo"
                    style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                >
                    C & M
                </button>

                {/* Desktop Menu */}
                <div className="navbar-links">
                    {navLinks.map((link) => (
                        <button
                            key={link.title}
                            onClick={() => handleNavClick(link)}
                            className="nav-link"
                            style={{ background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'inherit' }}
                        >
                            {link.title}
                        </button>
                    ))}
                    <ThemeToggle />
                </div>

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
                                    <button
                                        key={link.title}
                                        onClick={() => handleNavClick(link)}
                                        className="mobile-nav-link"
                                        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
                                    >
                                        {link.title}
                                    </button>
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
