import React from 'react'
import {SETEAR_BASE_SUCURSALES} from '../constantes/ActionConst'

const initialState = {

    usuarios : null,
    agentes:null,
    sucursales:null,

}

const datosBaseReducer = (state = initialState, action) => {
    debugger
    switch(action.type){
        case SETEAR_BASE_SUCURSALES: {
            return{
                ...state,
                sucursales : action.datosSucursal
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