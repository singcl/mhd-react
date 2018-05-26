import { ADD_TODO } from '../constants/ActionTypes'

const initialState = [
    {
        text: 'Use Redux',
        completed: false,
        id: 0
    }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.text,
                    completed: false,
                    id:
                        state.reduce(
                            (maxId, todo) => Math.max(maxId, todo.id),
                            -1
                        ) + 1
                }
            ]
        default:
            return state
    }
}
