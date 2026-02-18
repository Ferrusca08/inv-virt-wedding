import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaAmazon, FaGift, FaPaypal, FaCopy } from 'react-icons/fa';
import './GiftRegistry.css';

export default function GiftRegistry() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("012180015869110131");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section className="gift-registry" id="gifts">
            <div className="gift-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4">Mesa de regalos</h2>
                    <p style={{ color: 'var(--color-text)', marginBottom: '4rem', maxWidth: '800px', margin: '0 auto 4rem auto', fontSize: '1.1rem' }}>
                        Tu presencia es nuestro mayor regalo. Si deseas tener un detalle adicional, dejamos algunas opciones que nos ayudarán a comenzar esta nueva etapa juntos.
                    </p>
                </motion.div>

                {/* Row 1: Monetary Gifts */}
                <motion.div
                    className="gift-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="gift-label">
                        Regálanos recuerdos<br />para nuestra luna de miel
                    </div>
                    <div className="gift-divider"></div>
                    <div className="gift-options">
                        <a
                            href="https://www.paypal.com/donate/?hosted_button_id=HB2ZAPP443C4L"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gift-card-new"
                            style={{ minWidth: '220px' }}
                        >
                            <FaPaypal />
                            <span style={{ fontSize: '1rem', fontWeight: 'normal', fontFamily: 'var(--font-body)' }}>Aportación vía</span>
                            <span style={{ fontWeight: 'bold' }}>PayPal</span>
                        </a>

                        <div className="gift-card-highlight">
                            <span style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.4rem',
                                color: 'var(--color-gold)',
                                marginBottom: '1rem',
                                display: 'block',
                                fontWeight: 'bold'
                            }}>
                                Transferencia Bancaria
                            </span>

                            <div style={{ marginBottom: '0.5rem' }}>
                                <span style={{ display: 'block', fontSize: '0.9rem', color: 'var(--color-text-light)' }}>CLABE</span>
                                <span className="clabe-text">012 180 01586911013 1</span>
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '0.5rem 1rem', fontSize: '0.95rem' }}>
                                <span style={{ fontWeight: 'bold', color: 'var(--color-text-dark)' }}>Banco:</span>
                                <span>BBVA</span>
                                <span style={{ fontWeight: 'bold', color: 'var(--color-text-dark)' }}>Titular:</span>
                                <span>Claudia Toro</span>
                            </div>

                            <button className="copy-btn" onClick={handleCopy}>
                                <FaCopy />
                                {copied ? "¡Copiado!" : "Copiar CLABE"}
                            </button>
                        </div>
                    </div>
                </motion.div>

                {/* Row 2: Store Registries */}
                <motion.div
                    className="gift-row"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className="gift-label">
                        También puedes elegir
                    </div>
                    <div className="gift-divider"></div>
                    <div className="gift-options">
                        <a
                            href="https://www.amazon.com.mx/wedding/share/miguelyclau"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gift-card-new"
                        >
                            <FaAmazon />
                            <span>Amazon</span>
                        </a>
                        <a
                            href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51950943"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gift-card-new"
                        >
                            <FaGift />
                            <span>Liverpool</span>
                        </a>
                        <a
                            href="https://www.elpalaciodehierro.com/buscar?eventId=405456"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gift-card-new"
                        >
                            <FaGift />
                            <span>Palacio de<br />Hierro</span>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
