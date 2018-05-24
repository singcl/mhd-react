import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import App from './containers/App'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

/*
// 自实现的一个简单的thunk中间件 
const thunk = store => next => action =>
  typeof action === 'function' ?
    action(store.dispatch, store.getState) :
    next(action) 
*/

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))
const rootEl = document.getElementById('root')

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootEl
    )

render()
store.subscribe(() => {
    console.group('Store State')
    console.log(
        '%cstate:',
        'color: #fff;background-image: linear-gradient(to right, red, blue)',
        store.getState()
    )
    console.groupEnd()
})
registerServiceWorker()
