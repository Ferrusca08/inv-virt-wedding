import { motion } from 'framer-motion';
import dressCodeWomen from '../assets/dresscode_women.jpg';
import dressCodeMen from '../assets/dresscode_men.jpg';

export default function DressCode() {
    return (
        <section className="section bg-white" id="dresscode">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    style={{ textAlign: 'center' }}
                >
                    <h2 className="text-4xl font-heading mb-4">Código de Vestimenta</h2>
                    <p style={{
                        color: 'var(--color-text-dark)',
                        maxWidth: '800px',
                        margin: '0 auto 3rem',
                        lineHeight: '1.8',
                        fontSize: '1.1rem'
                    }}>
                        La celebración será en un salón jardín en Tepoztlán, <strong>PiedraSanta</strong>, por lo que sugerimos un estilo <strong>formal, fresco y acorde al clima cálido</strong>.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', maxWidth: '1200px', margin: '0 auto 3rem' }}>
                    {/* Sección Hombres */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'left' }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading" style={{ color: 'var(--color-gold)' }}>Hombres</h3>
                        <img
                            src={dressCodeMen}
                            alt="Código de vestimenta para hombres"
                            style={{
                                width: '100%',
                                borderRadius: '0.5rem',
                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                                marginBottom: '1.5rem'
                            }}
                        />
                        <p style={{ color: 'var(--color-text-dark)', marginBottom: '1rem', lineHeight: '1.7' }}>
                            Traje o saco con pantalón de vestir en <strong>telas ligeras</strong> (lino, algodón). Colores suaves o terrosos. Corbata opcional. Zapatos formales cómodos.
                        </p>
                        <p style={{
                            color: '#c41e3a',
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            padding: '0.75rem',
                            background: '#fff5f5',
                            borderRadius: '0.25rem',
                            borderLeft: '3px solid #c41e3a'
                        }}>
                            <strong>Evitar:</strong> mezclilla, tenis, sandalias, camisas tipo polo o looks casuales.
                        </p>
                    </motion.div>

                    {/* Sección Mujeres */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'left' }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading" style={{ color: 'var(--color-gold)' }}>Mujeres</h3>
                        <img
                            src={dressCodeWomen}
                            alt="Código de vestimenta para mujeres"
                            style={{
                                width: '100%',
                                borderRadius: '0.5rem',
                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)',
                                marginBottom: '1.5rem'
                            }}
                        />
                        <p style={{ color: 'var(--color-text-dark)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                            Vestido <strong>largo o midi</strong>, elegante y fluido, ideal para jardín. Tacón ancho, cuña o plataforma.
                        </p>
                        <p style={{
                            color: 'var(--color-text-dark)',
                            marginBottom: '1rem',
                            padding: '0.5rem 0.75rem',
                            background: '#fffbea',
                            borderRadius: '0.25rem',
                            fontSize: '0.95rem',
                            lineHeight: '1.6'
                        }}>
                            <strong>Por respeto a la novia:</strong> evitar blanco, crema y tonos claros similares.
                        </p>
                        <p style={{
                            color: '#c41e3a',
                            fontStyle: 'italic',
                            fontSize: '0.95rem',
                            lineHeight: '1.6',
                            padding: '0.75rem',
                            background: '#fff5f5',
                            borderRadius: '0.25rem',
                            borderLeft: '3px solid #c41e3a'
                        }}>
                            <strong>Evitar:</strong> vestidos cortos tipo cóctel nocturno, telas pesadas, tacones muy delgados o looks demasiado urbanos.
                        </p>
                    </motion.div>
                </div>

                {/* Cita decorativa */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                >
                    <div style={{
                        padding: '1.5rem',
                        background: 'var(--color-bg)',
                        borderLeft: '3px solid var(--color-gold)',
                        fontStyle: 'italic',
                        color: 'var(--color-text)',
                        textAlign: 'center'
                    }}>
                        "La elegancia es la única belleza que nunca se desvanece."
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

