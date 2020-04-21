import {BASE_CLIENTES_URL} from '../../constantes/URLs'

export const getDatos = async () => {
    var datos;
   await fetch(BASE_CLIENTES_URL)
   
   .then(function(response){
       return response.json()
   })
   .then(function(myJson){
       datos=myJson
       console.log(datos)
   })
   
    return datos;
}


export const validarDatos =  (data,datosBase) => {
    let {username, password} = data;
    var usuarioLogueado = null;
    const arregloUsuarios = datosBase.results[0].listUser;
    var contador = 0;
    const cantidadUsuarios = arregloUsuarios.length;
    var ingreso = false;
    while(contador<cantidadUsuarios && !ingreso){
        var usuario = arregloUsuarios[contador]
        var usernameBase = usuario.data.usuario
         var passBase = usuario.data.pass
    if(usernameBase === username && passBase === password){
        ingreso = true
        usuarioLogueado = usuario;
    }
    contador ++;
    }
    return usuarioLogueado;
}