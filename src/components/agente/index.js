import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import CartelBienvenida from '../../extras/cartelBienvenida'
import NavBar from '../../extras/navBar'
import {AGENTE_CLIENTES,SUCURSAL,MENSAJE_AGENTE} from '../../constantes/VistasConst'
import MensajeAgente from '../mensajes/agente'
import ClientesACargo from './cliente/index'
import MostrarSucursal from './sucursal/datosSucursal'


 
class Agente extends Component {
    render(){
        const {name, vista, mostrar} = this.props
        switch(vista){
            case (null) : {
                return(
                    <Fragment>
                        <NavBar/>
                        <CartelBienvenida nombre = {name}/>
                    </Fragment>
                )
            }
            case (AGENTE_CLIENTES) : {
                return(
                    <Fragment>
                        <NavBar/>
                        <ClientesACargo/>
                    </Fragment>
                )
            }
            case (SUCURSAL) : {
                return(
                    <Fragment>
                        <NavBar/>
                        <MostrarSucursal/>
                    </Fragment>
                )
            }
            case (MENSAJE_AGENTE) : {
                return(
                    <Fragment>
                        <NavBar/>
                        <MensajeAgente/>
                    </Fragment>
                )
            }
        }
    }
}
const mapStateToProps = store =>{
    return{
        name : store.user.name,
        vista : store.vista.vista,
        mostrar: store.datosBase.mostrar
    }
}
export default connect(mapStateToProps,null)(Agente)