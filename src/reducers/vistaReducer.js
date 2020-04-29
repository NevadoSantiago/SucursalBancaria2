
import {AGENTES,AGENTE,AGENTE_CLIENTES,CLIENTES,
    MENSAJE_USUARIO,MENSAJE_AGENTE,SUCURSAL,SUCURSALES} from '../constantes/VistasConst'
import {MODIFICAR_USUARIO,MODIFICAR_SUCURSAL,HOME} from '../constantes/VistasConst'
import {CLIENTE_EDITADO,SUCURSAL_EDITADA, VOLVER, AGREGAR_CLIENTE, AGREGAR_SUCURSAL,
    USUARIO_AGREGADO, SUCURSAL_AGREGADA} from '../constantes/ActionConst'

const initialState = {
    vista : null,
    vistaAnterior:null
}

const vistaReducer = (state = initialState, action) => {
    switch(action.type){
        case AGENTES :{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista : AGENTES
            }
        }
        case AGENTE :{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista : AGENTE
            }
        }
        case AGENTE_CLIENTES :{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista : AGENTE_CLIENTES
            }
        }
        case CLIENTES :{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista : CLIENTES
            }
        }
        case MENSAJE_AGENTE :{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista : MENSAJE_AGENTE
            }
        }
        case MENSAJE_USUARIO :{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista : MENSAJE_USUARIO
            
        }
        }
        case SUCURSAL :{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista : SUCURSAL
            }
        }
        case SUCURSALES :{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista : SUCURSALES
            }
        }
        case MODIFICAR_USUARIO:{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista:MODIFICAR_USUARIO
            }
        }
        case MODIFICAR_SUCURSAL:{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista:MODIFICAR_SUCURSAL
            }
        }
        case SUCURSAL_EDITADA:{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista: SUCURSALES
            }
        }
        case USUARIO_AGREGADO:{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista: CLIENTES
            }
        }
        case SUCURSAL_AGREGADA:{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista: SUCURSALES
            }
        }
        case CLIENTE_EDITADO:{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista:CLIENTES
            }
        }
        case AGREGAR_CLIENTE:{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista: AGREGAR_CLIENTE
            }
        }
        case AGREGAR_SUCURSAL:{
            return{
                ...state,
                vistaAnterior : state.vista,
                vista:AGREGAR_SUCURSAL
            }
        }
        case VOLVER:{
            return{
                ...state,
                vista : state.vistaAnterior
            }
        }
        case HOME : {
            return{
                ...state,
                vista : null
            }
        }
        default:
            return{
                ...state,
            }
        
    }
}
export default vistaReducer