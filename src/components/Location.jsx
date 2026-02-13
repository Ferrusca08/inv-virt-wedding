import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function Location() {
    return (
        <section className="section" id="location" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container location-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4">Lugar & Celebración</h2>
                    <p style={{ maxWidth: '600px', margin: '0 auto 2rem', color: 'var(--color-text)' }}>
                        Acompáñanos a celebrar nuestro amor en un entorno mágico. La ceremonia y recepción se llevarán a cabo en Piedrasanta Jardín de Eventos.
                    </p>
                </motion.div>

                <div>
                    <h3 className="text-2xl font-heading mb-2">Piedrasanta Jardín de Eventos</h3>
                    <p style={{ marginBottom: '1.5rem', color: 'var(--color-text)' }}>Carretera Federal Cuernavaca- Tepoztlán Km 14.1 San Miguel de la Cal, Centro, 62520 Tepoztlán, Mor.</p>

                    <motion.a
                        href=" https://maps.app.goo.gl/bcys2XaBYqDEu7jN7?g_st=iw"
                        target="_blank"
                        rel="noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn btn-primary"
                    >
                        <FaMapMarkerAlt />
                        Ver en Google Maps
                    </motion.a>
                </div>
            </div>
        </section>
    );
}
