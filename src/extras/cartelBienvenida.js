import React from 'react'
import '../styles/estilosGeneral.css'

const CartelBienvenida = ({nombre}) =>{

    return(
        <div className="cartelBienvenida">
            <h2 className="textoBienvenida">Bienvenido {nombre}</h2>
        </div>
    )
}

export default CartelBienvenida