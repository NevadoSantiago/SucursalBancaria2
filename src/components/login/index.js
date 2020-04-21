import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BASE_CLIENTES_URL, BASE_SUCURSALES_URL} from '../../constantes/URLs'
import '../styles/estiloLogin.css'
import {LOGUEO_USUARIO,SETEAR_BASE_SUCURSALES,SETEAR_BASE_USUARIOS} from '../../constantes/ActionConst'

const datosLogueo = {
    data : null
}
const datosIngreso = {
    password: null,
    usuario: null
}

class Login extends Component {


    async componentDidMount () {
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
            var datoUserIngresado = dato.target.value
            datosIngreso.usuario = datoUserIngresado
        }
        else if(dato.target.name === "pass"){
            var datoPassIngresado = dato.target.value
            datosIngreso.password = datoPassIngresado
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
        handleSetUser: () => dispatch({type: LOGUEO_USUARIO, datosIngreso, datosBase:datosLogueo.data}),
        handleSetListaUser:(dato) => dispatch({type: SETEAR_BASE_USUARIOS, dato })
    };
}

export default connect(null, mapDispatchToProps)(Login);



