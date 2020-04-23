import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../extras/navBar'
import CartelBienvenida from '../../extras/cartelBienvenida'


class User extends Component {
    render(){
        const {name,vista} = this.props
        switch(vista){
            default:
                return(
                    <Fragment>
                        <NavBar/>
                        <CartelBienvenida nombre = {name}/>
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