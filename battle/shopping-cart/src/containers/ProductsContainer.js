import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import { getVisibleProducts } from '../reducers/products'

const ProductsContainer = ({ products }) => (
    <ProductsList title="Products">
        {products.map(product => (
            <ProductItem key={product.id} product={product} />
        ))}
    </ProductsList>
)

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired
        })
    ).isRequired
}

const mapStateToProps = state => ({
    products: getVisibleProducts(state.products)
})

export default connect(
    mapStateToProps
    // mapDispatchToProps 两种表示法中的对象表示法
    // 异步action creator
)
