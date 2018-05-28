export default function generateTree() {
    let tree = {
        0: {
            id: 0,
            counter: 0,
            childIds: []
        }
    }
    // 算法：在int i > 0 的情况下下面表达式恒为true
    // Math.floor(Math.pow(Math.random(), 2) * i) < i
    // 所以从 i = 1开始循环的话  tree[parentId]中的parentId 一定小于 tree[parentId].childId s数组中的任何一个数
    // 从而避免在Node组件递归渲染时出现死循环
    for (let i = 1; i < 1000; i++) {
        let parentId = Math.floor(Math.pow(Math.random(), 2) * i)
        tree[i] = {
            id: i,
            counter: 0,
            childIds: []
        }
        tree[parentId].childIds.push(i)
    }

    return tree
}
