import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions/todoActions'

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ""
        }
    }
    handleChange = e => {
        const { name, value } = e.target
        this.setState(() => ({ [name]: value }))
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addTodo(this.state)
        this.setState({
            title: ''
        })
    }
    render() {
        return (
            <form className="col s12" onSubmit={this.handleSubmit}>
                <div className="row">
                    <div className="input-field col s12">
                        <input id="last_name" type="text" name="title" className="validate" required onChange={this.handleChange} autoComplete="off" value={this.state.title} />
                        <label htmlFor="last_name">Add a Todo</label>
                    </div>
                </div>
            </form>
        )
    }
}

export default connect(null, { addTodo })(TodoForm)