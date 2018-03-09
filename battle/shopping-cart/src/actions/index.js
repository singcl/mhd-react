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

const addToCartUnsafe = productId => ({
    type: types.ADD_TO_CARD,
    productId
})

// 返回函数的Action Creator：redux-thunk中间件的作用
export const addToCart = productId => (dispatch, getState) => {
    if (getState().products.byId[productId].inventory > 0) {
        dispatch(addToCartUnsafe(productId))
    }
}

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState()
    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
        // Replace the line above with line below to rollback on failure:
        // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
}
