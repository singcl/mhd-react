/* eslint-disable react/sort-prop-types */
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { resetErrorMessage } from '../actions'
import Explore from '../components/Explore.jsx'

class App extends React.Component {
    static propTypes = {
        // Injected by React Router
        children: PropTypes.node,
        history: PropTypes.object.isRequired,
        // Injected by React Redux
        errorMessage: PropTypes.string,
        inputValue: PropTypes.string.isRequired,
        resetErrorMessage: PropTypes.func.isRequired
    }

    handleChange = (nextValue) => {
        const { history } = this.props
        history.push(`/${nextValue}`)
    }

    handleDismissClick = (e) => {
        this.props.resetErrorMessage()
        e.preventDefault()
    }

    renderErrorMessage() {
        const { errorMessage } = this.props
        if (!errorMessage) {
            return null
        }

        return (
            <p style={{ backgroundColor: '#e99', padding: 10 }}>
                <b>{errorMessage}</b>{' '}
                <button onClick={this.handleDismissClick}>Dismiss</button>
            </p>
        )
    }

    render() {
        const { children, inputValue } = this.props
        return (
            <div>
                <Explore value={inputValue} onChange={this.handleChange} />
                <hr />
                {this.renderErrorMessage()}
                {children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    errorMessage: state.errorMessage,
    inputValue: ownProps.location.pathname.substring(1)
})

const mapDispatchToProps = { resetErrorMessage }

export default withRouter(
    connect(
        mapStateToProps,
        mapDispatchToProps
    )(App)
)
