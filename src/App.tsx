// src/App.tsx
import TestimonioWidget from './components/TestimonioWidget.tsx';

function App() {
  return (
    <div className="App" style={{
      width: '100vw',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: `url('https://gestion.pe/resizer/v2/ACY7ANPHZZH65N4VYOYPW6DTOQ.jpg?auth=8065f9431c381d1af31a75718c478c3b26b549461c78ef8bcca1a06027cfe140&width=1200&height=800&quality=75&smart=true')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      padding: '2rem',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      color: '#ffffff',
      textAlign: 'center',
      position: 'relative', 
      overflowX: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        zIndex: 0
      }}></div>

      <div style={{
        position: 'relative',
        zIndex: 1,
        maxWidth: '600px',
        width: '100%',
        padding: '2rem',
        boxSizing: 'border-box'
      }}>
        <header style={{
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          <h1 style={{
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
          }}>
            <span>⭐</span> Nuestra PyME
          </h1>
          <p style={{
            color: '#e2e8f0',
            fontSize: '1rem',
            marginTop: '0.5rem',
            textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
          }}>
            Confían en nosotros
          </p>
        </header>
        <main>
          <TestimonioWidget />
        </main>
      </div>
    </div>
  );
}

export default App;