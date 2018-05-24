import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { fetchPostsIfNeeded } from '../actions'

class App extends React.Component {
    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        return <div>Async App</div>
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedSubreddit: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
    selectedSubreddit: state.selectedSubreddit
})

export default connect(mapStateToProps)(App)
