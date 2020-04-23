import React, {Component} from 'react'
import {connect} from 'react-redux'
import DatosTabla from '../datosTabla'
import {CLIENTES} from '../../../constantes/VistasConst'

class TablaClientes extends Component{

    render(){
        const {usuarios} = this.props
        return(
            usuarios.listUser.map((data,index)=>
            <DatosTabla key={index} datos={data} vista={CLIENTES} />
            )
        )

    }


}
const mapStateToProps = state =>{
    return{
        usuarios : state.datosBase.usuarios
    }
}

export default connect(mapStateToProps, null)(TablaClientes);