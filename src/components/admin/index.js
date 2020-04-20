import React, {Component} from 'react'
import {connect} from 'react-redux'

 
class Admin extends Component {
    render(){
        const {name} = this.props
        return(
            <div>
                <h2>{name}</h2>
            </div>
        )
    }
}
const mapStateToProps = store =>{
    return{
        name : store.user.name
    }
}
export default connect(mapStateToProps,null)(Admin)