import fs from 'fs';

const INPUT_FILE = 'guests.csv';
const OUTPUT_FILE = 'links.csv';
const BASE_URL = 'https://clauymiguel.com/';

try {
    const data = fs.readFileSync(INPUT_FILE, 'utf8');
    const lines = data.split(/\r?\n/).filter(line => line.trim() !== '');

    console.log(`Found ${lines.length} lines in ${INPUT_FILE}`);

    const links = [];
    // Add header to output
    links.push('Nombre,Link');

    // Simple CSV parser that handles quoted strings containing commas
    const parseCSVLine = (text) => {
        const result = [];
        let curValue = '';
        let inQuote = false;

        for (let i = 0; i < text.length; i++) {
            const char = text[i];

            if (char === '"') {
                inQuote = !inQuote;
            } else if (char === ',' && !inQuote) {
                result.push(curValue);
                curValue = '';
            } else {
                curValue += char;
            }
        }
        result.push(curValue);

        // Clean up quotes from the values
        return result.map(val => val.trim().replace(/^"(.*)"$/, '$1').replace(/""/g, '"'));
    };

    // Skip header line (index 0) if it contains "Name"
    let startIndex = 0;
    if (lines.length > 0 && lines[0].includes('Name')) {
        startIndex = 1;
    }

    for (let i = startIndex; i < lines.length; i++) {
        const line = lines[i];
        if (!line.trim()) continue;

        const columns = parseCSVLine(line);

        // Column 0 is Name
        const name = columns[0];

        if (name) {
            // Construct URL
            // Using encodeURIComponent to handle spaces and special chars safely
            const url = `${BASE_URL}?id=${encodeURIComponent(name)}`;

            // For CSV output, if name contains comma, quote it.
            // But we already cleaned quotes. Let's just quote the name in output to be safe.
            const safeName = `"${name.replace(/"/g, '""')}"`;
            links.push(`${safeName},${url}`);
        }
    }

    fs.writeFileSync(OUTPUT_FILE, links.join('\n'));
    console.log(`Successfully generated ${links.length - 1} links in ${OUTPUT_FILE}`);

} catch (err) {
    console.error('Error processing file:', err);
}
