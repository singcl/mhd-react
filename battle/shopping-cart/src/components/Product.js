import React from 'react'
import PropTypes from 'prop-types'

const Product = ({ title, price, quantity }) => (
    <div>
        {title} - &#36; {price}
        {quantity ? ` x ${quantity}` : null}
    </div>
)

Product.propTypes = {
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired
}

export default Product
