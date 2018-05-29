import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Explore from '../components/Explore.jsx'

class App extends React.Component {
    static propTypes = {
        children: PropTypes.node,
        inputValue: PropTypes.string.isRequired
    }
    render() {
        const { children, inputValue } = this.props
        return (
            <div>
                <Explore />
                {children}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    inputValue: ownProps.location.pathname.substring(1)
})

export default withRouter(connect(mapStateToProps)(App))
