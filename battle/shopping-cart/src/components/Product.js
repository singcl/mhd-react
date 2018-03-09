import React from 'react'
import PropTyles from 'prop-types'

const Product = ({ title, price, quantity }) => (
    <div>
        {title} - &#36; {price}
        {quantity ? `x${quantity}` : null}
    </div>
)

Product.propTypes = {
    title: PropTyles.string.isRequired,
    price: PropTyles.number.isRequired,
    quantity: PropTyles.number.isRequired
}

export default Product
