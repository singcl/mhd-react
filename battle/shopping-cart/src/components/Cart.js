import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const Cart = ({ products, total }) => {
    const hasProducts = products.length > 0
    const nodes = hasProducts ? (
        products.map(product => (
            <Product
                title={product.title}
                price={product.price}
                quantity={product.quantity}
                key={product.id}
            />
        ))
    ) : (
        <em>Please add some products to cart.</em>
    )

    return (
        <div>
            <h3>Your Cart</h3>
            <div>{nodes}</div>
            <h3>Total: &#36;{total}</h3>
        </div>
    )
}

Cart.propTypes = {
    product: PropTypes.array,
    total: PropTypes.string
}

export default Cart
