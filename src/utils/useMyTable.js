import { useEffect, useMemo, useState } from 'react';
import { tableById } from '../data/tables';
import { fetchGuestList } from './guestService';

const isDeclined = (status) =>
    String(status || '').trim().toLowerCase().startsWith('declin');

/**
 * Resuelve la mesa del invitado a partir del ?id= del enlace personalizado.
 * Lo usan tanto la página de mesas como el recuadro de la portada.
 *
 * @returns {{status:'loading'|'ready'|'error', guests:Array, me:object|null,
 *            isGeneral:boolean, myMesa:number|null, myTable:object|null,
 *            companions:string[]}}
 */
export default function useMyTable() {
    const [status, setStatus] = useState('loading');
    const [guests, setGuests] = useState([]);

    const guestId = useMemo(
        () => new URLSearchParams(window.location.search).get('id'),
        []
    );
    const isGeneral = !guestId || guestId === 'general';

    useEffect(() => {
        let alive = true;
        fetchGuestList()
            .then((list) => {
                if (!alive) return;
                setGuests(list);
                setStatus('ready');
            })
            .catch(() => alive && setStatus('error'));
        return () => { alive = false; };
    }, []);

    const me = useMemo(() => {
        if (isGeneral) return null;
        const target = guestId.trim().toLowerCase();
        return guests.find((g) => g.name.trim().toLowerCase() === target) || null;
    }, [guests, guestId, isGeneral]);

    const myMesa = me?.mesa ?? null;
    const myTable = myMesa ? tableById[myMesa] : null;

    const companions = useMemo(() => {
        if (!myMesa) return [];
        return guests
            .filter((g) => g.mesa === myMesa && g.name !== me?.name && !isDeclined(g.status))
            .map((g) => g.displayName)
            .sort((a, b) => a.localeCompare(b, 'es'));
    }, [guests, myMesa, me]);

    return { status, guests, me, isGeneral, myMesa, myTable, companions };
}
