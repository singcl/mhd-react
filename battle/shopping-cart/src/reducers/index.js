import { combineReducers } from 'redux'
import products, * as fromProducts from './products'
import cart, * as fromCart from './cart'

const getAddedIds = state => fromCart.getAddedIds(state.cart)
const getQuantity = (state, id) => fromCart.getQuantity(state.cart, id)
const getProduct = (state, id) => fromProducts.getProduct(state.products, id)

export default combineReducers({
    products,
    cart
})

export const getCartProducts = state =>
    getAddedIds(state).map(id => ({
        ...getProduct(state, id),
        quantity: getQuantity(state, id)
    }))

export const getTotal = state =>
    getAddedIds(state)
        .reduce(
            (total, id) =>
                total + getProduct(state, id).price * getQuantity(state, id),
            0
        )
        .toFixed(2)
