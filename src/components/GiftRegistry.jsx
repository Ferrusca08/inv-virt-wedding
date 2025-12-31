import { motion } from 'framer-motion';
import { FaAmazon, FaGift, FaEnvelope } from 'react-icons/fa';

export default function GiftRegistry() {
    return (
        <section className="section" id="gifts" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ textAlign: 'center', }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4">Mesa de Regalos</h2>
                    <p style={{ color: 'var(--color-text)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
                        Su presencia es nuestro mejor regalo, pero si desean tener un detalle con nosotros, ponemos a su disposición estas opciones:
                    </p>
                </motion.div>

                <div className="gift-grid">
                    <motion.a
                        href="#"
                        target="_blank"
                        className="gift-card"
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <div className="gift-icon-wrapper">
                            <FaAmazon size={40} />
                        </div>
                        <h3>Amazon</h3>
                        <p>Ver lista de deseos</p>
                    </motion.a>

                    <motion.a
                        href="#"
                        target="_blank"
                        className="gift-card"
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <div className="gift-icon-wrapper">
                            <FaGift size={40} />
                        </div>
                        <h3>Liverpool</h3>
                        <p>Ver mesa de regalos</p>
                    </motion.a>

                    <motion.div
                        className="gift-card"
                        whileHover={{ y: -10 }}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="gift-icon-wrapper">
                            <FaEnvelope size={40} />
                        </div>
                        <h3>Lluvia de Sobres</h3>
                        <p>Si prefieren haciéndonos un presente en efectivo, habrá un buzón en la recepción.</p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
