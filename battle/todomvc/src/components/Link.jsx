import PropTypes from 'prop-types'
import React from 'react'

const Link = ({ active, children, onClick }) => {
    if (active) {
        return <span>{children}</span>
    }

    return (
        <a // eslint-disable-line jsx-a11y/href-no-hash
            href="#"
            onClick={(e) => {
                e.preventDefault()
                onClick()
            }}
        >
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
