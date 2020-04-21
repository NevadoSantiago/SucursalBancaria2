import React, {Component} from 'react'
import Login from '../login'
import {connect} from 'react-redux'
import Admin from '../admin'
import User from '../user'
import Agente from '../agente'
import {ADMIN, USER, ROL_AGENTE} from '../../constantes/RolesConst'

class RoutingIngreso extends Component{

    render(){
        const {rol} = this.props;
        switch(rol){
            default: {
                return(
                    <Login />
                )
            }
            case ADMIN: {
                return(
                    <Admin/>
                )
            }
            case USER:{
                return(
                    <User/>
                )
            }
            case ROL_AGENTE:{
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