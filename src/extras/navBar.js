import React, {Component} from 'react'
import {CERRAR_SESION, AGREGAR_CLIENTE,AGREGAR_SUCURSAL} from '../constantes/ActionConst'
import {AGENTES,AGENTE,AGENTE_CLIENTES,CLIENTES,MENSAJE_USUARIO,MENSAJE_AGENTE,SUCURSAL,SUCURSALES,HOME} from '../constantes/VistasConst'
import {connect} from 'react-redux'
import {USER, ADMIN, ROL_AGENTE} from '../constantes/RolesConst'
import '../styles/estiloAdmin.css'

var idActual = {
  value : null,
}

class NavBar extends Component{

render(){
    const {rol, cerrarSesion, cambiarVista, id} = this.props
    idActual = id;
    switch(rol){
        case ROL_AGENTE:{
           return(               
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" onClick={e => cambiarVista(HOME)}>Sucursal Bancaria</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <a className="nav-link" onClick={e => cambiarVista(AGENTE_CLIENTES)}>Listado Clientes</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={e => cambiarVista(SUCURSAL)}>Sucursal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={e => cambiarVista(MENSAJE_AGENTE)}>Mensajes</a>
                </li>
              </ul>
              <div className="form-inline my-2 my-lg-0" id="cerrarSesion">
                <a onClick={cerrarSesion}>Cerrar Sesion</a>
              </div>
            </div>
          </nav>
           ) 
        }
        case ADMIN :{
            return(               
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" onClick={e => cambiarVista(HOME)}>Sucursal Bancaria</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" id="cambiarVista" onClick={e => cambiarVista(CLIENTES)}>
                        Listado usuarios</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(SUCURSALES)}>Sucursales</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(AGREGAR_CLIENTE)}>Generar cliente</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(AGREGAR_SUCURSAL)}>Generar sucursal</a>
                    </li>
                  </ul>
                  <div className="form-inline my-2 my-lg-0" id="cerrarSesion">
                    <a onClick={cerrarSesion}>Cerrar Sesion</a>
                  </div>
                </div>
              </nav>
               ) 
        }
        default:{
            return(               
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" onClick={e => cambiarVista(HOME)}>Sucursal Bancaria</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(AGENTE)}>Mi agente</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(SUCURSAL)}>Sucursal</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(MENSAJE_USUARIO)}>Mensajes</a>
                    </li>
                  </ul>
                  <div className="form-inline my-2 my-lg-0" id="cerrarSesion">
                    <a onClick={cerrarSesion}>Cerrar Sesion</a>
                  </div>
                </div>
              </nav>
               ) 
        }
    }
}    

}
const mapDispatchToProps = dispatch =>{
    return {
        cerrarSesion: () => dispatch({type:CERRAR_SESION}),
        cambiarVista: (dato) => dispatch({type:dato, dato:idActual })
    };
}
const mapStateToProps = state => {
    return{
        rol : state.user.rol,
        id : state.user.id,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);