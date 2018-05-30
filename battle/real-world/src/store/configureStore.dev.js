import { applyMiddleware, compose, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools.jsx'
import api from '../middleware/api'
import rootReducer from '../reducers'

const configureStore = (preloadedState) => {
    const store = createStore(
        rootReducer,
        preloadedState,
        compose(
            applyMiddleware(thunk, api, createLogger()),
            DevTools.instrument()
        )
    )

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            store.replaceReducer(rootReducer)
        })
    }

    return store
}

export default configureStore
