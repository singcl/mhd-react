import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getCartProducts, getTotal } from '../reducers'
import { checkout } from '../actions'
import Cart from '../components/Cart'
import { bindActionCreators } from 'redux'

const CartContainer = ({ products, total, checkout }) => (
    <Cart
        products={products}
        total={total}
        onCheckoutClicked={() => checkout(products)}
    />
)

CartContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            quantity: PropTypes.number.isRequired
        })
    ).isRequired,
    total: PropTypes.string,
    checkout: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    products: getCartProducts(state),
    total: getTotal(state)
})

export default connect(
    mapStateToProps,
    // 方法一: mapDispatchToProps 两种表示法中的函数表示法
    dispatch => ({
        ...bindActionCreators({ checkout }, dispatch)
    })
    // 方法二: mapDispatchToProps 两种表示法中的对象表示法 // react-redux 内部会包装成函数的写法
    // { checkout }
)(CartContainer)
