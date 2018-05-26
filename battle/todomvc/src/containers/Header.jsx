import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import TodoTextInput from '../components/TodoTextInput.jsx'

const Header = ({ addTodo }) => (
    <header className="header">
        <h1>todos</h1>
        <TodoTextInput
            newTodo
            onSave={(text) => {
                if (text.length !== 0) {
                    addTodo(text)
                }
            }}
            placeholder="What needs to be done?"
        />
    </header>
)

Header.propTypes = {
    addTodo: PropTypes.func.isRequired
}

export { Header }
export default connect(null, { addTodo })(Header)
