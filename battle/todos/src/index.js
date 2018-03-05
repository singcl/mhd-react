import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducer)
const rootEl = document.getElementById('root')

const render = () =>
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        rootEl
    )

render()
// store.subscribe(render)
registerServiceWorker()
