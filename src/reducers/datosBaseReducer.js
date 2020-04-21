import React from 'react'

const initialState = {

    usuarios : null,
    agentes:null,
    sucursales:null,

}

const datosBaseReducer = (state = initialState, action) => {
    switch(action.type){
        case "asd": {
            return{
                ...state
            }
        }


    }
    return{
        ...state
    }
}

export default datosBaseReducer;