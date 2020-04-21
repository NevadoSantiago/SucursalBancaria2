
import {LOGUEO_USUARIO,CERRAR_SESION} from '../constantes/ActionConst'
import {ADMIN, USER, ROL_AGENTE} from '../constantes/RolesConst'

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
        const {usuario, password} = data
        var logueado = null;
        datosLogueo.data = null;
     const arregloUsuarios = datosBase.results[0].listUser;
        var contador = 0;
        const cantidadUsuarios = arregloUsuarios.length;

    while(contador<cantidadUsuarios && datosLogueo.data == null){
        const usuarioBase = arregloUsuarios[contador];
        if(usuario.toUpperCase() === usuarioBase.data.usuario.toUpperCase() && password===usuarioBase.data.pass){
            logueado = usuarioBase;
        }
        contador ++;
}
        return logueado
     }

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case LOGUEO_USUARIO :{
            var logueado = validarDatos(action.datosIngreso, action.datosBase);
            if(logueado != null){

                const newName = logueado.data.nombre;
                const newUsername = logueado.data.usuario;
                var newRol = logueado.data.rol;
                const newId = logueado.data.id;
                switch(newRol){
                    case "admin":
                        newRol = ADMIN;
                    
                    break;
                    case "agente" : 
                        newRol = ROL_AGENTE;
                    
                    break;
                    default:
                        newRol = USER;
                    
                }
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
        case CERRAR_SESION:{
            
            return{
                ...state,
                rol:null,
                username:null,
                name:null,
                id : null
            }
        }
         default:
            return state   
        
    }
    
}
export default userReducer
