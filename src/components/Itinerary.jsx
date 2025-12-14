import { motion } from 'framer-motion';

export default function Itinerary() {
    const events = [
        { time: '6:00 PM', title: 'Ceremonia Religiosa', icon: '⛪' },
        { time: '7:30 PM', title: 'Cóctel de Bienvenida', icon: '🥂' },
        { time: '9:00 PM', title: 'Recepción & Cena', icon: '🍽️' },
        { time: '11:00 PM', title: 'Fiesta', icon: '🎉' },
    ];

    return (
        <section className="section bg-white" id="itinerary">
            <div className="container text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-12">Itinerario</h2>
                </motion.div>

                <div className="itinerary-timeline">
                    {events.map((event, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            className="itinerary-item"
                        >
                            <div className="itinerary-time font-heading">{event.time}</div>
                            <div className="itinerary-marker">
                                <span className="itinerary-icon">{event.icon}</span>
                            </div>
                            <div className="itinerary-content">
                                <h3 className="text-xl font-bold">{event.title}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
