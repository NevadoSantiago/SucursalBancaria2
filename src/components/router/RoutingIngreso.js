import React, {Component} from 'react'
import Login from '../login'
import {connect} from 'react-redux'
import Admin from '../admin'
import User from '../user'
import Agente from '../agente'

class RoutingIngreso extends Component{

    render(){
        const {rol} = this.props;
        switch(rol){
            default: {
                return(
                    <Login />
                )
            }
            case "admin": {
                return(
                    <Admin/>
                )
            }
            case "user":{
                return(
                    <User/>
                )
            }
            case "agente":{
                return(
                    <Agente/>
                )
                    
            }
            
        }
    }
}
const mapStateToProps = state => {
    return {
        rol : state.user.rol
    }
}

export default connect(mapStateToProps, null)(RoutingIngreso);