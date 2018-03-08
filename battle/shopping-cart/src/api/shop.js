// Mock 模拟从服务器请求数据

import _products from './products.json'

const TIMEOUT = 100

export default {
    getProducts: (cb, timeout) =>
        setTimeout(() => cb(_products), timeout || TIMEOUT)
}
