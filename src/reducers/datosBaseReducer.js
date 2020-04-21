import React from 'react'
import {LOGUEO_USUARIO} from '../constantes/ActionConst'

const initialState = {

    usuarios : null,
    agentes:null,
    sucursales:null,

}

const datosBaseReducer = (state = initialState, action) => {
    debugger
    switch(action.type){
        case LOGUEO_USUARIO: {
            return{
                ...state,
                sucursales : action.datosBase.results[1],
                usuarios : action.datosBase.results[0]
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