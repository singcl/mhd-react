module.exports = {
    extends: 'react-app',
    plugins: ['import'],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.json']
            }
        },
        'import/extensions': ['.js', '.jsx'],
        'import/core-modules': [],
        'import/ignore': [
            'node_modules',
            '\\.(coffee|scss|css|less|hbs|svg|json)$'
        ]
    },
    rules: {
        // Static analysis:

        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        'import/no-unresolved': [
            'error',
            { commonjs: true, caseSensitive: true }
        ],

        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                jsx: 'never'
            }
        ],
        // Enforce propTypes declarations alphabetical sorting
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-prop-types.md
        'react/sort-prop-types': [
            'error',
            {
                ignoreCase: true,
                callbacksLast: false,
                requiredFirst: false
            }
        ],

        // Prevent missing props validation in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        'react/prop-types': [
            'error',
            {
                ignore: [],
                customValidators: [],
                skipUndeclared: false
            }
        ],

        'arrow-parens': ['error', 'always'] // 要求箭头函数的参数始终使用圆括号
    }
}
