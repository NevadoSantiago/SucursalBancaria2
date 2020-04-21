import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../extras/navBar'
import {SUCURSALES,CLIENTES} from '../../constantes/VistasConst'
import {SETEAR_BASE_SUCURSALES} from '../../constantes/ActionConst'
import Sucursales from '../tablas/Sucursales'


class Admin extends Component {


    render(){
        const {name, vista} = this.props
    switch(vista){
        case (null) : {
            return(
                <Fragment>
                    <NavBar/>
                    <div className = "titulo">
                        <h2>Bienvenido {name}</h2>
                    </div>
                </Fragment>
            )
        }
        case (SUCURSALES) : {
            
            return(
                <Sucursales/>
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