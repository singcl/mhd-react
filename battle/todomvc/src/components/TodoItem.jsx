import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

class TodoItem extends React.Component {
    static propTypes = {
        completeTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        todo: PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    }

    state = {
        editing: false
    }

    render() {
        const { todo, completeTodo, deleteTodo } = this.props
        let element
        if (this.state.editing) {
            //
        } else {
            element = (
                <div className="view">
                    <input
                        type="checkbox"
                        className="toggle"
                        checked={todo.completed}
                        onChange={() => completeTodo(todo.id)}
                    />
                    <label htmlFor="">{todo.text}</label>
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
