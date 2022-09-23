import React from 'react';
import '../css/tarea.css';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Tarea = ({ texto, tareaCompleta, id, eliminarTarea, completarTarea }) => {
  return (
    <div className={`contenedor-tarea ${tareaCompleta ? 'completa' : ''}`.trimEnd()}>
      <div 
      className='texto-tarea'
      onClick={() => completarTarea(id)}
      >
        {texto}
      </div>
      <div className='icono-tarea'>
        <AiOutlineCloseCircle 
        className='icono' 
        onClick={() => eliminarTarea(id)}
        />
      </div>
    </div>
  );
};

export default Tarea;