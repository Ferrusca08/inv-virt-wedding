import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function RSVP() {
    // 1. Estados del formulario y control
    const [formData, setFormData] = useState({
        name: '',
        guests: 1,
        attendance: 'Si',
        message: ''
    });
    const [maxGuests, setMaxGuests] = useState(1);
    const [status, setStatus] = useState('idle');
    const [invitadoEncontrado, setInvitadoEncontrado] = useState(false);

    // 2. Configuración para la nueva hoja de cálculo
    const SHEET_ID = '1Ob2W3Xgpx6QfDCyyYHJGnxyGBUZcfr_SG07LNyjmH9k'; // Nuevo ID proporcionado
    const SHEET_NAME = 'Invitados'; // Nombre de la hoja en el nuevo documento
    const READ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;

    // IMPORTANTE: Este URL debe actualizarse con el despliegue del nuevo Google Apps Script
    // vinculado a la nueva hoja de cálculo.
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxosHKMPDW2t-_lrY616pyG-q6YCd8TjJYwXJg4NWSoQ7sW_4aXv0iC-KFml8Mhzq6JzQ/exec';

    // 3. Lógica para reconocer al invitado al cargar la página
    useEffect(() => {
        const fetchGuest = async () => {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');

            if (id) {
                try {
                    const response = await fetch(READ_URL);
                    const csvText = await response.text();

                    // Convertir CSV a Array simple (asumiendo que los nombres no tienen comas complejas)
                    const rows = csvText.split('\n').map(row =>
                        row.split(',').map(cell => cell.replace(/^"(.*)"$/, '$1'))
                    );

                    // Debug: Ver columnas en consola para asegurar indices
                    // Col 0: Name (ID)
                    // Col 3: Cantidad de boletos (Header está vacío pero dato es numérico)
                    // Col 6: RSVP status

                    // Buscar por ID (Columna A - índice 0)
                    const row = rows.find(r => r[0] && r[0].trim().toLowerCase() === id.trim().toLowerCase());

                    if (row) {
                        const tickets = parseInt(row[3]) || 1; // Columna D (indice 3) es la cantidad de boletos

                        setFormData(prev => ({
                            ...prev,
                            name: row[0], // Nombre del invitado
                            guests: tickets // Preseleccionar el máximo o 1
                        }));
                        setMaxGuests(tickets);
                        setInvitadoEncontrado(true);
                    }
                } catch (error) {
                    console.error("Error cargando invitado:", error);
                }
            }
        };
        fetchGuest();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name) return;
        setStatus('submitting');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            setStatus('success');
        } catch (error) {
            console.error("Error:", error);
            setStatus('error');
            alert("Error al enviar. Intenta de nuevo.");
        }
    };

    return (
        <section className="section" id="rsvp" style={{ backgroundColor: 'var(--color-bg)', padding: '4rem 0' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4">Confirmar Asistencia</h2>
                    <p style={{ color: 'var(--color-text)', marginBottom: '2rem', fontSize: '1.2rem' }}>
                        {invitadoEncontrado
                            ? (
                                <>
                                    ¡Hola <strong>{formData.name}</strong>!<br />
                                    Tienes <strong>{maxGuests}</strong> {maxGuests === 1 ? 'boleto reservado' : 'boletos reservados'} para este evento.
                                </>
                            )
                            : "Por favor utiliza el enlace personalizado de tu invitación."}
                    </p>
                </motion.div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-green-50 p-8 rounded-xl inline-block"
                        style={{ color: '#15803d', border: '1px solid #15803d' }}
                    >
                        <h3 className="text-2xl font-bold mb-2">¡Gracias por confirmar!</h3>
                        <p>Tu respuesta ha sido registrada.</p>
                        <p className="mt-2 text-sm">Nos vemos en la boda.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        onSubmit={handleSubmit}
                        className="rsvp-form"
                        style={{ maxWidth: '500px', margin: '0 auto', textAlign: 'left' }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        {/* Nombre Completo - Solo lectura si encontrado */}
                        <div className="form-group mb-4">
                            <label className="form-label block mb-2">Nombre</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input w-full p-3 rounded-lg"
                                readOnly={invitadoEncontrado}
                                disabled={invitadoEncontrado}
                                placeholder="Tu nombre completo"
                                style={invitadoEncontrado ? { backgroundColor: 'rgba(0,0,0,0.05)', color: 'var(--color-text-dark)', cursor: 'not-allowed' } : {}}
                            />
                        </div>

                        {/* Número de Personas - Selector hasta maxGuests */}
                        <div className="form-group mb-4">
                            <label className="form-label block mb-2">Número de Personas a Asistir</label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="form-select w-full p-3 rounded-lg bg-transparent border"
                                style={{ backgroundColor: 'var(--color-white)' }}
                            >
                                {Array.from({ length: maxGuests }, (_, i) => i + 1).map(n => (
                                    <option key={n} value={n}>
                                        {n} {n === 1 ? 'persona' : 'personas'}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Asistencia */}
                        <div className="form-group mb-4">
                            <label className="form-label block mb-2">¿Podrás asistir?</label>
                            <div className="flex gap-4 justify-start">
                                {['Si', 'No'].map((option) => (
                                    <label key={option} className="flex items-center gap-2 cursor-pointer p-3 border rounded-lg hover:bg-gray-50 transition-colors" style={{ flex: 1, justifyContent: 'center' }}>
                                        <input
                                            type="radio"
                                            name="attendance"
                                            value={option}
                                            checked={formData.attendance === option}
                                            onChange={handleChange}
                                            className="accent-stone-500"
                                        />
                                        <span style={{ fontWeight: 500, padding: '30px' }}>{option === 'Si' ? 'Sí, asistiré' : 'No podré ir'}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Mensaje */}
                        <div className="form-group mb-6">
                            <label className="form-label block mb-2">Mensaje (Opcional)</label>
                            <textarea
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea w-full p-3 rounded-lg"
                                placeholder="Alguna restricción alimenticia o mensaje para los novios..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="btn btn-submit w-full p-4 rounded-full font-bold uppercase tracking-widest hover:opacity-90 transition-opacity"
                            style={{ backgroundColor: 'var(--color-text)', color: 'var(--color-bg)' }}
                        >
                            {status === 'submitting' ? 'Enviando...' : 'Enviar Confirmación'}
                        </button>
                    </motion.form>
                )}
            </div>
        </section>
    );
}