import React, { useState } from "react";
import '../css/formularioAgregarTarea.css';
import { v4 as uuidv4 } from 'uuid';
const FormularioAgregarTarea = (props) => {

  const [tarea, setTarea] = useState('');

  const actualizarTexto = (e) => {
    setTarea(e.target.value);
  };

  const enviarTarea = (e) => {
    e.preventDefault();//evita que se refrezque la página y se pierda la información

    const tareaEnvio = {
      id: uuidv4(),
      texto : tarea,
      tareaCompleta : false
    };

    props.onSubmit(tareaEnvio);
    
  };

  return (

    <form className='form' onSubmit={enviarTarea}>
      <input 
      type='text' 
      placeholder='Escribe la tarea' 
      className='form__input'
      name='text'
      onChange={actualizarTexto}
      />
      <button className='form__button'>
        Agregar
      </button>
    </form>

  );
};

export default FormularioAgregarTarea;