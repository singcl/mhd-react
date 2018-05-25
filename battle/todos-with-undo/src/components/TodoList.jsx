import PropTypes from 'prop-types'
import React from 'react'
import Todo from './Todo.jsx'

const TodoList = ({ todos, onTodoClick }) => (
    <ul>
        {todos.map((todo) => (
            <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
            />
        ))}
    </ul>
)

TodoList.propTypes = {
    onTodoClick: PropTypes.func.isRequired,
    todos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default TodoList
