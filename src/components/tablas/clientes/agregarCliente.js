import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {USUARIO_AGREGADO} from '../../../constantes/ActionConst'

const datosUsuario = {
    data:{
        id: null,
        usuario:null,
        pass:null,
        rol:null,
        nombre:null,
        apellido:null,
        dni:null,
        fechaNacimiento:null,
        direccion:null,
        ciudad:null,
        tel:null,
        mail:null,
        usuariosACargo:[]
    }
}
modificarDatosIngresados = (dato) =>{

    var seModifica = dato.target.name;
    var datoIngresado = dato.target.value
    
    switch(seModifica){
        case "nombre" : {        
            datosUsuario.data.nombre = datoIngresado
        }
        break;
        case "apellido" : {
            datosUsuario.data.apellido = datoIngresado
        }
        break;
        case "dni" : {
            datosUsuario.data.dni = datoIngresado
        }
        break;
        case "fechaNac" : {
            datosUsuario.data.fechaNacimiento = datoIngresado
        }
        break;
        case "direccion" : {
            datosUsuario.data.direccion = datoIngresado
        }
        break;
        case "ciudad" : {
            datosUsuario.data.ciudad = datoIngresado
        }
        break;
        case "tel" : {
            datosUsuario.data.tel = datoIngresado
        }
        break;
        case "mail" : {
            datosUsuario.data.mail = datoIngresado
        }
        break;
        case "usuario" :{
            datosUsuario.data.usuario = datoIngresado
        }
        break;
        case "pass" :{
            datosUsuario.data.pass = datoIngresado
        }
    }

            datoIngresado = null
}

class AgregarCliente extends Component{
    render(){
        return(
            <Fragment>
                <NavBar/>
                <div className="divUsuarioAModificar">
                    <h3>Agregar cliente</h3>
                </div>
                
                <div className= "contenedorGeneral">
                
                    <div className="row" id="inputEnLinea">
                        <div className="divInput">
                            <p>Nombre</p>
                            <input id="inputModificarUsuario" name="nombre"
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>
                        <div className="divInput">
                            <p>Apellido</p>
                            <input id="inputModificarUsuario" name="apellido"
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>
                        <div className="divInput">
                            <p>Rol</p>
                            <select onChange={texto => this.modificarRolIngresado(texto)}>
                                <option value="" disabled selected>Seleccionar</option>
                                <option value="agente">Agente</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>           
                            </select>
                        </div>
                    </div>
                    <div className="row" id="inputEnLinea">
                        <div className="divInput">
                            <p>Telefono</p>
                            <input id="inputModificarUsuario" type= "number" name="tel" 
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>
                        <div className="divInput">
                            <p>DNI</p>
                            <input id="inputModificarUsuario" type= "number" name="dni"
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>
                    </div>
                    <div className="row" id="inputEnLinea">
                        <div className="divInput">
                            <p>Fecha Nac.</p>
                            <input id="inputModificarUsuario" name="fechaNac"
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>                         
                    </div>
                    <div className="row" id="inputEnLinea">
                        <div className="divInput">
                            <p>Direccion</p>
                            <input id="inputModificarUsuario" name="direccion" 
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>
                        <div className="divInput">
                            <p>Ciudad</p>
                            <input id="inputModificarUsuario" name="ciudad"
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>                          
                    </div>
                    <div className="row" id="inputEnLinea">
                        <div className='divInput'>
                             <p>Mail</p>
                            <input id="inputModificarUsuario" name="mail" 
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>
                        <div className="boxUserPass">
                            <p>Usuario</p>
                            <input id="inputModificarUsuarioBox" name="usuario"
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                            <p>Contrasena</p>
                            <input type="password" id="inputModificarUsuarioBox" name="pass"
                            onChange={texto => this.modificarDatosIngresados(texto)}></input>
                        </div>
                    </div>
                    <button className="btn btn-success" onClick={guardarUsuario}>
                        Guardar
                    </button>
                    <button className="btn btn-danger" onClick={volver}>
                        Cancelar
                    </button>
                </div>
            </Fragment>
        )
    }
}
const mapDispatchToProps = dispatch =>{
    return {
        agregarUsuario : () => dispatch({type:USUARIO_AGREGADO, datosUsuario}),
        volver : () => dispatch({type:VOLVER})
    };
}

export default connect (null, mapDispatchToProps)(AgregarCliente);

