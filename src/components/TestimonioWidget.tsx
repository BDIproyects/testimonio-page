// src/components/TestimonioWidget.tsx
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../lib/firebase';
import './TestimonioWidget.css';

interface Testimonio {
  id: string;
  nombre: string;
  cargo: string;
  texto: string;
}

export default function TestimonioWidget() {
  const [testimonios, setTestimonios] = useState<Testimonio[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Cargar todos los testimonios una vez
  useEffect(() => {
    const fetchTestimonios = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'testimonios'));
        const lista: Testimonio[] = [];
        
        querySnapshot.forEach((doc) => {
          const data = doc.data();
          lista.push({
            id: doc.id,
            nombre: data.nombre || 'Cliente anónimo',
            cargo: data.cargo || 'Sin cargo',
            texto: data.texto || 'Sin testimonio'
          });
        });

        if (lista.length === 0) {
          setError('No hay testimonios disponibles.');
          setLoading(false);
          return;
        }

        setTestimonios(lista);
        setCurrentIndex(0); // Iniciar con el primero
      } catch (err) {
        console.error('Error al cargar testimonios:', err);
        setError('No se pudieron cargar los testimonios.');
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonios();
  }, []);

  // Cambiar testimonio cada 5 segundos
  useEffect(() => {
    if (testimonios.length === 0) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonios.length);
    }, 5000); // 5 segundos

    return () => clearInterval(intervalId); // Limpiar al desmontar
  }, [testimonios]);

  if (loading) {
    return <div className="testimonio-widget">Cargando testimonios...</div>;
  }

  if (error) {
    return <div className="testimonio-widget error">{error}</div>;
  }

  const currentTestimonio = testimonios[currentIndex];

  return (
    <div className="testimonio-widget">
      <blockquote className="testimonio-texto">
        “{currentTestimonio?.texto}”
      </blockquote>
      <cite className="testimonio-autor">
        — {currentTestimonio?.nombre}, {currentTestimonio?.cargo}
      </cite>
    </div>
  );
}