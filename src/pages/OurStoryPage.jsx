import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import laguna from '../assets/laguna.jpeg';
import lamparas from '../assets/lamparas.jpeg';
import porton from '../assets/porton.jpeg';
import puenteSenalando from '../assets/puente_senalando.jpeg';
import puente from '../assets/puente.jpeg';
import escaleras from '../assets/Escaleras.jpeg';
import bolitas from '../assets/bolitas_de_colores.jpeg';
import './OurStoryPage.css';

export default function OurStoryPage() {
    const navigate = useNavigate();

    const sections = [
        {
            text: "Miguel y Claudia se conocieron mientras estudiaban su carrera profesional, donde compartieron clases, proyectos y amigos. Con el tiempo, comenzaron a buscarse más y a crear oportunidades para compartir aún más momentos juntos.",
            image: laguna,
            alt: "Laguna"
        },
        {
            text: "Después de un año de amistad, comenzaron a salir. Tres meses más tarde, hicieron oficial su relación. El proceso fue natural, como si llevaran años conociéndose.",
            image: lamparas,
            alt: "Lámparas"
        },
        {
            text: "Su relación continuó, manteniéndose constante mientras se presentaban cambios en otras áreas de sus vidas. Experimentaron nuevos trabajos, amistades, hogares, pasatiempos y experiencias, pero siempre sabiendo que lo que nunca cambiaría era que estarían el uno para el otro.",
            image: porton,
            alt: "Portón"
        },
        {
            text: "Hoy, como lo han hecho durante la última década, dan un nuevo paso para seguir construyendo su relación y celebrar su matrimonio.",
            image: puente,
            alt: "Puente"
        }
    ];

    const extraImages = [puenteSenalando, escaleras, bolitas];

    // Random rotations for polaroid effect
    const rotations = [-2, 1, -1, 2];

    return (
        <div className="story-page">
            {/* Header */}
            <header className="story-header">
                <div className="story-logo">C & M</div>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '0.5rem 1.2rem' }}
                >
                    Volver al Inicio
                </button>
            </header>

            <section className="section">
                <div className="story-content">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="story-title-section"
                    >
                        <h1 className="story-title font-heading">Nuestra Historia</h1>
                        <div className="story-divider"></div>
                    </motion.div>

                    <div className="story-timeline">
                        {sections.map((section, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8 }}
                                className={`story-block ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                            >
                                <p className="story-paragraph">
                                    {section.text}
                                </p>
                                <div className="story-image-container">
                                    <img
                                        src={section.image}
                                        alt={section.alt}
                                        className="story-inline-image"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Extra Gallery for remaining images */}
                    <div className="story-gallery">
                        {extraImages.map((photo, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="story-photo-wrapper"
                                style={{ '--rotation': `${rotations[index % rotations.length]}deg` }}
                            >
                                <img
                                    src={photo}
                                    alt={`Momento especial ${index + 1}`}
                                    className="story-photo"
                                />
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="story-footer"
                    >
                        <p className="story-quote">
                            "Estamos muy felices de poder compartir este momento con nuestra familia, tanto la de sangre como la que elegimos. Gracias por estar aquí y celebrar con nosotros este gran paso. Los amamos."
                        </p>
                        <div className="story-signature">
                            Claudia & Miguel
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
