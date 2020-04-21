import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../extras/navBar'
import {} from '../../constantes/VistasConst'


class User extends Component {
    render(){
        const {name,vista} = this.props
        switch(vista){
            default:
                return(
                    <Fragment>
                        <NavBar/>
                        <div className="cartelBienvenida">
                            <h2>Bienvenido {name}</h2>
                        </div>
                    </Fragment>
                )
        }

    }
}
const mapStateToProps = store =>{
    return{
        name : store.user.name,
        vista: store.vista.vista
    }
}
export default connect(mapStateToProps,null)(User)