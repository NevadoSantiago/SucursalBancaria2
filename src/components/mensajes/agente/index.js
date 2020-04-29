import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'

class MensajeAgente extends Component{


    render(){
        return(
            <Fragment>
                <p>ACA SE MUESTRAN LOS MENSAJES LADO AGENTE</p>
            </Fragment>
        )
    }
}

export default connect(null,null)(MensajeAgente)