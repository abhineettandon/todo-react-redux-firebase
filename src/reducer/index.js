import { combineReducers } from 'redux'
import { firebaseReducer } from 'react-redux-firebase'

import todoReducer from "./todoReducer";

export default combineReducers({
    todo: todoReducer,
    firebase: firebaseReducer
})