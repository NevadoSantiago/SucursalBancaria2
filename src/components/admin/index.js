import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../extras/navBar'
import {SUCURSALES,CLIENTES,MODIFICAR_SUCURSAL,MODIFICAR_USUARIO} from '../../constantes/VistasConst'
import {AGREGAR_CLIENTE,AGREGAR_SUCURSAL} from '../../constantes/ActionConst'
import Sucursales from '../tablas/sucursales'
import Clientes from '../tablas/clientes'
import CartelBienvenida from '../../extras/cartelBienvenida'
import ModificarCliente from '../tablas/clientes/agregar-modificarCliente'


class Admin extends Component {


    render(){
        const {name, vista} = this.props
        debugger
    switch(vista){
        case (null) : {
            return(
                <Fragment>
                    <NavBar/>
                    <CartelBienvenida nombre = {name}/>
                </Fragment>
            )
        }
        case (SUCURSALES) : {
            
            return(
                <Sucursales/>
            )
        }
        case (CLIENTES) : {
            return(
                <Clientes/>
            )
        }
        case (MODIFICAR_USUARIO): {
            return(
                <Fragment>
                    <ModificarCliente/>
                </Fragment>
                
            )
        }
        case(AGREGAR_CLIENTE): {
            return(
                <Fragment>
                    <ModificarCliente/>
                </Fragment>
                
            )
        }

    }

    }
}
const mapStateToProps = store =>{
    return{
        name : store.user.name,
        vista : store.vista.vista
    }

}
const mapDispatchToProps = dispatch =>{

    return {
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(Admin)