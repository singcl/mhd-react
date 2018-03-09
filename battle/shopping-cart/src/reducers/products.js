import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS, ADD_TO_CARD } from '../constants/ActionTypes'

// Reducer Creator: 具体每个产品对象
const products = (state, action) => {
    switch (action.type) {
        case ADD_TO_CARD:
            return {
                ...state,
                inventory: state.inventory - 1
            }
        default:
            return state
    }
}

// Reducer Creator: 可见产品的ID组成的数组
const visibleIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id)
        default:
            return state
    }
}

// Reducer Creator: key为产品ID，value为ID对应的产品的一个对象
const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        default:
            const { productId } = action
            if (productId) {
                return {
                    ...state,
                    // Reducer 嵌套
                    [productId]: products(state[productId], action)
                }
            }
            return state
    }
}

export default combineReducers({
    byId,
    visibleIds
})

export const getProduct = (state, id) => state.byId[id]
export const getVisibleProducts = state =>
    state.visibleIds.map(id => getProduct(state, id))
