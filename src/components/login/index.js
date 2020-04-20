import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {BASE_CLIENTES_URL} from '../constantes/URLs'
import '../styles/estiloLogin.css'

const datosLogueo = {
    data : null
}
const datosIngreso = {
    password: null,
    usuario: null
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
    modificarDatosIngresados = (dato) =>{
        if(dato.target.name === "user"){
            var datoIngresado = dato.target.value
            datosIngreso.usuario = datoIngresado
        }
        else if(dato.target.name === "pass"){
            var datoIngresado = dato.target.value
            datosIngreso.password = datoIngresado
        }
    }


    render(){
        const {handleSetUser} = this.props;
        return(
            <div className="formularioIngreso">
                <div className="titulo">
                    <h2>Sucursal Bancaria</h2>
                </div>
                <input type="text" onChange = {e =>this.modificarDatosIngresados(e)} name="user" placeholder="Usuario" required></input>
                <input type="password" onChange = {e =>this.modificarDatosIngresados(e)} name="pass" placeholder="Contraseña" required></input>
                <div className="botonIngreso">
                    <button onClick = {handleSetUser}>
                        Ingresar
                    </button>
                </div>
            </div>
            
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return {
        handleSetUser: () => dispatch({type: "LOGUEO_USUARIO", datosIngreso, datosBase:datosLogueo.data}),
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



