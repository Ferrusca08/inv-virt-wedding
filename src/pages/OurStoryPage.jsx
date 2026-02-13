import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import photo1 from '../assets/hero_couple.png';
import photo2 from '../assets/CM.jpeg';
import photo3 from '../assets/venue_church.png';
import photo4 from '../assets/venue_garden.png';

export default function OurStoryPage() {
    const navigate = useNavigate();

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'var(--color-bg)' }}>
            {/* Header con botón de regreso */}
            <div style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                backgroundColor: 'var(--color-bg)',
                padding: '1rem 2rem',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                zIndex: 1000,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h1 className="font-heading" style={{ fontSize: '1.5rem', color: 'var(--color-gold)' }}>Nuestra Historia</h1>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.9rem' }}
                >
                    Volver
                </button>
            </div>

            <section className="section" style={{ paddingTop: '6rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'center', marginBottom: '3rem' }}
                    >
                        <h2 className="text-4xl font-heading mb-4" style={{ color: 'var(--color-gold)' }}>Claudia & Miguel</h2>
                        <div style={{
                            width: '100px',
                            height: '3px',
                            background: 'var(--color-gold)',
                            margin: '0 auto'
                        }}></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
                            Su conexión fue creciendo de manera natural: desde charlas largas hasta risas compartidas, descubrieron que se complementaban de formas que ninguno de los dos había experimentado antes. La admiración, el cariño y el respeto mutuo fueron construyendo una base sólida para algo más grande.
                        </p>

                        <p style={{
                            color: 'var(--color-text)',
                            lineHeight: '1.9',
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem'
                        }}>
                            Hoy, después de tantos años juntos, no hay lugar en el que prefieran estar más que el uno al lado del otro. Han crecido juntos, superando obstáculos y disfrutando cada momento que la vida les ha dado. Lo que empezó como una bonita amistad, se convirtió en un amor profundo e incondicional.
                        </p>

                        <p style={{
                            color: 'var(--color-text)',
                            lineHeight: '1.9',
                            fontSize: '1.1rem',
                            marginBottom: '1.5rem'
                        }}>
                            Y ahora, con gran emoción, darán el siguiente paso en su camino juntos: unir sus vidas en matrimonio. No es solo la unión de dos personas, sino de dos familias, dos historias y dos corazones dispuestos a seguir construyendo juntos.
                        </p>
                    </motion.div>

                    {/* Galería de fotos */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                            gap: '1.5rem',
                            marginTop: '3rem',
                            marginBottom: '3rem'
                        }}
                    >
                        {[photo1, photo2, photo3, photo4].map((photo, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <img
                                    src={photo}
                                    alt={`Claudia y Miguel ${index + 1}`}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                        borderRadius: '0.75rem',
                                        boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                                        cursor: 'pointer'
                                    }}
                                />
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
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
            </section>
        </div>
    );
}
