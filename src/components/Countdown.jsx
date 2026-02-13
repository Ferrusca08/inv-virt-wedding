import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle } from 'react-icons/fa';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    function calculateTimeLeft() {
        const difference = +new Date('2026-09-12T18:00:00') - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearTimeout(timer);
    });

    const addToGoogleCalendar = () => {
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Boda+Claudia+%26+Miguel&dates=20260912T180000Z/20260913T020000Z&details=Celebra+nuestra+boda.&location=Piedrasanta+Jardín+de+Eventos`;
        window.open(url, '_blank');
    };

    return (
        <section className="section bg-white">
            <div className="container text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl font-heading mb-12 text-gray-800"
                >
                    Cuenta Regresiva
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="countdown-container"
                >
                    {Object.keys(timeLeft).length ? (
                        Object.keys(timeLeft).map((interval) => (
                            <div key={interval} className="countdown-item">
                                <span className="countdown-val">
                                    {timeLeft[interval]}
                                </span>
                                <span className="countdown-label">
                                    {interval}
                                </span>
                            </div>
                        ))
                    ) : <span>¡Es hoy!</span>}
                </motion.div>

                <div className="calendar-buttons">
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={addToGoogleCalendar}
                        className="btn btn-secondary"
                    >
                        <FaGoogle className="text-red-500" />
                        <span>Google Calendar</span>
                    </motion.button>
                </div>
            </div>
        </section>
    );
}
