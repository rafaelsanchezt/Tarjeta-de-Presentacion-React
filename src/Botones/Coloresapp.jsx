import { useState } from "react"

export const Coloresapp = () => {

    const [hex, setHex] = useState ('#ffffff')

    const randomizeHex = () =>{
        const randomColor = '#' + Math.floor(Math.random()* 16777215).toString(16)

        setHex(randomColor);

    };
    
  return (

    <div className="Color" style={{backgroundColor:  `${hex}`, overflow: 'hidden', zom: 1,}}>

      <button onClick={randomizeHex}>Generar Color</button>
      
    </div>
  )
}

