import { motion } from 'framer-motion';
import { FaCar } from 'react-icons/fa';

export default function Transport() {
    return (
        <section className="section" id="transport" style={{ backgroundColor: 'var(--color-bg)', paddingTop: '0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text)' }}>
                        Transporte
                    </h2>

                    <div style={{
                        maxWidth: '680px',
                        margin: '0 auto',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.25rem',
                    }}>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.15 }}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                padding: '1.25rem 1.5rem',
                                border: '1px solid var(--color-gold)',
                                borderRadius: '0.75rem',
                                textAlign: 'left',
                                backgroundColor: 'var(--color-white)',
                            }}
                        >
                            <FaCar style={{ color: 'var(--color-gold)', fontSize: '1.4rem', marginTop: '0.2rem', flexShrink: 0 }} />
                            <p style={{ color: 'var(--color-text)', lineHeight: '1.7', margin: 0 }}>
                                Tepoztlán no cuenta con servicio de Uber u otras aplicaciones de transporte. Recomendamos utilizar taxi local para los traslados dentro del pueblo.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.3 }}
                            style={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: '1rem',
                                padding: '1.25rem 1.5rem',
                                border: '1px solid var(--color-gold)',
                                borderRadius: '0.75rem',
                                textAlign: 'left',
                                backgroundColor: 'var(--color-white)',
                            }}
                        >
                            <FaCar style={{ color: 'var(--color-gold)', fontSize: '1.4rem', marginTop: '0.2rem', flexShrink: 0 }} />
                            <p style={{ color: 'var(--color-text)', lineHeight: '1.7', margin: 0 }}>
                                Al finalizar la celebración, PiedraSanta contará con servicio de taxi disponible para que los invitados puedan regresar con facilidad.
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
