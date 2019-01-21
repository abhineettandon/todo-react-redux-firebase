import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTodos } from '../actions/todoActions'

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchTodos()
    }
    render() {
        const todos = this.props.todos;
        return (
            <React.Fragment>
                <p>Total count: {todos.length}</p>
                <ul className="collection">
                    {todos.map(todo =>
                        <li key={todo.id} className="collection-item">{todo.title}</li>
                    )}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ todo }) => ({
    todos: todo.todos
})

export default connect(mapStateToProps, { fetchTodos })(TodoList)