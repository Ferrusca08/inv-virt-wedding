import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearchPlus, FaSearchMinus, FaUser } from 'react-icons/fa';
import { TABLES, ZONES, FLOOR_RATIO, tableById } from '../data/tables';
import useMyTable from '../utils/useMyTable';
import '../components/GiftRegistry.css';
import './SeatingPage.css';

export default function SeatingPage() {
    const navigate = useNavigate();
    const [zoomed, setZoomed] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null);
    const canvasRef = useRef(null);

    const { status, me, isGeneral, myMesa, myTable, companions } = useMyTable();

    // Al ampliar el plano, centra la vista en la mesa del invitado.
    useEffect(() => {
        if (!zoomed || !myTable || !canvasRef.current) return;
        const box = canvasRef.current;
        const targetX = ((myTable.left + myTable.w / 2) / 100) * box.scrollWidth;
        const targetY = ((myTable.top + myTable.h / 2) / 100) * box.scrollHeight;
        box.scrollTo({
            left: targetX - box.clientWidth / 2,
            top: targetY - box.clientHeight / 2,
            behavior: 'smooth',
        });
    }, [zoomed, myTable]);

    const selected = selectedTable ? tableById[selectedTable] : null;

    const renderHeadline = () => {
        if (status === 'loading') {
            return <p className="seating-status">Buscando tu lugar…</p>;
        }
        if (status === 'error') {
            return (
                <p className="seating-status">
                    No pudimos consultar la lista en este momento. Revisa tu conexión e inténtalo de nuevo.
                </p>
            );
        }
        if (isGeneral) {
            return (
                <p className="seating-status">
                    Abre el enlace personalizado que te enviamos para ver tu mesa.
                    Mientras tanto, aquí está el plano del salón.
                </p>
            );
        }
        if (!me) {
            return (
                <p className="seating-status">
                    No encontramos tu invitación en la lista. Escríbenos y con gusto te decimos dónde te toca.
                </p>
            );
        }
        if (!myMesa) {
            return (
                <p className="seating-status">
                    ¡Hola <strong>{me.displayName}</strong>! Todavía estamos terminando el acomodo.
                    Vuelve a entrar unos días antes de la boda para ver tu mesa.
                </p>
            );
        }
        return (
            <motion.div
                className="my-table-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="my-table-hello">¡Hola {me.displayName}!</span>
                <span className="my-table-label">Tu lugar es en la</span>
                <span className="my-table-number">{myTable?.label || `Mesa ${myMesa}`}</span>
                {myTable?.pista && (
                    <span className="my-table-note">Junto a la pista de baile 💃</span>
                )}
            </motion.div>
        );
    };

    return (
        <div className="seating-page">
            <header className="seating-header">
                <div className="seating-logo">C &amp; M</div>
                <button
                    onClick={() => navigate('/')}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '0.5rem 1.2rem' }}
                >
                    Volver al Inicio
                </button>
            </header>

            <section className="section seating-section">
                <div className="seating-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        style={{ textAlign: 'center' }}
                    >
                        <h1 className="seating-title">Acomodo de Mesas</h1>
                        <p className="seating-subtitle">
                            Así estará distribuido el salón el 12 de septiembre.
                        </p>
                    </motion.div>

                    {renderHeadline()}

                    {/* ---------------- Plano ---------------- */}
                    <div className="floor-tools">
                        <button
                            type="button"
                            className="floor-zoom-btn"
                            onClick={() => setZoomed((z) => !z)}
                        >
                            {zoomed ? <FaSearchMinus /> : <FaSearchPlus />}
                            {zoomed ? 'Ver todo el salón' : 'Ampliar plano'}
                        </button>
                    </div>

                    <div
                        className={`floor-scroll ${zoomed ? 'zoomed' : ''}`}
                        ref={canvasRef}
                    >
                        <div
                            className="floor-canvas"
                            style={{ aspectRatio: FLOOR_RATIO }}
                        >
                            {ZONES.map((z) => (
                                <div
                                    key={z.key}
                                    className={`zone ${z.type || ''}`}
                                    style={{
                                        left: `${z.left}%`,
                                        top: `${z.top}%`,
                                        width: `${z.w}%`,
                                        height: `${z.h}%`,
                                    }}
                                >
                                    <span>{z.label}</span>
                                </div>
                            ))}

                            <div className="door door-left"><span>Entrada</span></div>
                            <div className="door door-right"><span>Entrada</span></div>

                            {TABLES.map((t) => {
                                const mine = myMesa === t.id;
                                return (
                                    <button
                                        type="button"
                                        key={t.id}
                                        className={[
                                            'table-node',
                                            t.shape,
                                            mine ? 'mine' : '',
                                            selectedTable === t.id ? 'selected' : '',
                                            myMesa && !mine ? 'dimmed' : '',
                                        ].filter(Boolean).join(' ')}
                                        style={{
                                            left: `${t.left}%`,
                                            top: `${t.top}%`,
                                            width: `${t.w}%`,
                                            height: `${t.h}%`,
                                        }}
                                        onClick={() =>
                                            setSelectedTable((cur) => (cur === t.id ? null : t.id))
                                        }
                                        aria-label={`${t.label}${mine ? ' — tu mesa' : ''}`}
                                    >
                                        <span className="table-top">
                                            <span className="table-number">{t.id}</span>
                                            {mine && <span className="table-you">Tú</span>}
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="floor-legend">
                        <span><i className="swatch mine" />Tu mesa</span>
                        <span><i className="swatch other" />Otras mesas</span>
                        <span><i className="swatch pista" />Pista de baile</span>
                        <span className="legend-hint">Toca cualquier mesa para ver su número</span>
                    </div>

                    {selected && (
                        <motion.div
                            className="table-detail"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <strong>{selected.label}</strong>
                            <span>
                                {selected.shape === 'circular' ? 'Redonda' : selected.shape === 'alargada' ? 'Alargada' : 'Cuadrada'}
                                {' · '}{selected.cap} lugares
                                {selected.pista ? ' · junto a la pista' : ''}
                            </span>
                            {myMesa === selected.id && <span className="is-mine">Aquí te sientas tú ✨</span>}
                        </motion.div>
                    )}

                </div>

                {/* ---------------- Acompañantes ----------------
                    Reutiliza la misma vista que la mesa de regalos:
                    etiqueta, divisor y tarjetas. Va fuera del contenedor
                    del croquis para tener su mismo ancho (1100px). */}
                {myMesa && companions.length > 0 && (
                    <section className="gift-registry seating-people">
                        <div className="gift-container">
                            <motion.div
                                className="gift-row"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <div className="gift-label">
                                    Compartes mesa<br />con
                                </div>
                                <div className="gift-divider"></div>
                                <div className="gift-options">
                                    {companions.map((name) => (
                                        <div className="gift-card-new" key={name}>
                                            <FaUser />
                                            <span>{name}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        </div>
                    </section>
                )}

                <div className="seating-container">
                    <p className="seating-footnote">
                        Si tienes alguna duda con tu lugar, escríbenos y lo resolvemos con gusto.
                    </p>
                </div>
            </section>
        </div>
    );
}
