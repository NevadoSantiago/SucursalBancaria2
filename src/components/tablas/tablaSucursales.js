import React from 'react'
import {connect} from 'react-redux'

export const TablaSucursales = ({index, datos}) => {
    return(
        <tr className="table-active" >
        <td>{datos.data.id}</td>
        <td>{datos.rol}</td>
        <td>{datos.nombre}</td>
        <td>{datos.apellido}</td>
        <td>{datos.usuario}</td>
        <td>
            <button className="btn btn-warning">Editar</button>
            <button className="btn btn-danger">Eliminar</button>
        </td>
    </tr>
    )
}

