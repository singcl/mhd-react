import classnames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

class TodoTextInput extends React.Component {
    static propTypes = {
        editing: PropTypes.bool,
        newTodo: PropTypes.bool,
        onSave: PropTypes.func.isRequired,
        placeholder: PropTypes.string,
        text: PropTypes.string
    }

    state = {
        text: this.props.text || ''
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }

    handleBlur = (e) => {
        if (!this.props.newTodo) {
            this.props.onSave(e.target.value)
        }
    }

    handleSubmit = (e) => {
        const text = e.target.value.trim()
        if (e.which === 13) {
            this.props.onSave(text)
            if (this.props.newTodo) {
                this.setState({ text: '' })
            }
        }
    }

    render() {
        return (
            <input
                className={classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                })}
                type="text"
                placeholder={this.props.placeholder}
                autoFocus="true"
                value={this.state.text}
                onBlur={this.handleBlur}
                onChange={this.handleChange}
                onKeyDown={this.handleSubmit}
            />
        )
    }
}

export default TodoTextInput
