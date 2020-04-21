
import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import NavBar from '../../extras/navBar'

class Sucursales extends Component{

async componentDidMount () {
    
}


render(){
    return(
        <Fragment>
            <NavBar/>
            <h2>SUCURSALES</h2>
        </Fragment>
    )
}


}
const mapStateToProps = store =>{
    return{

    }
}

const mapDispatchToProps = dispatch =>{
    return {

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Sucursales);
