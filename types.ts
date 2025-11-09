
export type Testimonial = {
  id?: string;
  name: string;
  company: string;
  quote: string;
  approved: boolean;
};

// Datos iniciales de ejemplo
export const initialTestimonials: Testimonial[] = [
  { name: 'Ricardo P.', company: 'CEO, Soluciones Innovadoras', quote: 'El mejor servicio de soporte que hemos experimentado. ¡Cambió el juego para nuestro equipo!', approved: true },
  { name: 'Ana M.', company: 'Directora de Marketing, Creativa Digital', quote: 'La funcionalidad de prueba social ha aumentado nuestra tasa de conversión en un 25%. ¡Fácil de implementar y mantener!', approved: true },
  { name: 'Carlos V.', company: 'Desarrollador Senior, NexaTech', quote: 'Una solución elegante y eficiente. La base de datos en tiempo real es una maravilla para los MVP.', approved: true },
  { name: 'Sofía L.', company: 'Propietaria, Tienda Online', quote: 'La credibilidad que ganamos con estos testimonios dinámicos es invaluable. La inversión se justificó al instante.', approved: true },
  { name: 'Javier G.', company: 'Gerente de Proyectos, Global Infra', quote: 'Diseño limpio y funciona perfectamente en móvil y escritorio. Es exactamente lo que necesitábamos.', approved: true },
];