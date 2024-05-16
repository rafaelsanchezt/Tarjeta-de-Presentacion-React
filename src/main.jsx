import React from 'react'
import ReactDOM from 'react-dom/client'
import Tarjeta from './Tarjeta'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Tarjeta titulo="Tarjeta de Presentacion" nombre="Rafael" apellido="Sanchez Tello" edad="22 años" profesion="Estudiante" descripcion="Hola, soy rafael sanchez tello tengo 22 años y estoy estudiando la Tecnicatura en Desarrollo y Calidad de software En la Universidad Santo Tomas de Aquino (UNSTA) en la sede de concepcion, estoy cursando el 2° año de la carreara"/>
  </React.StrictMode>,
)
