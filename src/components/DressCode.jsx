import { motion } from 'framer-motion';
import dressCodeWomen from '../assets/dresscode_women.jpg';
import dressCodeMen from '../assets/dresscode_men.jpg';

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

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1200px', margin: '0 auto' }}>
                    {/* Sección Mujeres */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading">Mujeres</h3>
                        <img
                            src={dressCodeWomen}
                            alt="Código de vestimenta para mujeres"
                            style={{
                                width: '100%',
                                borderRadius: '0.5rem',
                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                                marginBottom: '1rem'
                            }}
                        />
                        <p style={{ color: 'var(--color-text-dark)', marginTop: '1rem' }}>
                            Vestido largo de noche en tonos azules, verdes, dorados, naranjas o morados.
                        </p>
                    </motion.div>

                    {/* Sección Hombres */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading">Hombres</h3>
                        <img
                            src={dressCodeMen}
                            alt="Código de vestimenta para hombres"
                            style={{
                                width: '100%',
                                borderRadius: '0.5rem',
                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                                marginBottom: '1rem'
                            }}
                        />
                        <p style={{ color: 'var(--color-text-dark)', marginTop: '1rem' }}>
                            Traje formal en tonos claros como beige, café, azul claro o blanco.
                        </p>
                    </motion.div>
                </div>

                {/* Cita decorativa */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ marginTop: '3rem', maxWidth: '600px', margin: '3rem auto 0' }}
                >
                    <div style={{ padding: '1.5rem', background: 'var(--color-bg)', borderLeft: '3px solid var(--color-gold)', fontStyle: 'italic', color: 'var(--color-text)' }}>
                        "La elegancia es la única belleza que nunca se desvanece."
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

