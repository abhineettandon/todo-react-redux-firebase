import { createStore, applyMiddleware, compose } from "redux";
import thunk from 'redux-thunk'
import { getFirestore, reduxFirestore } from 'redux-firestore'
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'

import fbconfig from './config/firebase'
import appReducer from './reducer'

export default createStore(
    appReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(getFirebase, getFirestore)),
        reactReduxFirebase(fbconfig),
        reduxFirestore(fbconfig)
    )
)