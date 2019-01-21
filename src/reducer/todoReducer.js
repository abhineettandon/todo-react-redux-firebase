import { FETCH_TODO, ADD_TODO } from '../actions/types'

const initialState = {
    todos: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state, todos: [action.payload, ...state.todos]
            }
        case FETCH_TODO:
            return {
                ...state, todos: action.payload
            }
        default:
            return state
    }
}

export default todoReducer