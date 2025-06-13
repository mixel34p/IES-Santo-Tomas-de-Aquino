import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import './OfertaEducativa.css';

export default function Horarios() {
  return (
    <div className="oferta-container">
      <h1 className="oferta-title">Horarios</h1>
      <div className="oferta-desc">
        <br></br>
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: 'Fin curso', date: '2025-06-23' },
            { title: 'Inicio del curso', date: '2025-09-17' }
          ]}
        />
      </div>
    </div>
  );
}
