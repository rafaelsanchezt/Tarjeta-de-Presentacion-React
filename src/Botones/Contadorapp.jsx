import { useState } from "react"


export const Contadorapp = () => {

    const [Contadorapp, setContadorapp] = useState(0);

    const incremento = () => {
        setContadorapp(Contadorapp + 1);
    }

  return (

    <> 
      <button onClick={incremento}>Iniciar Contador:{Contadorapp}</button>
    </>
  )
}

