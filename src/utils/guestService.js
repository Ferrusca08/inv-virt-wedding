const SHEET_ID = '1Ob2W3Xgpx6QfDCyyYHJGnxyGBUZcfr_SG07LNyjmH9k';
const SHEET_NAME = 'Invitados';
const READ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;

/* ------------------------------------------------------------------ */
/* CSV                                                                 */
/* ------------------------------------------------------------------ */

/** Parser de CSV que respeta comillas, comas y saltos de línea dentro de celdas. */
function parseCSV(text) {
    const clean = text.replace(/^\uFEFF/, '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    const rows = [];
    let row = [];
    let field = '';
    let inQuotes = false;

    for (let i = 0; i < clean.length; i++) {
        const c = clean[i];
        if (inQuotes) {
            if (c === '"') {
                if (clean[i + 1] === '"') { field += '"'; i++; }
                else inQuotes = false;
            } else field += c;
        } else if (c === '"') inQuotes = true;
        else if (c === ',') { row.push(field); field = ''; }
        else if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; }
        else field += c;
    }
    if (field.length || row.length) { row.push(field); rows.push(row); }

    return rows.filter((r) => r.some((cell) => String(cell).trim() !== ''));
}

/** Normaliza encabezados: minúsculas, sin acentos, sin espacios extra. */
function normalizeHeader(h) {
    return String(h || '')
        .trim()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[.]/g, '')
        .replace(/[\s_]+/g, ' ')
        .trim();
}

/** Devuelve el índice de la primera columna cuyo encabezado coincida. */
function findColumn(headers, aliases) {
    for (const alias of aliases) {
        const idx = headers.indexOf(alias);
        if (idx !== -1) return idx;
    }
    return -1;
}

/** Quita numeraciones tipo "1 Claudia Toro" que se usan para ordenar en la hoja. */
export function cleanName(name) {
    return String(name || '').replace(/^\d+[\s.-]+/, '').replace(/\s+/g, ' ').trim();
}

/** "Mesa 7", "7", " 07 " -> 7 ; cualquier otra cosa -> null */
export function parseMesa(value) {
    const match = String(value || '').match(/\d+/);
    if (!match) return null;
    const n = parseInt(match[0], 10);
    return Number.isNaN(n) ? null : n;
}

/* ------------------------------------------------------------------ */
/* Carga de la hoja (con caché en memoria)                             */
/* ------------------------------------------------------------------ */

let guestsPromise = null;

/**
 * Descarga la hoja "Invitados" una sola vez por sesión y la convierte
 * en objetos con los campos que usa la invitación.
 * @returns {Promise<Array<{id:string,name:string,displayName:string,tickets:number,mesa:number|null,status:string,parte:string}>>}
 */
export function fetchGuestList() {
    if (!guestsPromise) {
        guestsPromise = fetch(READ_URL)
            .then((res) => {
                if (!res.ok) throw new Error(`Sheets respondió ${res.status}`);
                return res.text();
            })
            .then((csvText) => {
                const rows = parseCSV(csvText);
                if (rows.length < 2) return [];

                const headers = rows[0].map(normalizeHeader);
                const col = {
                    name: findColumn(headers, ['name', 'nombre']),
                    tickets: findColumn(headers, ['boletos', 'boletos aceptados']),
                    mesa: findColumn(headers, ['mesa', 'mesa asignada', 'no mesa', 'numero de mesa', 'table']),
                    status: findColumn(headers, ['rsvp status', 'estado', 'status']),
                    parte: findColumn(headers, ['parte']),
                };
                if (col.name === -1) return [];

                return rows
                    .slice(1)
                    .map((r) => {
                        const get = (i) => (i >= 0 ? String(r[i] ?? '').trim() : '');
                        const rawName = get(col.name);
                        if (!rawName) return null;
                        return {
                            id: rawName,
                            name: rawName,
                            displayName: cleanName(rawName),
                            tickets: parseInt(get(col.tickets), 10) || 1,
                            mesa: parseMesa(get(col.mesa)),
                            status: get(col.status),
                            parte: get(col.parte),
                        };
                    })
                    .filter(Boolean);
            })
            .catch((error) => {
                console.error('Error cargando la hoja de invitados:', error);
                guestsPromise = null; // permite reintentar en la siguiente llamada
                throw error;
            });
    }
    return guestsPromise;
}

/**
 * Busca a un invitado por el id del enlace personalizado (?id=...).
 * @param {string} id
 * @returns {Promise<{name:string,tickets:number,mesa:number|null,displayName:string} | null>}
 */
export async function fetchGuestById(id) {
    if (!id) return null;
    try {
        const list = await fetchGuestList();
        const target = id.trim().toLowerCase();
        return list.find((g) => g.name.trim().toLowerCase() === target) || null;
    } catch {
        return null;
    }
}
