import { motion } from 'framer-motion';
import couplePhoto from '../assets/cartas_de_corazon.jpg';
import './Itinerary.css';

export default function Itinerary() {
    const events = [
        { time: '1:30 PM', title: 'Recepción' },
        { time: '2:00 PM', title: 'Ceremonia' },
        { time: '3:00 PM', title: 'Celebración' },
        { time: '2:00 AM', title: 'Fin del evento' },
    ];

    return (
        <section className="section bg-white" id="itinerary">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center', marginBottom: '3rem' }}
                >
                    <h2 className="text-4xl font-heading mb-4">Itinerario</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    style={{
                        maxWidth: '600px',
                        margin: '0 auto 4rem',
                        borderRadius: '0.5rem',
                        overflow: 'hidden',
                        boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                    }}
                >
                    <img
                        src={couplePhoto}
                        alt="Claudia y Miguel"
                        style={{ width: '100%', display: 'block' }}
                    />
                </motion.div>

                <div className="timeline-container">
                    <div className="timeline-line"></div>
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
                        >
                            <div className="timeline-dot"></div>
                            <div className="timeline-content">
                                <span className="timeline-time">{event.time}</span>
                                <h3 className="timeline-title">{event.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
