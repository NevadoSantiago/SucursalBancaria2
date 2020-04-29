import React from 'react'
import '../../../styles/estiloUsuario.css'

const MostrarAgente = (datosAgente) =>{

    return(
        <div>
            <p>ACA SE MUESTRA EL AGENTE</p>
            <p>{datosAgente.data}</p>
        </div>
    )

}

export default MostrarAgente