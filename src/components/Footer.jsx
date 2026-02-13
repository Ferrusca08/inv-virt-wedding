export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <h2 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--color-champagne)' }}>C & M</h2>
                <p style={{ opacity: 0.6, marginBottom: '2rem', fontSize: '0.9rem' }}>Gracias por ser parte de nuestra historia.</p>

                <div style={{ opacity: 0.3, fontSize: '0.75rem' }}>
                    &copy; {new Date().getFullYear()} Claudia & Miguel.
                </div>
            </div>
        </footer>
    );
}
x