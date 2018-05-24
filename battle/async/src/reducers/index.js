import { combineReducers } from 'redux'
import {
    INVALIDATE_SUBREDDIT,
    RECEIVE_POSTS,
    REQUEST_POSTS,
    SELECT_SUBREDDIT
} from '../actions'

const selectedSubreddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_SUBREDDIT:
            return action.subreddit
        default:
            return state
    }
}

const posts = (
    state = {
        isFetching: false,
        didInvalidate: false,
        items: []
    },
    action
) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
            return {
                ...state,
                didInvalidate: true
            }

        case REQUEST_POSTS:
            return {
                ...state,
                isFetching: true,
                didInvalidate: false
            }
        case RECEIVE_POSTS:
            return {
                ...state,
                isFetching: false,
                didInvalidate: false,
                items: action.posts,
                lastUpdated: action.receivedAt
            }
        default:
            return state
    }
}

const postsBySubreddit = (state = {}, action) => {
    switch (action.type) {
        case INVALIDATE_SUBREDDIT:
        case REQUEST_POSTS:
        case RECEIVE_POSTS:
            return {
                ...state,
                [action.subreddit]: posts(state[action.subreddit], action)
            }
        default:
            return state
    }
}

export default combineReducers({
    selectedSubreddit,
    postsBySubreddit
})
