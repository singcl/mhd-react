import PropTypes from 'prop-types'
import React, { Component } from 'react'

const GITHUB_REPO = 'https://github.com/reduxjs/redux'
class Explore extends Component {
    static propTypes = {
        onChange: PropTypes.func.isRequired,
        value: PropTypes.string.isRequired
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setInputValue(nextProps.value)
        }
    }

    setInputValue = (val) => {
        // Generally mutating DOM is a bad idea in React components,
        // but doing this for a single uncontrolled field is less fuss
        // than making it controlled and maintaining a state for it.
        this.input.value = val
    }

    getInputValue() {
        return this.input.value
    }

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleGoClick()
        }
    }

    handleGoClick = () => {
        this.props.onChange(this.getInputValue())
    }

    render() {
        return (
            <div>
                <p>Type a username or repo full name and hit 'Go':</p>
                <input
                    type="text"
                    size="45"
                    ref={(input) => (this.input = input)}
                    defaultValue={this.props.value}
                    onKeyUp={this.handleKeyUp}
                />
                <button onClick={this.handleGoClick}>Go!</button>
                <p>
                    Code on{' '}
                    <a
                        href={GITHUB_REPO}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Github
                    </a>.
                </p>
                <p>Move the DevTools with Ctrl+W or hide them with Ctrl+H.</p>
            </div>
        )
    }
}

export default Explore
