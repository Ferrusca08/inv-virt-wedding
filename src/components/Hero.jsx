import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImg from '../assets/CM.jpeg';


export default function Hero() {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);
    const navigate = useNavigate();

    // Disable parallax on mobile to prevent white gaps
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const y = useTransform(scrollY, [0, 500], [0, 200]);

    return (
        <section className="hero" id="home">
            {/* Parallax Background */}
            <div className="hero-bg-container absolute inset-0 w-full h-full">
                <div className="hero-overlay" />
                <motion.img
                    style={{ y: isMobile ? 0 : y }}
                    src={heroImg}
                    alt="Couple"
                    className="hero-bg"
                />
            </div>

            {/* Content */}
            <div className="hero-content">

                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="hero-title"
                        style={{ marginBottom: '1rem' }}
                    >
                        Claudia & Miguel
                    </motion.h1>
                    <div className="hero-date-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '2rem' }}>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.1 }}
                            className="hero-date"
                            style={{ margin: 0, marginBottom: '1.5rem' }} // Reset margin-left from CSS class
                        >
                            12 . 09 . 26
                        </motion.p>
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 1.4 }}
                            onClick={() => navigate('/nuestra-historia')}
                            className="btn"
                            style={{
                                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                                backdropFilter: 'blur(5px)',
                                border: '1px solid rgba(255, 255, 255, 0.5)',
                                color: 'white',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.2rem',
                                padding: '0.8rem 2rem',
                                letterSpacing: '0.1em'
                            }}
                            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Nuestra Historia
                        </motion.button>
                    </div>
                </div>
            </div>


        </section>
    );
}
