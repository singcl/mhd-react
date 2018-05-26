import * as types from '../constants/ActionTypes'

export const addTodo = (text) => ({
    type: types.ADD_TODO,
    text
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})

export const setVisibilityFilter = (filter) => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})
