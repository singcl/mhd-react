import {
    ADD_TODO,
    CLEAR_COMPLETED,
    COMPLETE_ALL_TODOS,
    COMPLETE_TODO,
    DELETE_TODO,
    EDIT_TODO
} from '../constants/ActionTypes'

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
        case COMPLETE_TODO:
            return state.map(
                (todo) =>
                    todo.id === action.id
                        ? {
                              ...todo,
                              completed: !todo.completed
                          }
                        : todo
            )
        case COMPLETE_ALL_TODOS:
            const areAllMarked = state.every((todo) => todo.completed)
            return state.map((todo) => ({
                ...todo,
                completed: !areAllMarked
            }))
        case EDIT_TODO:
            return state.map(
                (todo) =>
                    todo.id === action.id
                        ? { ...todo, text: action.text }
                        : todo
            )
        case DELETE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case CLEAR_COMPLETED:
            return state.filter((todo) => todo.completed === false)
        default:
            return state
    }
}
