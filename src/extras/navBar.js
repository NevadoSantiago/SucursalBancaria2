import React, {Component} from 'react'
import {CERRAR_SESION} from '../constantes/ActionConst'
import {AGENTES,AGENTE,AGENTE_CLIENTES,CLIENTES,MENSAJE,SUCURSAL,SUCURSALES} from '../constantes/VistasConst'
import {connect} from 'react-redux'
import {USER, ADMIN, ROL_AGENTE} from '../constantes/RolesConst'
import '../styles/estiloAdmin.css'


class NavBar extends Component{

render(){
    const {rol, cerrarSesion, cambiarVista} = this.props

    switch(rol){
        case ROL_AGENTE:{
           return(               
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" onClick={e => cambiarVista(null)}>Sucursal Bancaria</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarColor02">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" onClick={e => cambiarVista(AGENTE_CLIENTES)}>Listado Clientes <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={e => cambiarVista(SUCURSAL)}>Sucursal</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" onClick={e => cambiarVista(MENSAJE)}>Mensajes</a>
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
                <a className="navbar-brand" onClick={e => cambiarVista(null)}>Sucursal Bancaria</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" id="cambiarVista" onClick={e => cambiarVista(CLIENTES)}>
                        Listado usuarios <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(SUCURSALES)}>Sucursales</a>
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
                <a className="navbar-brand" onClick={e => cambiarVista(null)}>Sucursal Bancaria</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
              
                <div className="collapse navbar-collapse" id="navbarColor02">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                      <a className="nav-link" onClick={e => cambiarVista(AGENTE)}>Mi agente <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(SUCURSAL)}>Sucursal</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" onClick={e => cambiarVista(MENSAJE)}>Mensajes</a>
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
        cambiarVista: (dato) => dispatch({type:dato, dato})
    };
}
const mapStateToProps = state => {
    return{
        rol : state.user.rol,
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(NavBar);