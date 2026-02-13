import { motion } from 'framer-motion';
import couplePhoto from '../assets/CD88A39F-B832-40E0-86E4-F817F23C1FBE.jpeg';

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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1200px', margin: '0 auto', alignItems: 'center' }}>
                    {/* Imagen a la izquierda */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img
                            src={couplePhoto}
                            alt="Claudia y Miguel"
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '1rem',
                                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)'
                            }}
                        />
                    </motion.div>

                    {/* Itinerario a la derecha */}
                    <div>
                        {events.map((event, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.15 }}
                                style={{
                                    padding: '1.5rem',
                                    marginBottom: '1rem',
                                    background: 'linear-gradient(135deg, rgba(201, 183, 173, 0.1), rgba(201, 183, 173, 0.05))',
                                    borderRadius: '0.75rem',
                                    borderLeft: '4px solid var(--color-gold)',
                                    textAlign: 'left'
                                }}
                            >
                                <div style={{
                                    fontSize: '0.9rem',
                                    color: 'var(--color-gold)',
                                    fontWeight: 'bold',
                                    marginBottom: '0.25rem',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {event.time}
                                </div>
                                <h3 style={{
                                    fontSize: '1.25rem',
                                    fontWeight: 'bold',
                                    color: 'var(--color-text)',
                                    fontFamily: 'var(--font-heading)'
                                }}>
                                    {event.title}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
