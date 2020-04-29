import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

class MensajeUsuario extends Component{


    render(){
        return(
            <Fragment>
                <p>ACA SE MUESTRAN LOS MENSAJES LADO USUARIO</p>
            </Fragment>
        )
    }
}

export default connect(null,null)(MensajeUsuario)