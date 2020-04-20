import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {BASE_CLIENTES_URL} from '../constantes/URLs'

const datosLogueo = {
    data : null
}

class Login extends Component {


    async componentDidMount () {
        var datos;
        await fetch(BASE_CLIENTES_URL)
        
        .then(function(response){
            return response.json()
        })
        .then(function(myJson){
            datosLogueo.data = myJson
        })
    }


    render(){
        const {username, name, rol, handleSetUser} = this.props;
        return(
            <Fragment>
                <form onSubmit={handleSetUser}>
                    <input type="text" name="user" required></input>
                    <input type="password" name="pass" required></input>
                    <p>{username}</p>
                    <p>{name}</p>
                    <p>{rol}</p>
                    <button>
                        Prueba
                    </button>
                </form>

            </Fragment>
            
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        setRol: (data) => dispatch({type: "setRol", data}),
        handleSetUser: (data) => dispatch({type: "LOGUEO_USUARIO", data, datosBase:datosLogueo.data}),
        setUsername:(data) => dispatch({type: "setUsername", data})
    };
}
const mapStateToProps = state => {
    return{
        rol: state.user.rol,
        username: state.user.username,
        name : state.user.name
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);



