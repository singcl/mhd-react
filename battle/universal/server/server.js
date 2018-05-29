import Express from 'express'
import path from 'path'
import qs from 'qs'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { fetchCounter } from '../common/api/counter'
import App from '../common/containers/App.jsx'
import configureStore from '../common/store/configureStore'
import webpackConfig from '../webpack.config'

// https://github.com/gajus/react-css-modules/issues/83

const app = new Express()

// 配置一些常用变量
app.set('port', process.env.PORT || '3050') // 服务器启动端口
app.set('views', path.join(__dirname, 'views')) // 将path片段拼成规范的路径 - 放模板文件的目录
// 指定模板引擎
// 在没有显示调用app.engine()的情况下,express 内部会默认调用 app.engine('jade', require('jade').__express);
// 调用render函数时，自动添加jade后缀
// By default, Express will require() the engine based on the file extension.
// @see http://www.expressjs.com.cn/4x/api.html
app.set('view engine', 'jade')

const compiler = webpack(webpackConfig)
app.use(
    webpackDevMiddleware(compiler, {
        noInfo: true,
        publicPath: webpackConfig.output.publicPath
    })
)
app.use(webpackHotMiddleware(compiler))

const handleRender = (req, res) => {
    fetchCounter((apiResult) => {
        const params = qs.parse(req.query)
        const counter = parseInt(params.counter, 10) || apiResult || 0

        const preloadedState = { counter }
        const store = configureStore(preloadedState)

        const html = renderToString(
            <Provider store={store}>
                <App />
            </Provider>
        )

        const finalState = store.getState()

        // res.send(renderFullPage(html, finalState))

        res.render('index', {
            html,
            preloadedState: JSON.stringify(finalState).replace(/</g, '\\x3c')
        })
    })
}

app.get('/', handleRender)

// const renderFullPage = (html, preloadedState) => {
//     return `
//         <!doctype html>
//         <html>
//         <head>
//             <title>Redux Universal Example</title>
//         </head>
//         <body>
//             <div id="app">${html}</div>
//             <script>
//             window.__PRELOADED_STATE__ = ${JSON.stringify(
//                 preloadedState
//             ).replace(/</g, '\\x3c')}
//             </script>
//             <script src="/static/bundle.js"></script>
//         </body>
//         </html>
//     `
// }

const port = app.get('port')
app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info(
            `==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`
        )
    }
})
