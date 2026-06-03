const SHEET_ID = '1Ob2W3Xgpx6QfDCyyYHJGnxyGBUZcfr_SG07LNyjmH9k';
const SHEET_NAME = 'Invitados';
const READ_URL = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:csv&sheet=${SHEET_NAME}`;

/**
 * Fetches a guest's info by their ID from Google Sheets.
 * @param {string} id - The guest ID from the URL param.
 * @returns {Promise<{name: string, tickets: number} | null>}
 */
export async function fetchGuestById(id) {
    if (!id) return null;

    try {
        const response = await fetch(READ_URL);
        const csvText = await response.text();

        const rows = csvText.split('\n').map(row =>
            row.split(',').map(cell => cell.replace(/^"(.*)"$/, '$1'))
        );

        const row = rows.find(r => r[0] && r[0].trim().toLowerCase() === id.trim().toLowerCase());

        if (row) {
            const tickets = parseInt(row[3]) || 1;
            return { name: row[0], tickets };
        }

        return null;
    } catch (error) {
        console.error('Error cargando invitado:', error);
        return null;
    }
}
