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

        'arrow-parens': ['error', 'always'] // 要求箭头函数的参数始终使用圆括号
    }
}
