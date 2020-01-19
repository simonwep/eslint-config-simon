module.exports = {
    extends: './base',

    env: {
        'browser': true
    },

    rules: {
        'react/jsx-closing-bracket-location': 'off',
        'react/jsx-curly-spacing': 'error',
        'react/jsx-tag-spacing': ['error', {'beforeSelfClosing': 'never'}],
        'react/jsx-indent-props': ['error', 'first'],
        'react/jsx-first-props-per-line': 'off',
        'react/jsx-wrap-multilines': 'off',
        'react/jsx-indent': ['error', 4],
        'react/display-name': 'warn'
    }
};
