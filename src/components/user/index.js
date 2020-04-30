import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../extras/navBar'
import CartelBienvenida from '../../extras/cartelBienvenida'
import {AGENTE, SUCURSAL,MENSAJE_USUARIO} from '../../constantes/VistasConst'
import MostrarAgente from './agente/datosAgente'
import MostrarSucursal from './sucursal/datosSucursal'
import MensajeUsuario from '../mensajes/usuario'


class User extends Component {
    render(){
        const {name,vista, mostrar} = this.props
        switch(vista){
            case AGENTE:{
                return(
                <Fragment>
                    <NavBar/>
                    <MostrarAgente data={mostrar}/>
                </Fragment>
                )

            }
            case SUCURSAL:{
                return(
                <Fragment>
                    <NavBar/>
                    <MostrarSucursal data="vacio"/>
                </Fragment>
                )

            }
            case MENSAJE_USUARIO:{
                return(
                <Fragment>
                    <NavBar/>
                    <MensajeUsuario/>
                </Fragment>
                )

            }
            default:
                return(
                    <Fragment>
                        <NavBar/>
                        <CartelBienvenida nombre = {name}/>
                    </Fragment>
                )
        }

    }
}
const mapStateToProps = store =>{
    return{
        name : store.user.name,
        vista: store.vista.vista,
        mostrar: store.datosBase.mostrar
    }
}
export default connect(mapStateToProps,null)(User)