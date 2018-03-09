import shop from '../api/shop'
import * as types from '../constants/ActionTypes'

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})

// 异步Action Creator
export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}
