import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import '../../../styles/estiloModificarCliente.css'
import {SUCURSAL_EDITADA,VOLVER, AGREGAR_SUCURSAL, SUCURSAL_AGREGADA} from '../../../constantes/ActionConst'
import NavBar from '../../../extras/navBar'
import { MODIFICAR_SUCURSAL } from '../../../constantes/VistasConst'
import {datosSucursalConst} from '../../../constantes/clientesDatosConst'

var datosSucursal = {
    data:{
        id: null,
        direccion:null,
        ciudad:null,
        region:null,
        tel:null,
        correo:null,
    }
}
var ACCION = null;


class AgregarOModificarSucursal extends Component{

    modificarDatosIngresados = (dato) =>{

        var seModifica = dato.target.name;
        var datoIngresado = dato.target.value
        
        switch(seModifica){
            case "direccion" : {        
                datosSucursal.data.direccion = datoIngresado
            }
            break;
            case "ciudad" : {        
                datosSucursal.data.ciudad = datoIngresado
            }
            break;
            case "region" : {        
                datosSucursal.data.region = datoIngresado
            }
            break;
            case "tel" : {        
                datosSucursal.data.tel = datoIngresado
            }
            break;
            case "correo" : {        
                datosSucursal.data.correo = datoIngresado
            }
    
        }

                datoIngresado = null
    }
    render(){
        const {sucursalModificar, modificarOAgregarSucursal, volver, vista} = this.props
        var datosPlaceholder = null;
        var mensaje = null;

        const alGuardar=()=>{
            modificarOAgregarSucursal()
        }
        switch(vista){    
            case MODIFICAR_SUCURSAL : {
                debugger
                 datosPlaceholder = sucursalModificar;
                 ACCION =  SUCURSAL_EDITADA;
                 mensaje = `Modificar sucursal ID: ${sucursalModificar.data.id}`
                 break;
            }
            
            case AGREGAR_SUCURSAL :{
                 datosPlaceholder = datosSucursalConst;
                 ACCION = SUCURSAL_AGREGADA;
                 mensaje = "Agregar sucursal"
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
                                    <p>Direccion</p>
                                    <input id="inputModificarUsuario" name="direccion" placeholder={datosPlaceholder.data.nombre} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                                <div className="divInput">
                                    <p>Ciudad</p>
                                    <input id="inputModificarUsuario" name="ciudad" placeholder={datosPlaceholder.data.apellido} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                            </div>
                            <div className="row" id="inputEnLinea">
                                <div className="divInput">
                                    <p>Telefono</p>
                                    <input id="inputModificarUsuario" type= "number" name="tel" placeholder={datosPlaceholder.data.tel} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>
                            </div>
                            <div className="row" id="inputEnLinea">
                                <div className="divInput">
                                    <p>Region</p>
                                    <input id="inputModificarUsuario" name="region" placeholder={datosPlaceholder.data.fechaNacimiento} 
                                    onChange={texto => this.modificarDatosIngresados(texto)}></input>
                                </div>                         
                            </div>
                            <div className="row" id="inputEnLinea">
                                <div className="divInput">
                                    <p>Correo</p>
                                    <input id="inputModificarUsuario" name="correo" placeholder={datosPlaceholder.data.direccion} 
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
        modificarOAgregarSucursal : (e) => dispatch({type:ACCION, datosSucursal}),
        volver : () => dispatch({type:VOLVER})
    };
}
const mapStateToProps = state => {
    return{
        sucursalModificar : state.datosBase.sucursalModificar,
        vista : state.vista.vista,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AgregarOModificarSucursal)