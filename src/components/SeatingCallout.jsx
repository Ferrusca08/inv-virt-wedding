import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';
import useMyTable from '../utils/useMyTable';
import './SeatingCallout.css';

export default function SeatingCallout() {
    const navigate = useNavigate();
    const { status, me, myMesa, myTable, companions } = useMyTable();

    const irAlCroquis = () => {
        navigate('/mesas');
        window.scrollTo(0, 0);
    };

    return (
        <section className="section seating-callout" id="mesas">
            <motion.div
                className="seating-callout-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2>Acomodo de Mesas</h2>

                {status === 'loading' && (
                    <p className="callout-note">Buscando tu lugar…</p>
                )}

                {status === 'error' && (
                    <p className="callout-note">
                        No pudimos consultar la lista en este momento. Puedes ver el plano del salón.
                    </p>
                )}

                {status === 'ready' && !me && (
                    <p className="callout-note">
                        Consulta el plano del salón y descubre en qué mesa te sentarás.
                    </p>
                )}

                {status === 'ready' && me && !myMesa && (
                    <p className="callout-note">
                        ¡Hola <strong>{me.displayName}</strong>! Todavía estamos terminando el acomodo.
                        Vuelve unos días antes de la boda para ver tu mesa.
                    </p>
                )}

                {status === 'ready' && me && myMesa && (
                    <>
                        <span className="callout-label">Tu lugar es en la</span>
                        <span className="callout-number">
                            {myTable?.label || `Mesa ${myMesa}`}
                        </span>
                        {myTable?.pista && (
                            <span className="callout-note">Junto a la pista de baile 💃</span>
                        )}

                        {companions.length > 0 ? (
                            <div className="callout-people">
                                <span className="callout-people-title">Compartes mesa con</span>
                                <div className="callout-people-list">
                                    {companions.map((name) => (
                                        <span className="callout-person" key={name}>
                                            <FaUser />
                                            {name}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ) : (
                            <p className="callout-note">
                                Todavía eres la única persona asignada a esta mesa.
                            </p>
                        )}
                    </>
                )}

                <button className="btn btn-primary" onClick={irAlCroquis}>
                    {myMesa ? 'Ver el croquis del salón' : 'Ver mi mesa'}
                </button>
            </motion.div>
        </section>
    );
}
