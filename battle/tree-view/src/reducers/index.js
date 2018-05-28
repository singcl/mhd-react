import { INCREMENT } from '../constants/ActionTypes'

const node = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                counter: state.counter + 1
            }
        default:
            return state
    }
}

export default (state = {}, action) => {
    const { nodeId } = action
    if (typeof nodeId === 'undefined') {
        return state
    }

    return {
        ...state,
        [nodeId]: node(state[nodeId], action)
    }
}
