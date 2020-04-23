import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BASE_CLIENTES_URL, BASE_SUCURSALES_URL} from '../../constantes/URLs'
import '../../styles/estiloLogin.css'
import {LOGUEO_USUARIO} from '../../constantes/ActionConst'

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
                <div>
                    <p>Para ingresar como admin: usuario: soyAdmin pass:soyAdmin</p>
                    <p>Para ingresar como usuario: usuario: soyUsuario pass:usuario</p>
                    <p>Para ingresar como agente: usuario: soyAgente pass:soyAgente</p>
                </div>
                <div className="titulo">
                    <h2>Sucursal Bancaria</h2>
                </div>
                <div className="divInputIngreso">
                    <input id="inputIngreso" type="text" onChange = {e =>this.modificarDatosIngresados(e)} name="user" placeholder="Usuario" required></input>
                </div>
                <div className="divInputIngreso">
                <input id="inputIngreso" type="password" onChange = {e =>this.modificarDatosIngresados(e)} name="pass" placeholder="Contraseña" required></input>
                </div>

                <div className="divBoton">
                    <button onClick = {handleSetUser} id="botonIngreso">
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
    };
}

export default connect(null, mapDispatchToProps)(Login);



