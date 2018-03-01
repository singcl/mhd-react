// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
// 要么把React import进来，要么把react/react-in-jsx-scope这个规则disable掉
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import TodoApp from './TodoApp'

import store from './Store.js'

ReactDOM.render(
	<Provider store={store}>
		<TodoApp />
	</Provider>,
	document.getElementById('root')
)
