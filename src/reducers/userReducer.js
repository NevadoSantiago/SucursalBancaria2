import {BASE_CLIENTES_URL} from '../components/constantes/URLs'

const initialState={
    username: null,
    name:null,
    rol: null,
    id: null,
    apellido: null
};
const datosLogueo = {
    data :null
}

     const validarDatos = (data, datosBase) => {
        const usuario = data.user.value;
        const password = data.user.value
        var logueado = null;
        datosLogueo.data = null;

     const arregloUsuarios = datosBase.results[0].listUser;
        var contador = 0;
        const cantidadUsuarios = arregloUsuarios.length;

    while(contador<cantidadUsuarios && datosLogueo.data == null){
        const usuarioBase = arregloUsuarios[contador];
        if(usuario === usuarioBase.data.usuario && password===usuarioBase.data.pass){
            logueado = usuarioBase;
        }
        contador ++;
}
        return logueado
     }

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case "LOGUEO_USUARIO" :{
            debugger
            var logueado = validarDatos(action.data.target, action.datosBase);
            if(logueado != null){

                const newName = logueado.data.nombre;
                const newUsername = logueado.data.usuario;
                const newRol = logueado.data.rol;
                const newId = logueado.data.id;
                return{
                    ...state,
                    rol:newRol,
                    username:newUsername,
                    name:newName,
                    id : newId
                }  
                
            }
            else {
                return{
                    state
                }
                
            }

        }
        case "setRol":{
            const newRol = action.data.rol;
            return{
                ...state,
                rol:newRol
            }
        }
        case "setUsername":{
            const newUsername = action.data.usuario;
            return{
                ...state,
                username:newUsername
            }
        }
         default:
            return state   
        
    }
    
}
export default userReducer
