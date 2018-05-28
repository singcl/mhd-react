import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import Node from './containers/Node.jsx'
import generateTree from './generateTree'
// import './index.css'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

const middleware = []

if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(
    reducer,
    generateTree(),
    applyMiddleware(...middleware)
)

ReactDOM.render(
    <Provider store={store}>
        <Node id={0} />
    </Provider>,
    document.getElementById('root')
)

registerServiceWorker()
