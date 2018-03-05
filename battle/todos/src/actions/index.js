let nextTodoId = 0

// Actions Creater
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})
