import { PropTypes } from 'prop-types';
import React from 'react';

const Link = ({ active, children, onClick }) => {
    if (active) {
        // return React.Children.map(children, child => (<span>{child}</span>))
        return <span>{children}</span>
    }

    return (
        // eslint-disable-next-line
        <a
            href="#"
            onClick={e => {
                e.preventDefault()
                onClick()
            }}
        >
            {/* {React.Children.map(children, child => child)} */}
            {children}
        </a>
    )
}

Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}

export default Link
