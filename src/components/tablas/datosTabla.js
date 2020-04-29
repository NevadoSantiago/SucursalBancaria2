import React, {Component} from 'react'
import '../../styles/estiloAdmin.css'
import {SUCURSALES,CLIENTES} from '../../constantes/VistasConst'
import {connect} from 'react-redux';
import {ELIMINAR_CLIENTE, ELIMINAR_SUCURSAL} from '../../constantes/ActionConst'
import {MODIFICAR_USUARIO,MODIFICAR_SUCURSAL, AGENTE_CLIENTES} from '../../constantes/VistasConst'

class DatosTabla extends Component{
constructor(props){
    super(props)
}
render(){

    const {vista, datos, editarSucursal, editarCliente, eliminarCliente, eliminarSucursal} = this.props
    const verificacionEliminar = (id) =>{
        debugger
        // eslint-disable-next-line no-restricted-globals
        if(confirm("Seguro que desea eiminar al usuario de id " + id + "?")){
            eliminarCliente(id)
        }
    }
    switch(vista){
        case SUCURSALES : {
            if(datos.data.id != null){
                return(
                    <tr className="table-active">
                        <td>{datos.data.id}</td>
                        <td>{datos.data.ciudad}</td>
                        <td>{datos.data.direccion}</td>
                        <td>{datos.data.tel}</td>
                        <td>{datos.data.correo}</td>
                        <td id="columnaBotones">
                            <button className="btn btn-warning" id="botonTabla" onClick={e=>editarSucursal(datos.data.id)}>
                                Editar</button>
                            <button className="btn btn-danger" id="botonTabla" onClick={e=>verificacionEliminar(datos.data.id)}>
                                Eliminar</button>
                        </td>
                    </tr>
                    )
            }

        }
        case CLIENTES :{
            if(datos.data.id != null){
                return(
                    <tr className="table-active">
                        <td>{datos.data.id}</td>
                        <td>{datos.data.usuario}</td>
                        <td>{datos.data.rol}</td>
                        <td>{datos.data.nombre}</td>
                        <td>{datos.data.apellido}</td>
                        <td>{datos.data.dni}</td>
                        <td>{datos.data.fechaNacimiento}</td>
                        <td>{datos.data.tel}</td>
                        <td>{datos.data.mail}</td>
                        <td id="columnaBotones">
                            <button className="btn btn-warning" onClick={e=>editarCliente(datos.data.id)} id="botonTabla">Editar</button>
                            <button className="btn btn-danger" id="botonTabla" onClick={e=>verificacionEliminar(datos.data.id)}>
                                Eliminar</button>
                        </td>
                    </tr>
                    )
            }

        }
        case AGENTE_CLIENTES :{
            debugger
            if(datos.id != null){
                return(
                    <tr className="table-active">
                        <td>{datos.id}</td>
                        <td>{datos.usuario}</td>
                        <td>{datos.rol}</td>
                        <td>{datos.nombre}</td>
                        <td>{datos.apellido}</td>
                        <td>{datos.dni}</td>
                        <td>{datos.fechaNacimiento}</td>
                        <td>{datos.tel}</td>
                        <td>{datos.mail}</td>
                    </tr>
                    )
            }

        }
        default:{ return null }
    }

}
}


const mapDispatchToProps = dispatch =>{
    return {
        editarSucursal: (dato) => dispatch({type:MODIFICAR_SUCURSAL, dato}),
        editarCliente: (dato) => dispatch({type:MODIFICAR_USUARIO, dato}),
        eliminarSucursal: (dato) => dispatch({type: ELIMINAR_SUCURSAL, dato}),
        eliminarCliente: (dato) => dispatch({type: ELIMINAR_CLIENTE, dato})
    };
}
const mapStateToProps = state => {
    return{
        vista : state.vista.vista
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DatosTabla)
