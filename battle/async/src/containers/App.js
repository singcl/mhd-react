import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import {
    fetchPostsIfNeeded,
    invalidateSubreddit,
    selectSubreddit
} from '../actions'
import Picker from '../components/Picker'
import Posts from '../components/Posts'

class App extends React.Component {
    componentDidMount() {
        const { dispatch, selectedSubreddit } = this.props
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
            const { dispatch, selectedSubreddit } = nextProps
            dispatch(fetchPostsIfNeeded(selectedSubreddit))
        }
    }

    handleChange = (nextSubreddit) => {
        this.props.dispatch(selectSubreddit(nextSubreddit))
    }

    handleChangeRefreshClick = (e) => {
        e.preventDefault()
        const { dispatch, selectedSubreddit } = this.props
        dispatch(invalidateSubreddit(selectedSubreddit))
        dispatch(fetchPostsIfNeeded(selectedSubreddit))
    }

    render() {
        const { selectedSubreddit, posts, isFetching, lastUpdated } = this.props
        const isEmpty = posts.length === 0

        return (
            <div>
                <Picker
                    value={selectedSubreddit}
                    onChange={this.handleChange}
                    options={['reactjs', 'frontend']}
                />

                <p>
                    {lastUpdated && (
                        <span>
                            Last updated at{' '}
                            {new Date(lastUpdated).toLocaleTimeString()}.{' '}
                        </span>
                    )}

                    {!isFetching && (
                        <button onClick={this.handleChangeRefreshClick}>
                            Refresh
                        </button>
                    )}
                </p>

                {isEmpty ? (
                    isFetching ? (
                        <h2>Loading...</h2>
                    ) : (
                        <h2>Empty.</h2>
                    )
                ) : (
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                )}
            </div>
        )
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
    selectedSubreddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number
}

const mapStateToProps = (state) => {
    const { selectedSubreddit, postsBySubreddit } = state
    const { isFetching, lastUpdated, items: posts } = postsBySubreddit[
        selectedSubreddit
    ] || {
        isFetching: true,
        items: []
    }

    return {
        selectedSubreddit,
        posts,
        isFetching,
        lastUpdated
    }
}

export default connect(mapStateToProps)(App)
