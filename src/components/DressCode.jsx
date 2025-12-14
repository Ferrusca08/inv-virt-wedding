import { motion } from 'framer-motion';
import dressCodeImg from '../assets/dresscode_blacktie.png';

export default function DressCode() {
    return (
        <section className="section bg-white text-center" id="dresscode">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4">Código de Vestimenta</h2>
                    <p style={{ color: 'var(--color-gold)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold', marginBottom: '3rem' }}>
                        Black Tie / Etiqueta Rigurosa
                    </p>
                </motion.div>

                <div className="dress-code-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="dress-code-text"
                        style={{ textAlign: 'right' }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading">Ellas</h3>
                        <p style={{ color: 'var(--color-text-dark)' }}>
                            Vestido largo de noche. Colores oscuros o metálicos.
                        </p>
                        <div style={{ height: '2rem' }}></div>
                        <h3 className="text-2xl font-bold mb-4 font-heading">Ellos</h3>
                        <p style={{ color: 'var(--color-text-dark)' }}>
                            Esmoquin (Tuxedo) o traje oscuro formal.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <img src={dressCodeImg} alt="Dress Code" className="dress-code-img" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="dress-code-text"
                        style={{ textAlign: 'left', display: 'flex', alignItems: 'center' }}
                    >
                        <div style={{ padding: '1.5rem', background: 'var(--color-bg)', borderLeft: '3px solid var(--color-gold)', fontStyle: 'italic', color: 'var(--color-text)' }}>
                            "La elegancia es la única belleza que nunca se desvanece."
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
