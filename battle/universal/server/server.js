import Express from 'express'
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
const port = 3050

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
        res.send(renderFullPage(html, finalState))
    })
}

app.get('/', handleRender)

const renderFullPage = (html, preloadedState) => {
    return `
        <!doctype html>
        <html>
        <head>
            <title>Redux Universal Example</title>
        </head>
        <body>
            <div id="app">${html}</div>
            <script>
            window.__PRELOADED_STATE__ = ${JSON.stringify(
                preloadedState
            ).replace(/</g, '\\x3c')}
            </script>
            <script src="/static/bundle.js"></script>
        </body>
        </html>
    `
}

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info(
            `==> Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`
        )
    }
})
