import React from 'react'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import DevTools from './DevTools.jsx'

const Root = ({ store }) => (
    <Provider store={store}>
        <div>
            <div>DEV_ROOT</div>
            <DevTools />
        </div>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired
}

export default Root
