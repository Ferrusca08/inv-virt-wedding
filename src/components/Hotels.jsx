import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaStar, FaPhone } from 'react-icons/fa';

export default function Hotels() {
    const hotels = [
        {
            name: "Hotel Real de Minas",
            stars: 5,
            distance: "10 min del lugar",
            phone: "+52 123 456 7890",
            url: "#"
        },
        {
            name: "Holiday Inn Express",
            stars: 4,
            distance: "15 min del lugar",
            phone: "+52 987 654 3210",
            url: "#"
        },
        {
            name: "City Express",
            stars: 4,
            distance: "12 min del lugar",
            phone: "+52 555 555 5555",
            url: "#"
        }
    ];

    return (
        <section className="section" id="hotels" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4">Hospedaje</h2>
                    <p style={{ color: 'var(--color-text)', marginBottom: '3rem' }}>
                        Recomendaciones para su estancia
                    </p>
                </motion.div>

                <div className="hotels-grid">
                    {hotels.map((hotel, index) => (
                        <motion.div
                            key={index}
                            className="hotel-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="hotel-header">
                                <h3>{hotel.name}</h3>
                                <div className="stars">
                                    {[...Array(hotel.stars)].map((_, i) => (
                                        <FaStar key={i} size={12} color="var(--color-gold)" />
                                    ))}
                                </div>
                            </div>
                            <div className="hotel-body">
                                <p><FaMapMarkerAlt className="inline mr-2" /> {hotel.distance}</p>
                                <p><FaPhone className="inline mr-2" /> {hotel.phone}</p>
                            </div>
                            <a href={hotel.url} className="btn btn-secondary mt-4 w-full" style={{ justifyContent: 'center' }}>
                                Reservar
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
