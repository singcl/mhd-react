import merge from 'lodash/merge'
import { combineReducers } from 'redux'
import * as ActionTypes from '../constants/ActionTypes'
import paginate from './paginate'

const entities = (state = { users: {}, repos: {} }, action) => {
    if (action.response && action.response.entities) {
        return merge({}, state, action.response.entities)
    }
    return state
}

// Updates the pagination data for different actions.
const pagination = combineReducers({
    starredByUser: paginate({
        mapActionToKey: (action) => action.login,
        types: [
            ActionTypes.STARRED_REQUEST,
            ActionTypes.STARRED_SUCCESS,
            ActionTypes.STARRED_FAILURE
        ]
    })
})

export default combineReducers({
    entities,
    pagination
})
