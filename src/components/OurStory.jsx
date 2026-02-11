import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

export default function OurStory() {
    return (
        <section className="section" id="our-story" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4" style={{ color: 'var(--color-text)' }}>
                        Nuestra Historia
                    </h2>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '2rem'
                    }}>
                        <FaHeart style={{ color: 'var(--color-gold)', fontSize: '2rem' }} />
                    </div>
                </motion.div>

                <div style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    textAlign: 'left'
                }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ marginBottom: '2rem' }}
                    >
                        <p style={{
                            color: 'var(--color-text)',
                            lineHeight: '1.9',
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem'
                        }}>
                            Miguel y Claudia se conocieron mientras estudiaban su carrera profesional, donde compartieron clases, proyectos y amigos. Con el tiempo, comenzaron a buscarse más y a crear oportunidades para compartir aún más momentos juntos.
                        </p>

                        <p style={{
                            color: 'var(--color-text)',
                            lineHeight: '1.9',
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem'
                        }}>
                            Después de un año de amistad, comenzaron a salir. Tres meses más tarde, hicieron oficial su relación. El proceso fue natural, como si llevaran años conociéndose.
                        </p>

                        <p style={{
                            color: 'var(--color-text)',
                            lineHeight: '1.9',
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem'
                        }}>
                            Su relación continuó, manteniéndose constante mientras se presentaban cambios en otras áreas de sus vidas. Experimentaron nuevos trabajos, amistades, hogares, pasatiempos y experiencias, pero siempre sabiendo que lo que nunca cambiaría era que estarían el uno para el otro.
                        </p>

                        <p style={{
                            color: 'var(--color-text)',
                            lineHeight: '1.9',
                            fontSize: '1.1rem',
                            marginBottom: '2rem'
                        }}>
                            Hoy, como lo han hecho durante la última década, dan un nuevo paso para seguir construyendo su relación y celebrar su matrimonio.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        style={{
                            padding: '2rem',
                            background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.1), rgba(212, 175, 55, 0.05))',
                            borderRadius: '0.75rem',
                            borderLeft: '4px solid var(--color-gold)',
                            textAlign: 'center'
                        }}
                    >
                        <p style={{
                            color: 'var(--color-text)',
                            lineHeight: '1.9',
                            fontSize: '1.15rem',
                            fontStyle: 'italic',
                            marginBottom: '0.5rem'
                        }}>
                            Estamos muy felices de poder compartir este momento con nuestra familia, tanto la de sangre como la que elegimos.
                        </p>
                        <p style={{
                            color: 'var(--color-gold)',
                            lineHeight: '1.9',
                            fontSize: '1.15rem',
                            fontWeight: 'bold'
                        }}>
                            Gracias por estar aquí y celebrar con nosotros este gran paso. Los amamos.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
