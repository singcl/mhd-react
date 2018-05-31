import { applyMiddleware, createStore } from 'redux'
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import api from '../middleware/api'
import rootReducer from '../reducers'

const configureStore = (preloadedState) =>
    createStore(
        rootReducer,
        preloadedState,
        applyMiddleware(thunk, api /* createLogger() */)
    )

export default configureStore
