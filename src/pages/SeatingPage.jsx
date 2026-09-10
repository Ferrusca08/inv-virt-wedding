import { useMemo, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearchPlus, FaSearchMinus, FaUser } from 'react-icons/fa';
import { TABLES, ZONES, FLOOR_RATIO, tableById } from '../data/tables';
import { fetchSeatingAssignments } from '../utils/guestService';
import GiftRegistry from '../components/GiftRegistry';
import '../components/GiftRegistry.css';
import './SeatingPage.css';

export default function SeatingPage() {
    const navigate = useNavigate();
    const [status, setStatus] = useState('loading'); // loading | ready | error
    const [guests, setGuests] = useState([]);
    const [zoomed, setZoomed] = useState(false);
    const [selectedTable, setSelectedTable] = useState(null);
    const canvasRef = useRef(null);
    const detailRef = useRef(null);

    useEffect(() => {
        let alive = true;
        fetchSeatingAssignments()
            .then((list) => {
                if (!alive) return;
                setGuests(list);
                setStatus('ready');
            })
            .catch(() => alive && setStatus('error'));
        return () => { alive = false; };
    }, []);

    // Invitados agrupados por mesa, ya ordenados alfabéticamente
    const porMesa = useMemo(() => {
        const map = {};
        guests.forEach((g) => {
            if (g.mesa === null) return;
            (map[g.mesa] = map[g.mesa] || []).push(g.name);
        });
        Object.values(map).forEach((arr) => arr.sort((a, b) => a.localeCompare(b, 'es')));
        return map;
    }, [guests]);

    const selected = selectedTable ? tableById[selectedTable] : null;
    const selectedGuests = selectedTable ? (porMesa[selectedTable] || []) : [];

    // Al elegir una mesa, baja el recuadro de detalle a la vista
    useEffect(() => {
        if (!selectedTable || !detailRef.current) return;
        detailRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }, [selectedTable]);

    // Al ampliar el plano, centra la vista en la mesa elegida
    useEffect(() => {
        if (!zoomed || !selected || !canvasRef.current) return;
        const box = canvasRef.current;
        box.scrollTo({
            left: ((selected.left + selected.w / 2) / 100) * box.scrollWidth - box.clientWidth / 2,
            top: ((selected.top + selected.h / 2) / 100) * box.scrollHeight - box.clientHeight / 2,
            behavior: 'smooth',
        });
    }, [zoomed, selected]);

    return (
        <div className="seating-page">
            <header className="seating-header">
                <div className="seating-logo">C &amp; M</div>
                <button
                    onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
                    className="btn btn-secondary"
                    style={{ fontSize: '0.8rem', padding: '0.5rem 1.2rem' }}
                >
                    Ir a la invitación
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
                            Toca una mesa para ver quiénes se sientan ahí.
                        </p>
                    </motion.div>

                    {status === 'loading' && (
                        <p className="seating-status">Cargando el acomodo…</p>
                    )}
                    {status === 'error' && (
                        <p className="seating-status">
                            No pudimos cargar la lista en este momento. Revisa tu conexión e inténtalo de nuevo.
                        </p>
                    )}

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

                    <div className={`floor-scroll ${zoomed ? 'zoomed' : ''}`} ref={canvasRef}>
                        <div className="floor-canvas" style={{ aspectRatio: FLOOR_RATIO }}>
                            {ZONES.map((z) => (
                                <div
                                    key={z.key}
                                    className={`zone ${z.type || ''}`}
                                    style={{ left: `${z.left}%`, top: `${z.top}%`, width: `${z.w}%`, height: `${z.h}%` }}
                                >
                                    <span>{z.label}</span>
                                </div>
                            ))}

                            <div className="door door-left"><span>Entrada</span></div>
                            <div className="door door-right"><span>Entrada</span></div>

                            {TABLES.map((t) => {
                                const ocupada = (porMesa[t.id] || []).length;
                                return (
                                    <button
                                        type="button"
                                        key={t.id}
                                        className={[
                                            'table-node',
                                            t.shape,
                                            selectedTable === t.id ? 'selected mine' : '',
                                            selectedTable && selectedTable !== t.id ? 'dimmed' : '',
                                        ].filter(Boolean).join(' ')}
                                        style={{ left: `${t.left}%`, top: `${t.top}%`, width: `${t.w}%`, height: `${t.h}%` }}
                                        onClick={() =>
                                            setSelectedTable((cur) => (cur === t.id ? null : t.id))
                                        }
                                        aria-label={`${t.label}, ${ocupada} invitados`}
                                    >
                                        <span className="table-top">
                                            <span className="table-number">{t.id}</span>
                                        </span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    <div className="floor-legend">
                        <span><i className="swatch mine" />Mesa seleccionada</span>
                        <span><i className="swatch other" />Mesas</span>
                        <span><i className="swatch pista" />Pista de baile</span>
                    </div>
                </div>

                {/* ---------------- Detalle de la mesa ---------------- */}
                <div ref={detailRef}>
                    <AnimatePresence mode="wait">
                        {selected && (
                            <motion.section
                                key={selected.id}
                                className="gift-registry seating-people"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.35 }}
                            >
                                <div className="gift-container">
                                    <div className="gift-row">
                                        <div className="gift-label">
                                            {selected.label}
                                            <span className="gift-label-sub">
                                                {selectedGuests.length}{' '}
                                                {selectedGuests.length === 1 ? 'invitado' : 'invitados'}
                                            </span>
                                        </div>
                                        <div className="gift-divider"></div>
                                        <div className="gift-options">
                                            {selectedGuests.length > 0 ? (
                                                selectedGuests.map((name) => (
                                                    <div className="gift-card-new" key={name}>
                                                        <FaUser />
                                                        <span>{name}</span>
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="seating-empty-table">
                                                    Todavía no hay invitados asignados a esta mesa.
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </motion.section>
                        )}
                    </AnimatePresence>
                </div>

                {/* ---------------- Recordatorio de mesa de regalos ---------------- */}
                <GiftRegistry />
            </section>
        </div>
    );
}
