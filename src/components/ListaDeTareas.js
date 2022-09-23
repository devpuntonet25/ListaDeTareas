import React, { useState } from "react";
import FormularioAgregarTarea from "./FormularioAgregarTarea";
import Tarea from "./Tarea";
import '../css/listaDeTareas.css';

const ListaDeTareas = () => {
  const crearLocalStorageKey = () => {
    localStorage.setItem('tareas', JSON.stringify([]));
    return JSON.parse(localStorage.getItem('tareas'));
  }
  const [tareas, setTareas] = useState(
    (
      (typeof localStorage.tareas === 'undefined') ? 
      crearLocalStorageKey() : 
      JSON.parse(localStorage.getItem('tareas'))
    )
    );

  const agregarTarea = (tarea) => {
    if(tarea.texto.length !== 0){
      let arrayLocalStorage = [
        tarea,
        ...tareas
      ];

      localStorage.setItem('tareas', JSON.stringify(arrayLocalStorage));

      setTareas(arrayLocalStorage);
    }
  };

  const eliminarTarea = (id) => {
    const tareasActualizadas = tareas.filter((tarea) => tarea.id !== id);
    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));
    setTareas(tareasActualizadas);
  };

  const completarTarea = (id) => {
    const tareasActualizadas = tareas.map(tarea => {
      if(tarea.id === id){
        tarea.tareaCompleta = !tarea.tareaCompleta;
      }
      return tarea;
    }    
    );

    localStorage.setItem('tareas', JSON.stringify(tareasActualizadas));

    setTareas(tareasActualizadas);

  };

  return (
    <>
      <div className="lista__tareas">
      <FormularioAgregarTarea onSubmit={agregarTarea}/>
      {
        tareas.map(tarea => {
          return (
          <Tarea 
            key={tarea.id}//Todo componente dentro de la lista, debe tener un key
            id={tarea.id}
            texto={tarea.texto}
            tareaCompleta={tarea.tareaCompleta}
            eliminarTarea={eliminarTarea}
            completarTarea={completarTarea}
          />
          )
        })
      }
      </div>
    </>
  );
}

export default ListaDeTareas;