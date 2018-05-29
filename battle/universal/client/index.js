import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import App from '../common/containers/App.jsx'
import configureStore from '../common/store/configureStore'
import './index.scss'
import registerServiceWorker from './registerServiceWorker'

const preloadedState = window.__PRELOADED_STATE__
const store = configureStore(preloadedState)

// react-dom.development.js:9873 Warning: render(): Calling ReactDOM.render() to hydrate server-rendered markup will stop working in React v17.
// Replace the ReactDOM.render() call with ReactDOM.hydrate() if you want React to attach to the server HTML.
ReactDOM.hydrate(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
)

registerServiceWorker()
