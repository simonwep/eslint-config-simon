module.exports = {
    env: {
        'es6': true
    },

    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },

    rules: {

        // Soften eslint's recommend rules
        'no-console': 'warn',
        'no-debugger': 'warn',

        // Custom rules
        'no-mixed-spaces-and-tabs': 'warn',
        'no-unused-vars': 'warn',
        'no-alert': 'error',
        'no-eval': 'error',
        'no-implied-eval': 'error',
        'no-empty-function': 'error',
        'no-proto': 'error',
        'no-label-var': 'error',
        'no-lone-blocks': 'error',
        'no-useless-constructor': 'error',
        'no-use-before-define': 'error',
        'no-else-return': 'error',
        'no-return-await': 'error',
        'no-useless-call': 'error',
        'no-useless-return': 'error',
        'no-sequences': 'error',
        'no-extend-native': 'error',
        'no-invalid-this': 'error',
        'no-undef-init': 'error',
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'space-infix-ops': 'error',
        'comma-dangle': ['error', 'never'],
        'comma-spacing': ['error', {'before': false, 'after': true}],
        'comma-style': ['error', 'last'],
        'func-call-spacing': ['error', 'never'],
        'linebreak-style': ['error', 'windows'],
        'no-multiple-empty-lines': ['error', {'max': 1}],
        'no-whitespace-before-property': 'error',
        'object-curly-spacing': ['error', 'never'],
        'array-bracket-spacing': ['error', 'never'],
        'computed-property-spacing': ['error', 'never'],
        'no-throw-literal': 'error',
        'brace-style': ['error', '1tbs'],
        'keyword-spacing': 'warn',
        'no-lonely-if': 'error',
        'no-trailing-spaces': 'error',
        'no-delete-var': 'error',
        'no-redeclare': 'error',
        'no-multi-str': 'error',
        'camelcase': 'error',
        'eol-last': 'error',
        'curly': 'error',

        // Enforce esnext features
        'no-var': 'error',
        'prefer-const': 'error',
        'object-shorthand': 'error',
        'rest-spread-spacing': ['error', 'never'],
        'template-curly-spacing': ['error', 'never'],
        'prefer-exponentiation-operator': 'error',
        'prefer-arrow-callback': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-template': 'error',
        'prefer-spread': 'error',
        'prefer-rest-params': 'error',
        'yoda': 'error',

        // Enforce pow operator
        'no-restricted-properties': [
            'error',
            {
                'object': 'Math',
                'property': 'pow',
                'message': 'Use the exponentiation operator (**) instead of Math.pow()'
            }
        ],

        'no-empty': [
            'error',
            {'allowEmptyCatch': true}
        ],

        'no-labels': [
            'error',
            {'allowLoop': true}
        ],

        'no-constant-condition': [
            'error',
            {'checkLoops': false}
        ],

        'indent': [
            'error', 4,
            {'SwitchCase': 1}
        ],

        'quotes': ['error', 'single']
    }
};
