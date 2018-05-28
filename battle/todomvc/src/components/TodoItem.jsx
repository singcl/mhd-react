import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import TodoTextInput from './TodoTextInput.jsx'

class TodoItem extends React.Component {
    static propTypes = {
        completeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        editTodo: PropTypes.func.isRequired,
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }

    state = {
        editing: false
    }

    handleDoubleClick = () => {
        this.setState({ editing: true })
    }

    handleSave = (id, text) => {
        if (text.length === 0) {
            this.props.deleteTodo(id)
        } else {
            this.props.editTodo(id, text)
        }
        this.setState({ editing: false })
    }

    render() {
        const { todo, completeTodo, deleteTodo } = this.props
        let element
        if (this.state.editing) {
            element = (
                <TodoTextInput
                    text={todo.text}
                    editing={this.state.editing}
                    onSave={(text) => this.handleSave(todo.id, text)}
                />
            )
        } else {
            element = (
                <div className="view">
                    <input
                        type="checkbox"
                        className="toggle"
                        checked={todo.completed}
                        onChange={() => completeTodo(todo.id)}
                    />
                    <label onDoubleClick={this.handleDoubleClick}>
                        {todo.text}
                    </label>
                    <button
                        className="destroy"
                        onClick={() => deleteTodo(todo.id)}
                    />
                </div>
            )
        }
        return (
            <li
                className={classnames({
                    completed: todo.completed,
                    editing: this.state.editing
                })}
            >
                {element}
            </li>
        )
    }
}

export default TodoItem
