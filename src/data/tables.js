// Croquis del salón — PiedraSanta.
// Las posiciones (left/top/w/h) están en % del lienzo, que mantiene
// una relación de aspecto de 1250 x 1310 (el plano real del salón).
export const FLOOR_RATIO = '1250 / 1310';

export const TABLES = [
    { id: 1, label: 'Mesa 1', shape: 'cuadrada', cap: 12, pista: false, left: 86, top: 58, w: 13.2, h: 16.4 },
    { id: 2, label: 'Mesa 2', shape: 'circular', cap: 10, pista: false, left: 72.8, top: 79, w: 13.2, h: 12.2 },
    { id: 3, label: 'Mesa 3', shape: 'circular', cap: 10, pista: true, left: 58.8, top: 61.1, w: 13.2, h: 12.6 },
    { id: 4, label: 'Mesa 4', shape: 'alargada', cap: 20, pista: true, left: 68.8, top: 24.4, w: 12.8, h: 31.3 },
    { id: 5, label: 'Mesa 5', shape: 'cuadrada', cap: 12, pista: false, left: 86, top: 27.1, w: 13.2, h: 13.4 },
    { id: 6, label: 'Mesa 6', shape: 'cuadrada', cap: 12, pista: false, left: 80, top: 13.7, w: 17.2, h: 9.2 },
    { id: 7, label: 'Mesa 7', shape: 'circular', cap: 10, pista: true, left: 32, top: 61.1, w: 13.2, h: 12.6 },
    { id: 8, label: 'Mesa 8', shape: 'circular', cap: 10, pista: false, left: 18.4, top: 79, w: 13.2, h: 12.2 },
    { id: 9, label: 'Mesa 9', shape: 'cuadrada', cap: 12, pista: false, left: 5.2, top: 58, w: 13.2, h: 16.4 },
    { id: 10, label: 'Mesa 10', shape: 'alargada', cap: 20, pista: true, left: 22, top: 24.4, w: 13.2, h: 31.3 },
    { id: 11, label: 'Mesa 11', shape: 'cuadrada', cap: 12, pista: false, left: 5.2, top: 24.8, w: 13.2, h: 13.4 },
    { id: 12, label: 'Mesa 12', shape: 'circular', cap: 10, pista: false, left: 5.2, top: 9.2, w: 13.6, h: 13 },
];

export const ZONES = [
    { key: 'dj', label: 'DJ', left: 36, top: 0.8, w: 30.4, h: 9.9 },
    { key: 'dulce', label: 'Dulces', left: 74.4, top: 0.8, w: 25.6, h: 6.9 },
    { key: 'barra', label: 'Barra', left: 31.2, top: 14.1, w: 41.2, h: 8.8 },
    { key: 'pista', label: 'Pista', left: 37.6, top: 26.3, w: 26.8, h: 24.8, type: 'pista' },
    { key: 'novios', label: 'Novios', left: 45.2, top: 82.1, w: 11.2, h: 6.5, type: 'novios' },
];

export const tableById = Object.fromEntries(TABLES.map((t) => [t.id, t]));
