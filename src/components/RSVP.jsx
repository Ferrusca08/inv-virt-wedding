import { useState } from 'react';
import { motion } from 'framer-motion';

export default function RSVP() {
    const [formData, setFormData] = useState({
        name: '',
        guests: 1,
        name: '',
        guests: 1,
        attendance: 'Si',
        message: ''
    });
    const [status, setStatus] = useState('idle');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // URL del Google Apps Script (Reemplazar con el link que genere el usuario)
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz4rppICdpS_UuI176Xq904EqufDrI0Mx_j1JdjJJFfpu5Scvf-JsrQ9fu5nbthggTMUA/exec';

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.name) return;

        if (!GOOGLE_SCRIPT_URL) {
            alert("Falta configurar la URL del Google Script. Revisa las instrucciones.");
            return;
        }

        setStatus('submitting');

        try {
            await fetch(GOOGLE_SCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors', // Necesario para Google Apps Script
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // Con no-cors no podemos saber si falló realmente, asumimos éxito si no hay error de red
            setStatus('success');
            setStatus('success');
            setFormData({ name: '', guests: 1, attendance: 'Si', message: '' }); // Limpiar forma
        } catch (error) {
            console.error("Error submitting form", error);
            setStatus('error');
            alert("Hubo un error al enviar. Por favor intenta de nuevo.");
        }
    };

    return (
        <section className="section bg-white" id="rsvp">
            <div className="container" style={{ textAlign: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl font-heading mb-4">Confirmar Asistencia</h2>
                    <p style={{ color: 'var(--color-text)', marginBottom: '2rem' }}>
                        Por favor confirma tu asistencia antes del 1 de Noviembre.
                    </p>
                </motion.div>

                {status === 'success' ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        style={{ padding: '2rem', background: '#f0fdf4', color: '#15803d', borderRadius: '1rem', display: 'inline-block' }}
                    >
                        <h3 className="text-2xl font-bold mb-2">¡Gracias por confirmar!</h3>
                        <p>Nos vemos en la boda.</p>
                    </motion.div>
                ) : (
                    <motion.form
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        onSubmit={handleSubmit}
                        className="rsvp-form"
                    >
                        <div className="form-group">
                            <label className="form-label">Nombre Completo</label>
                            <input
                                type="text"
                                name="name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                                className="form-input"
                                placeholder="Ej. Juan Pérez"
                            />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Número de Personas</label>
                            <select
                                name="guests"
                                value={formData.guests}
                                onChange={handleChange}
                                className="form-select"
                            >
                                {[1, 2, 3, 4, 5].map(n => (
                                    <option key={n} value={n}>{n} {n === 1 ? 'persona' : 'personas'}</option>
                                ))}
                            </select>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Asistencia</label>
                            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                {['Si', 'No', 'Tal vez'].map((option) => (
                                    <label key={option} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer' }}>
                                        <input
                                            type="radio"
                                            name="attendance"
                                            value={option}
                                            checked={formData.attendance === option}
                                            onChange={handleChange}
                                            style={{ accentColor: 'var(--color-gold)' }}
                                        />
                                        <span style={{ fontFamily: 'var(--font-heading)' }}>{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="form-label">Mensaje (Opcional)</label>
                            <textarea
                                name="message"
                                rows="3"
                                value={formData.message}
                                onChange={handleChange}
                                className="form-textarea"
                                placeholder="Comentarios..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="btn btn-submit"
                        >
                            {status === 'submitting' ? 'Enviando...' : 'Enviar Confirmación'}
                        </button>
                    </motion.form>
                )}
            </div>
        </section>
    );
}
