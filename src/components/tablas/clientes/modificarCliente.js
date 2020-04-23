import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import '../../../styles/estiloModificarCliente.css'
import {CLIENTE_EDITADO,VOLVER, AGREGAR_CLIENTE, USUARIO_AGREGADO} from '../../../constantes/ActionConst'
import NavBar from '../../../extras/navBar'
import { MODIFICAR_USUARIO } from '../../../constantes/VistasConst'
import {datosUsuarioConst} from '../../../constantes/clientesDatosConst'


var datosUsuario = {
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
var ACCION = null;


class ModificarClientes extends Component{

    modificarRolIngresado = (dato) =>{
        debugger
        const nuevoRol = dato.target.value
        datosUsuario.data.rol = nuevoRol
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
    render(){
        const {usuarioModificar, modificarOAgregarUsuario, volver, vista} = this.props
        var datosPlaceholder = null;
        var mensaje = null;

        const alGuardar=()=>{
            modificarOAgregarUsuario("e")
            datosUsuario = datosUsuarioConst
        }
        switch(vista){    
            case MODIFICAR_USUARIO : {
                debugger
                 datosPlaceholder = usuarioModificar;
                 ACCION =  CLIENTE_EDITADO;
                 mensaje = `Modificar usuario: ${usuarioModificar.data.usuario}  ID: ${usuarioModificar.data.id}`
                 break;
            }
            
            case AGREGAR_CLIENTE :{
                 datosPlaceholder = datosUsuarioConst;
                 ACCION = USUARIO_AGREGADO;
                 mensaje = "Agregar usuario"
            }
        }
                return(
                    <Fragment>
                        <NavBar/>
                        <div className="divUsuarioAModificar">
                            <h3>{mensaje}</h3>
                        </div>
                        
                        <div className= "contenedorGeneral">
                        
                            <div className="row" id="inputEnLinea">
                                <div className="divInput">
                                    <p>Nombre</p>
                                    <input id="inputModificarUsuario" name="nombre" placeholder={datosPlaceholder.data.nombre} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                                <div className="divInput">
                                    <p>Apellido</p>
                                    <input id="inputModificarUsuario" name="apellido" placeholder={datosPlaceholder.data.apellido} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                                <div className="divInput">
                                    <p>Rol</p>
                                    <select placeholder={datosPlaceholder.data.rol} onChange={texto => this.modificarRolIngresado(texto)}>
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
                                    <input id="inputModificarUsuario" type= "number" name="tel" placeholder={datosPlaceholder.data.tel} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                                <div className="divInput">
                                    <p>DNI</p>
                                    <input id="inputModificarUsuario" type= "number" name="dni" placeholder={datosPlaceholder.data.dni} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                            </div>
                            <div className="row" id="inputEnLinea">
                                <div className="divInput">
                                    <p>Fecha Nac.</p>
                                    <input id="inputModificarUsuario" name="fechaNac" placeholder={datosPlaceholder.data.fechaNacimiento} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>                         
                            </div>
                            <div className="row" id="inputEnLinea">
                                <div className="divInput">
                                    <p>Direccion</p>
                                    <input id="inputModificarUsuario" name="direccion" placeholder={datosPlaceholder.data.direccion} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                                <div className="divInput">
                                    <p>Ciudad</p>
                                    <input id="inputModificarUsuario" name="ciudad" placeholder={datosPlaceholder.data.ciudad} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>                          
                            </div>
                            <div className="row" id="inputEnLinea">
                                <div className='divInput'>
                                     <p>Mail</p>
                                    <input id="inputModificarUsuario"  name="mail" placeholder={datosPlaceholder.data.mail} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                                <div className="boxUserPass">
                                    <p>Usuario</p>
                                    <input id="inputModificarUsuarioBox" name="usuario" placeholder={datosPlaceholder.data.usuario} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                    <p>Contrasena</p>
                                    <input id="inputModificarUsuarioBox" type="password" name="pass" placeholder="***********" 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={alGuardar}>
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
        modificarOAgregarUsuario : (e) => dispatch({type:ACCION, datosUsuario}),
        volver : () => dispatch({type:VOLVER})
    };
}
const mapStateToProps = state => {
    return{
        usuarioModificar : state.datosBase.usuarioModificar,
        vista : state.vista.vista,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ModificarClientes)