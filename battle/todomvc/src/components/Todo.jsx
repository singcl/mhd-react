import PropTypes from 'prop-types'
import React from 'react'

const Todo = ({ text, completed, onClick }) => (
    <li
        style={{ textDecoration: completed ? 'line-through' : 'none' }}
        onClick={onClick}
    >
        {text}
    </li>
)

Todo.propTypes = {
    completed: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired
}

export default Todo
