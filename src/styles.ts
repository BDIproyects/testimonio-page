import { CSSProperties } from 'react';

// Definición de estilos CSS en formato JS
export const styles: { [key: string]: CSSProperties } = {
    container: {
        padding: '30px 15px',
        backgroundColor: '#f4f7f9',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: "'Inter', sans-serif"
    },
    headerContainer: {
        textAlign: 'center',
        marginBottom: '30px',
        width: '100%',
        maxWidth: '700px'
    },
    h1: {
        fontSize: '2rem',
        fontWeight: '700',
        color: '#1e3a8a',
        marginBottom: '8px'
    },
    p: { 
        color: '#4b5563',
        fontSize: '1rem'
    },
    card: {
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        borderTop: '5px solid #3b82f6',
        maxWidth: '700px',
        width: '100%'
    },
    blockquote: {
        fontSize: '1.25rem',
        fontStyle: 'italic',
        lineHeight: '1.5',
        color: '#1f2937',
        borderLeft: '4px solid #93c5fd',
        paddingLeft: '15px',
        marginBottom: '20px'
    },
    footer: {
        borderTop: '1px solid #e5e7eb',
        paddingTop: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    name: {
        fontWeight: '600',
        fontSize: '1.1rem',
        color: '#3b82f6'
    },
    company: {
        fontSize: '0.9rem',
        color: '#6b7280',
        marginTop: '2px'
    },
    button: {
        backgroundColor: '#f0f9ff',
        border: '1px solid #bfdbfe',
        color: '#3b82f6',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 12px',
        borderRadius: '6px',
        fontSize: '0.9rem',
        transition: 'all 0.3s'
    },
};