import { useState, useEffect } from 'react';
import { fetchGuestById } from '../utils/guestService';
import './EnvelopeIntro.css';

export default function EnvelopeIntro({ onOpen }) {
    const [guestName, setGuestName] = useState('');
    const [loaded, setLoaded] = useState(false);
    const [isOpening, setIsOpening] = useState(false);
    const [isFading, setIsFading] = useState(false);

    useEffect(() => {
        const load = async () => {
            const params = new URLSearchParams(window.location.search);
            const id = params.get('id');
            if (id && id.toLowerCase() === 'general') {
                setGuestName('Familia y Amigos');
            } else {
                const guest = await fetchGuestById(id);
                setGuestName(guest ? guest.name : '');
            }
            setLoaded(true);
        };
        load();
    }, []);

    const handleClick = () => {
        if (isOpening) return;
        setIsOpening(true);

        // After flap opens, fade in the underlying page then remove overlay
        setTimeout(() => {
            setIsFading(true);
        }, 700);

        setTimeout(() => {
            onOpen();
        }, 1350);
    };

    if (!loaded) return null;

    const overlayClass = [
        'envelope-overlay',
        isOpening ? 'is-opening' : '',
        isFading ? 'is-fading' : '',
    ].filter(Boolean).join(' ');

    const firstName = guestName === 'Familia y Amigos' ? guestName : (guestName?.split(' ')[0] || guestName || '');

    return (
        <div className={overlayClass} onClick={handleClick}>
            <div className="envelope-dots" />

            <p className="envelope-name-label">Tu invitación de boda</p>

            <div className="envelope-wrapper">
                {/* Main envelope body */}
                <div className="envelope-body">
                    {/* Guest name printed inside the envelope */}
                    <div className="envelope-guest-name">
                        <h2>Para {firstName || 'ti'}</h2>
                        <span className="envelope-date-hint">12 · 09 · 26</span>
                    </div>
                </div>

                {/* Flap that lifts */}
                <div className="envelope-flap" />

                {/* Wax seal positioned over the flap join */}
                <div className="envelope-seal">
                    <span className="envelope-seal-text">C&M</span>
                </div>
            </div>

            <p className="envelope-hint">✉ Toca para abrir</p>
        </div>
    );
}
