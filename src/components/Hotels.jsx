import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaPhone } from 'react-icons/fa';

export default function Hotels() {
    const hotels = [
        {
            name: "Casa de los Artistas ",
            stars: 5,
            distance: "10 min del lugar",
            phone: "+52 123 456 7890",
            url: "https://casadelosartistas.com/"
        },
        {
            name: "Ave del Paraíso B&B",
            stars: 4,
            distance: "15 min del lugar",
            phone: "+52 987 654 3210",
            url: "https://avedelparaisotepoztlan.com/"
        },
        {
            name: "Palacio del Cobre",
            stars: 4,
            distance: "12 min del lugar",
            phone: "+52 555 555 5555",
            url: "https://palaciodelcobre.com/"
        }
    ];

    return (
        <section className="section" id="hotels" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>Hospedaje</h2>
                    <p style={{ color: 'var(--color-text)', marginBottom: '3rem' }}>
                        Recomendaciones para su estancia
                    </p>
                </motion.div>

                <div className="hotels-grid">
                    {hotels.map((hotel, index) => (
                        <motion.div
                            key={index}
                            className="hotel-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="hotel-header">
                                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: 'var(--color-text-dark)' }}>{hotel.name}</h3>
                                <div className="stars">
                                    {[...Array(hotel.stars)].map((_, i) => (
                                        <FaStar key={i} size={14} color="var(--color-gold)" />
                                    ))}
                                </div>
                            </div>
                            <div className="hotel-body">
                                <p><FaMapMarkerAlt className="inline mr-2" style={{ color: 'var(--color-gold)' }} /> {hotel.distance}</p>
                                <p><FaPhone className="inline mr-2" style={{ color: 'var(--color-gold)' }} /> {hotel.phone}</p>
                            </div>
                            <a
                                href={hotel.url}
                                className="btn btn-secondary"
                                style={{
                                    justifyContent: 'center',
                                    marginTop: '1rem',
                                    width: '100%',
                                    display: 'flex',
                                    textDecoration: 'none'
                                }}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Reservar
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
