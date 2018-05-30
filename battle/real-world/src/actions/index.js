import * as types from '../constants/ActionTypes'
import { CALL_API, Schemas } from '../middleware/api'

// Resets the currently visible error message.
export const resetErrorMessage = () => ({ type: types.RESET_ERROR_MESSAGE })

// Fetches a single user from Github API.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchUser = (login) => ({
    [CALL_API]: {
        types: [types.USER_REQUEST, types.USER_SUCCESS, types.USER_FAILURE],
        endpoint: `users/${login}`,
        schema: Schemas.USER
    }
})

// Fetches a page of starred repos by a particular user.
// Relies on the custom API middleware defined in ../middleware/api.js.
const fetchStarred = (login, nextPageUrl) => ({
    login,
    [CALL_API]: {
        types: [
            types.STARRED_REQUEST,
            types.STARRED_SUCCESS,
            types.STARRED_FAILURE
        ],
        endpoint: nextPageUrl,
        schema: Schemas.REPO_ARRAY
    }
})

// Fetches a single user from Github API unless it is cached.
// Relies on Redux Thunk middleware.
export const loadUser = (login, requiredFields = []) => (
    dispatch,
    getState
) => {
    const user = getState().entities.users[login]
    if (user && requiredFields.every((key) => user.hasOwnProperty(key))) {
        return null
    }
    return dispatch(fetchUser(login))
}

// Fetches a page of starred repos by a particular user.
// Bails out if page is cached and user didn't specifically request next page.
// Relies on Redux Thunk middleware.
export const loadStarred = (login, nextPage) => (dispatch, getState) => {
    const { nextPageUrl = `users/${login}/starred`, pageCount = 0 } =
        getState().pagination.starredByUser[login] || {}

    if (pageCount > 0 && !nextPage) {
        return null
    }

    return dispatch(fetchStarred(login, nextPageUrl))
}
