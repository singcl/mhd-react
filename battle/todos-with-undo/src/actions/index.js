const uuidV4 = require('uuid/v4')
// let nextTodoId = 0

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: uuidV4(),
    text
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})
