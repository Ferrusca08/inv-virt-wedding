import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import dressCodeWomen from '../assets/dresscode_women.jpg';
import dressCodeMen from '../assets/dresscode_men.jpg';
import './DressCode.css';

export default function DressCode() {
    const [selectedImage, setSelectedImage] = useState(null);

    const openLightbox = (img) => setSelectedImage(img);
    const closeLightbox = () => setSelectedImage(null);

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

                <div className="dress-code-grid">
                    {/* Sección Hombres */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ textAlign: 'left' }}
                    >
                        <h3 className="text-2xl font-bold mb-4 font-heading" style={{ color: 'var(--color-gold)' }}>Hombres</h3>

                        <div
                            className="dress-code-img-wrapper"
                            onClick={() => openLightbox(dressCodeMen)}
                        >
                            <img
                                src={dressCodeMen}
                                alt="Código de vestimenta para hombres"
                                className="dress-code-img"
                            />
                        </div>

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

                        <div
                            className="dress-code-img-wrapper"
                            onClick={() => openLightbox(dressCodeWomen)}
                        >
                            <img
                                src={dressCodeWomen}
                                alt="Código de vestimenta para mujeres"
                                className="dress-code-img"
                            />
                        </div>

                        <p style={{ color: 'var(--color-text-dark)', marginBottom: '0.75rem', lineHeight: '1.7' }}>
                            Vestido <strong>largo o midi</strong>, elegante y fluido, ideal para jardín. Tacón ancho, cuña o plataforma.
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
                            <strong>Por respeto a la novia: evitar blanco, crema y tonos claros similares.</strong><br />
                            <strong>Evitar:</strong> vestidos cortos tipo cóctel nocturno, telas pesadas, tacones muy delgados o looks demasiado urbanos.
                        </p>
                    </motion.div>
                </div>

                {/* Lightbox Portal */}
                {createPortal(
                    <AnimatePresence>
                        {selectedImage && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="lightbox-overlay"
                                onClick={closeLightbox}
                            >
                                <button className="lightbox-close-btn" onClick={closeLightbox}>
                                    <FaTimes />
                                </button>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    exit={{ scale: 0.8, opacity: 0 }}
                                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                                    className="lightbox-content"
                                    onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
                                >
                                    <img
                                        src={selectedImage}
                                        alt="Zoom"
                                        className="lightbox-img"
                                    />
                                </motion.div>
                            </motion.div>
                        )}
                    </AnimatePresence>,
                    document.body
                )}
            </div>
        </section>
    );
}


