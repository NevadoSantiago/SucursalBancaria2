import React from 'react'
import '../../../styles/estiloUsuario.css'

const MostrarAgente = ({data}) => {
debugger
const usuario = data.data
    return(
        <div>
            <p>ACA SE MUESTRA EL AGENTE</p>
            <p>{usuario.id}</p>
            <p>{usuario.nombre}</p>
            <p>{usuario.apellido}</p>
            <p>{usuario.ciudad}</p>
            <p>{usuario.direccion}</p>

        </div>
    )

}

export default MostrarAgente