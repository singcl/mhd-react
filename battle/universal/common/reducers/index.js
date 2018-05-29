import { DECREMENT_COUNTER, INCREMENT_COUNTER, SET_COUNTER } from '../constants'

export default (state = { counter: 0 }, action) => {
    switch (action.type) {
        case SET_COUNTER:
            return action.payload
        case INCREMENT_COUNTER:
            return {
                counter: state.counter + 1
            }
        case DECREMENT_COUNTER:
            return {
                counter: state.counter - 1
            }
        default:
            return state
    }
}
