import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/App'
import reducer from './reducers'
import registerServiceWorker from './registerServiceWorker'

const store = createStore(reducer)
const render = x =>
    ReactDOM.render(
        <Provider store={store}>
            <App />
        </Provider>,
        document.getElementById('root')
    )

render()
// store.subscribe(render)
registerServiceWorker()
