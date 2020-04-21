
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../extras/navBar'
import {BASE_SUCURSALES_URL} from '../../constantes/URLs'
import {SETEAR_BASE_SUCURSALES} from '../../constantes/ActionConst'
import {TablaSucursales} from './tablaSucursales'

class Sucursales extends Component{

render(){
    var {usuarios,sucursales} = this.props
        return(
            sucursales.listSucursales.map((data,index)=>
            <TablaSucursales key={index} datos={data} />
            )
        )
    }

}
const mapStateToProps = state =>{
    return{
        usuarios : state.datosBase.usuarios,
        sucursales : state.datosBase.sucursales
    }
}

const mapDispatchToProps = dispatch =>{
    return {
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sucursales);
