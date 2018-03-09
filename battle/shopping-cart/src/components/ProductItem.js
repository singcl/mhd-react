import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'

const ProductItem = ({ product }) => (
    <div style={{ marginBottom: 20 }}>
        <Product
            title={product.title}
            price={product.price}
            quantity={product.inventory}
        />
    </div>
)

ProductItem.propTypes = {
    product: PropTypes.shape({
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        inventory: PropTypes.number.isRequired
    }).isRequired
}

export default ProductItem
