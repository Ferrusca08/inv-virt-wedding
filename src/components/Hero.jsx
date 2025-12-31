import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { BsMouse } from 'react-icons/bs';
import heroImg from '../assets/hero_couple.png';


export default function Hero() {
    const { scrollY } = useScroll();
    const [isMobile, setIsMobile] = useState(false);

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

                <motion.h1
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="hero-title"
                >
                    Claudia & Miguel
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 1.1 }}
                    className="hero-date"
                >
                    12 . Septiembre . 2026
                </motion.p>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="scroll-indicator"
            >
                <span>Scroll</span>
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <BsMouse size={24} />
                </motion.div>
            </motion.div>
        </section>
    );
}
