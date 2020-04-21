import {combineReducers} from 'redux'
import userReducer from './userReducer'
import vistaReducer from './vistaReducer'
import datosBaseReducer from './datosBaseReducer'

export default combineReducers({
    user : userReducer,
    vista : vistaReducer,
    datosBase : datosBaseReducer
})