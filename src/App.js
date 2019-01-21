import React from 'react'
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { Provider } from 'react-redux'
import store from './store'

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>

                <div className="container">
                    <div className="row">
                        <h1>Todo list</h1>
                    </div>
                    <div className="row">
                        <TodoForm />
                    </div>
                    <div className="row">
                        <TodoList />
                    </div>
                </div>

            </Provider>
        )
    }
}

export default App