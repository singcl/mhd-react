import PropTypes from 'prop-types'
import React from 'react'
import TodoItem from './TodoItem.jsx'

const TodoList = ({ filteredTodos, actions }) => (
    <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} {...actions} />
        ))}
    </ul>
)

TodoList.propTypes = {
    actions: PropTypes.object.isRequired,
    filteredTodos: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            completed: PropTypes.bool.isRequired,
            text: PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}

export default TodoList
