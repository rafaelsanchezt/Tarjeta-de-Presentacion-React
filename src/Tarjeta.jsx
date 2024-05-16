import './style.css'
import {Contadorapp} from './Botones/Contadorapp.jsx'
import {Coloresapp} from './Botones/Coloresapp.jsx'
import {Emojis} from './Botones/Emojis.jsx'
import { Adivinanza } from './Botones/Adivinanza.jsx'

const Tarjeta = ({titulo, nombre, apellido, edad, profesion, descripcion}) => {

  return (

    <>
    <div className='tarjeta'>

        <h1> {titulo} </h1>
        <p>Nombre: {nombre}</p>
        <p>Apellido: {apellido}</p>
        <p>Edad: {edad}</p>
        <p>Profesion: {profesion}</p>
        <p>Descripcion: {descripcion}</p>

    </div>
    
    <div className='Contador'>

      <Contadorapp/>

    </div>

    <div className='Colores'>

      <Coloresapp/>
      
    </div>

    <div className='Emoji'>

      <Emojis/>

    </div>

    <div className='Adivinanza'>

      <Adivinanza/>

    </div>

    </>
    )

}

export default Tarjeta











