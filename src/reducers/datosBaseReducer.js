import React from 'react'
import {LOGUEO_USUARIO,ELIMINAR_CLIENTE, ELIMINAR_SUCURSAL,SUCURSAL_EDITADA,CLIENTE_EDITADO,
    USUARIO_AGREGADO} from '../constantes/ActionConst'
import {MODIFICAR_USUARIO,MODIFICAR_SUCURSAL} from '../constantes/VistasConst'
import {datosUsuarioConst} from '../constantes/clientesDatosConst'

const initialState = {

    usuarios : null,
    agentes:null,
    sucursales:null,
    usuarioModificar: null,
    sucursalModificar: null,

}
const modeloUsuario = datosUsuarioConst;

const eliminarUsuario=(state, id)=>{
    const listaUsuarios = state.usuarios.listUser
    var contador = 0;
    const tamanoLista = listaUsuarios.length;
    var encontrado = null;
    var usuario = null
    while(contador<tamanoLista && encontrado == null){
        usuario = listaUsuarios[contador];
        var idUsuario = usuario.data.id;
        if(idUsuario === id){
            listaUsuarios[contador] = modeloUsuario
        }
        contador ++;
    }
}
const modificarUsuarioBase = (action,state) => {
    const nuevosDatos = action.data;
    var usuarioAModificar = state.usuarioModificar.data
    if(nuevosDatos.nombre != "" && nuevosDatos.nombre!=null){
            usuarioAModificar.nombre = nuevosDatos.nombre
    }
    if(nuevosDatos.apellido != "" && nuevosDatos.apellido != null){
        usuarioAModificar.apellido  = nuevosDatos.apellido
    }
    if(nuevosDatos.ciudad != "" && nuevosDatos.ciudad != null){
        usuarioAModificar.ciudad  = nuevosDatos.ciudad
    }
    if(nuevosDatos.direccion != "" && nuevosDatos.direccion != null){
        usuarioAModificar.direccion  = nuevosDatos.direccion
    }
    if(nuevosDatos.dni != "" && nuevosDatos.dni != null){
        usuarioAModificar.dni  = nuevosDatos.dni
    }
    if(nuevosDatos.fechaNacimiento != "" && nuevosDatos.fechaNacimiento != null){
        usuarioAModificar.fechaNacimiento  = nuevosDatos.fechaNacimiento
    }
    if(nuevosDatos.mail != "" && nuevosDatos.mail != null){
        usuarioAModificar.mail  = nuevosDatos.mail
    }
    if(nuevosDatos.id != "" && nuevosDatos.id != null){
        usuarioAModificar.id  = nuevosDatos.id
    }
    if(nuevosDatos.pass != "" && nuevosDatos.pass != null){
        usuarioAModificar.pass  = nuevosDatos.pass
    }
    if(nuevosDatos.rol != "" && nuevosDatos.rol != null){
        usuarioAModificar.rol  = nuevosDatos.rol
    }
    if(nuevosDatos.tel != "" && nuevosDatos.tel != null){
        usuarioAModificar.tel  = nuevosDatos.tel
    }
    if(nuevosDatos.usuario != "" && nuevosDatos.usuario != null){
        usuarioAModificar.usuario  = nuevosDatos.usuario
    }
    if(nuevosDatos.usuariosACargo != "" && nuevosDatos.usuariosACargo != null){
        usuarioAModificar.usuariosACargo  = nuevosDatos.usuariosACargo
    }
    
    

    
}
const agregarUsuario = (state, usuario) =>{
    debugger
    const usuarioNuevoID = state.usuarios.listUser.length
    usuario.data.id = usuarioNuevoID;
    state.usuarios.listUser[usuarioNuevoID] = usuario
}
const traerUsuarioAModificar = (state, id) =>{
    const idAModificar = id.dato;
    const listaUsuarios = state.usuarios.listUser
    var contador = 0;
    const tamanoLista = listaUsuarios.length;
    var encontrado = null;
    var usuario = null
    while(contador<tamanoLista && encontrado == null){
        usuario = listaUsuarios[contador];
        var idUsuario = usuario.data.id;
        if(idUsuario === idAModificar){
            encontrado = usuario
        }
        contador ++;
    }
    return(
        encontrado
    )
}

const datosBaseReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGUEO_USUARIO: {
            return{
                ...state,
                sucursales : action.datosBase.results[1],
                usuarios : action.datosBase.results[0]
            }
        }
        case MODIFICAR_SUCURSAL:{
            return{
                ...state
            }
        }
        case MODIFICAR_USUARIO:{
            const usuarioAModificar = traerUsuarioAModificar(state,action)
            return{
                ...state,
                usuarioModificar:usuarioAModificar
            }
        }
        case CLIENTE_EDITADO:{
             modificarUsuarioBase(action.datosUsuario,state)
            return{
                ...state,
            }
        }
        case SUCURSAL_EDITADA:{
            
            return{
                ...state,
            }
        }
        case ELIMINAR_CLIENTE:{
            
            eliminarUsuario(state, action.dato)
            return{
                ...state
            }

        }
        case ELIMINAR_SUCURSAL:{

        }
        case USUARIO_AGREGADO:{
            agregarUsuario(state, action.datosUsuario)
            return{
                ...state
            }
        }
        default : {
            return {
                ...state
            }
        }


    }
}

export default datosBaseReducer;