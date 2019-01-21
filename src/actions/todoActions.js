import { ADD_TODO, FETCH_TODO } from './types'

export const addTodo = ({ title }) => (dispatch, getFirebase, getFirestore) => {
    const firebase = getFirebase();
    console.log(firebase);
    firebase.set("todos", { title: title })
    dispatch({
        type: ADD_TODO,
        payload: {
            id: 6,
            title
        }
    })
}

export const fetchTodos = () => (dispatch, getFirebase) => {
    dispatch({
        type: FETCH_TODO,
        payload: [
            { id: 1, title: "Visit Store" },
            { id: 2, title: "Get fruits" },
        ]
    })
}