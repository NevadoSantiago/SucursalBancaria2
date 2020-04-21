
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../extras/navBar'
import {BASE_SUCURSALES_URL} from '../../constantes/URLs'
import {SETEAR_BASE_SUCURSALES} from '../../constantes/ActionConst'




class Sucursales extends Component{
render(){
    const {data} = this.state
    const {setearBaseSucursal} =this.props

    if(data==null){
        return(
            <Fragment>
                <NavBar/>
                <h2>Cargando...</h2>
            </Fragment>
        )
    }
    else{
        
        return(
            
            <Fragment>
                {setearBaseSucursal}
                <NavBar/>
                <h2>SUCURSALES</h2>
            </Fragment>
        )
    }

}


}
const mapStateToProps = store =>{
    return{

    }
}

const mapDispatchToProps = dispatch =>{
    return {
        setearBaseSucursal: () => dispatch({type:SETEAR_BASE_SUCURSALES, datosSucursal}),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sucursales);
