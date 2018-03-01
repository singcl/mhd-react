// https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
// 要么把React import进来，要么把react/react-in-jsx-scope这个规则disable掉
import React from 'react'
import { view as Todos } from './todos/'
import { view as Filter } from './filter/'

function TodoApp() {
	return (
		<div>
			<Todos />
			<Filter />
		</div>
	)
}

export default TodoApp
