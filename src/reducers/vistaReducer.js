import {CAMBIO_VISTA} from '../constantes/ActionConst'
import {AGENTES,AGENTE,AGENTE_CLIENTES,CLIENTES,MENSAJE,SUCURSAL,SUCURSALES} from '../constantes/VistasConst'

const initialState = {
    vista : null
}

const vistaReducer = (state = initialState, action) => {
    switch(action.type){
        case AGENTES :{
            return{
                ...state,
                vista : AGENTES
            }
        }
        case AGENTE :{
            return{
                ...state,
                vista : AGENTE
            }
        }
        case AGENTE_CLIENTES :{
            return{
                ...state,
                vista : AGENTE_CLIENTES
            }
        }
        case CLIENTES :{
            return{
                ...state,
                vista : CLIENTES
            }
        }
        case MENSAJE :{
            return{
                ...state,
                vista : MENSAJE
            }
        }
        case SUCURSAL :{
            return{
                ...state,
                vista : SUCURSAL
            }
        }
        case SUCURSALES :{
            return{
                ...state,
                vista : SUCURSALES
            }
        }
        default:
            return{
                ...state,
                vista : null
            }
        
    }
}
export default vistaReducer