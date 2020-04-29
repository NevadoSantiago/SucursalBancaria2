import React, {Component, Fragment} from 'react'
import '../../../styles/estiloUsuario.css'
import {connect} from 'react-redux'
import DatosTabla from '../../tablas/datosTabla'
import {AGENTE_CLIENTES} from '../../../constantes/VistasConst'

class MostrarClientes extends Component{
  
    render(){
        const {mostrar, vista} = this.props  
        debugger
        return(
            mostrar.map((data,index)=>
            <DatosTabla key={index} datos={data} vista={AGENTE_CLIENTES} />
          )
        )
    }
}


const mapStateToProps = store =>{
    return{
        name : store.user.name,
        vista : store.vista.vista,
        mostrar: store.datosBase.mostrar
    }

}
const mapDispatchToProps = dispatch =>{

    return {

    };
}

export default connect(mapStateToProps,mapDispatchToProps)(MostrarClientes)