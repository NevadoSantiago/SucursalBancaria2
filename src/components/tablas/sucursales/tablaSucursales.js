import React, {Component} from 'react'
import {connect} from 'react-redux'
import {SUCURSALES} from '../../../constantes/VistasConst'
import DatosTabla from '../datosTabla'

class TablaSucursales extends Component{

    render(){
        const {sucursales} = this.props
        return(
            sucursales.listSucursales.map((data,index)=>
            <DatosTabla datos = {data}/>
            )
        )

    }


}
const mapStateToProps = state =>{
    return{
        sucursales : state.datosBase.sucursales
    }
}

export default connect(mapStateToProps, null)(TablaSucursales);
