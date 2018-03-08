export const getProduct = (state, id) => state.byId(id)
export const getVisibleProducts = state =>
    state.visibleIds.map(id => getProduct(state, id))
