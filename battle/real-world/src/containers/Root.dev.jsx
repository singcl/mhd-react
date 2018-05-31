import PropTypes from 'prop-types'
import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import App from './App.jsx'
import DevTools from './DevTools.jsx'
import RepoPage from './RepoPage.jsx'
import UserPage from './UserPage.jsx'

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <Route path="/" component={App} />
            <Route path="/:login/:name" component={RepoPage} />
            <Route path="/:login" component={UserPage} />
            <DevTools />
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
