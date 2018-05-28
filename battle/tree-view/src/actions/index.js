import * as types from '../constants/ActionTypes'

export const increment = (nodeId) => ({ type: types.INCREMENT, nodeId })
export const removeChild = (nodeId, childId) => ({
    type: types.REMOVE_CHILD,
    nodeId,
    childId
})
export const deleteNode = (nodeId) => ({ type: types.DELETE_NODE, nodeId })

let nextId = 0
export const createNode = () => ({
    type: types.CREATE_NODE,
    nodeId: `new_${nextId++}`
})

export const addChild = (nodeId, childId) => ({
    type: types.ADD_CHILD,
    nodeId,
    childId
})
