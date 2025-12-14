import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ThemeToggle() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="theme-toggle-btn"
            style={{
                color: 'var(--color-gold)', // Use gold for icon
                backgroundColor: 'var(--color-white)',
            }}
            aria-label="Toggle Dark Mode"
        >
            {theme === 'light' ? <FaMoon size={20} /> : <FaSun size={20} />}
        </motion.button>
    );
}
