module.exports = {
    env: {
        'es6': true
    },

    parserOptions: {
        'ecmaVersion': 2018,
        'sourceType': 'module'
    },

    rules: {

        // The rules below are listed in the order they appear on the eslint rules page.
        // All rules are listed to make it easier to keep in sync as new ESLint rules are added.
        // http://eslint.org/docs/rules/

        // Possible Errors
        // http://eslint.org/docs/rules/#possible-errors
        // ---------------------------------------------
        'for-direction': 0,
        'no-await-in-loop': 0,
        'no-compare-neg-zero': 2,
        'no-cond-assign': 0,
        'no-console': 1,
        'no-constant-condition': [2, {'checkLoops': false}],
        'no-control-regex': 2,
        'no-debugger': 1,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': [2, {'allowEmptyCatch': true}],
        'no-empty-character-class': 2,
        'no-ex-assign': 2,
        'no-extra-boolean-cast': 2,
        'no-extra-parens': 0,
        'no-extra-semi': 2,
        'no-func-assign': 2,
        'no-inner-declarations': 2,
        'no-invalid-regexp': 2,
        'no-irregular-whitespace': 2,
        'no-obj-calls': 2,
        'no-prototype-builtins': 0,
        'no-regex-spaces': 2,
        'no-sparse-arrays': 2,
        'no-template-curly-in-string': 0,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,
        'no-unsafe-finally': 2,
        'no-unsafe-negation': 0,
        'use-isnan': 2,
        'valid-jsdoc': 0,
        'valid-typeof': 2,

        // Best Practices
        // http://eslint.org/docs/rules/#best-practices
        // --------------------------------------------
        'accessor-pairs': 0,
        'array-callback-return': 0,
        'block-scoped-var': 0,
        'class-methods-use-this': 0,
        'complexity': 0,
        'consistent-return': 0,
        'curly': 2,
        'default-case': 0,
        'dot-location': 0,
        'dot-notation': 2,
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-case-declarations': 2,
        'no-div-regex': 0,
        'no-else-return': 2,
        'no-empty-function': 2,
        'no-empty-pattern': 2,
        'no-eq-null': 0,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-extra-label': 0,
        'no-fallthrough': 2,
        'no-floating-decimal': 0,
        'no-global-assign': 0,
        'no-implicit-coercion': 0,
        'no-implicit-globals': 0,
        'no-implied-eval': 2,
        'no-invalid-this': 2,
        'no-iterator': 0,
        'no-labels': [2, {'allowLoop': true}],
        'no-lone-blocks': 2,
        'no-loop-func': 0,
        'no-magic-numbers': 0,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-new': 0,
        'no-new-func': 0,
        'no-new-wrappers': 2,
        'no-octal': 2,
        'no-octal-escape': 0,
        'no-param-reassign': 0,
        'no-proto': 2,
        'no-redeclare': 2,
        'no-restricted-properties': [
            2, {
                'object': 'Math',
                'property': 'pow',
                'message': 'Use the exponentiation operator (**) instead of Math.pow()'
            }
        ],
        'no-return-assign': 0,
        'no-script-url': 0,
        'no-self-assign': 2,
        'no-self-compare': 0,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unmodified-loop-condition': 0,
        'no-unused-expressions': 0,
        'no-unused-labels': 2,
        'no-useless-call': 0,
        'no-useless-concat': 0,
        'no-useless-escape': 0,
        'no-void': 2,
        'no-warning-comments': 0,
        'no-with': 2,
        'prefer-promise-reject-errors': 2,
        'radix': 0,
        'require-await': 0,
        'vars-on-top': 0,
        'wrap-iife': 0,
        'yoda': 2,

        // Strict Mode
        // http://eslint.org/docs/rules/#strict-mode
        // -----------------------------------------
        'strict': 0,

        // Variables
        // http://eslint.org/docs/rules/#variables
        // ---------------------------------------
        'init-declarations': 0,
        'no-catch-shadow': 0,
        'no-delete-var': 2,
        'no-label-var': 2,
        'no-restricted-globals': 0,
        'no-shadow': 0,
        'no-shadow-restricted-names': 0,
        'no-undef': 2,
        'no-undef-init': 2,
        'no-undefined': 0,
        'no-unused-vars': [2, {args: 'none'}],
        'no-use-before-define': 2,

        // Node.js and CommonJS
        // http://eslint.org/docs/rules/#nodejs-and-commonjs
        // -------------------------------------------------
        'callback-return': 0,
        'global-require': 0,
        'handle-callback-err': 0,
        'no-buffer-constructor': 0,
        'no-mixed-requires': 0,
        'no-new-require': 0,
        'no-path-concat': 0,
        'no-process-env': 0,
        'no-process-exit': 0,
        'no-restricted-modules': 0,
        'no-sync': 0,

        // Stylistic Issues
        // http://eslint.org/docs/rules/#stylistic-issues
        // ----------------------------------------------
        'array-bracket-newline': 0,
        'array-bracket-spacing': [2, 'never'],
        'array-element-newline': 0,
        'block-spacing': [2, 'never'],
        'brace-style': [2, '1tbs'],
        'camelcase': [2, {properties: 'never'}],
        'capitalized-comments': 0,
        'comma-dangle': [2, 'never'],
        'comma-spacing': [2, {'before': false, 'after': true}],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': 0,
        'eol-last': 2,
        'func-call-spacing': [2, 'never'],
        'func-name-matching': 0,
        'func-names': 0,
        'func-style': 0,
        'id-blacklist': 0,
        'id-length': 0,
        'id-match': 0,
        'indent': [
            2, 4, {
                'CallExpression': {
                    'arguments': 1
                },
                'FunctionDeclaration': {
                    'body': 1,
                    'parameters': 1
                },
                'FunctionExpression': {
                    'body': 1,
                    'parameters': 1
                },
                'MemberExpression': 1,
                'ObjectExpression': 1,
                'SwitchCase': 1,
                'ignoredNodes': [
                    'ConditionalExpression'
                ]
            }
        ],
        'jsx-quotes': 0,
        'key-spacing': 2,
        'keyword-spacing': 2,
        'line-comment-position': 0,
        'linebreak-style': [2, 'windows'],
        'lines-around-comment': [
            2, {
                'beforeBlockComment': true,
                'beforeLineComment': true
            }
        ],
        'lines-between-class-members': 0,
        'max-depth': 0,
        'max-len': 0,
        'max-lines': 0,
        'max-nested-callbacks': 0,
        'max-params': 0,
        'max-statements': 0,
        'max-statements-per-line': 0,
        'multiline-ternary': 0,
        'new-cap': 2,
        'new-parens': 0,
        'newline-per-chained-call': 0,
        'no-array-constructor': 2,
        'no-bitwise': 0,
        'no-continue': 0,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-mixed-operators': 0,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-assign': 0,
        'no-multiple-empty-lines': [2, {'max': 2}],
        'no-negated-condition': 0,
        'no-nested-ternary': 0,
        'no-new-object': 2,
        'no-plusplus': 0,
        'no-restricted-syntax': 0,
        'no-tabs': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 0,
        'no-whitespace-before-property': 2,
        'nonblock-statement-body-position': 0,
        'object-curly-newline': 0,
        'object-curly-spacing': [2, 'never'],
        'object-property-newline': 0,
        'one-var': 0,
        'one-var-declaration-per-line': 0,
        'operator-assignment': 0,
        'operator-linebreak': [2, 'after'],
        'padded-blocks': 0,
        'padding-line-between-statements': 0,
        'quote-props': [2, 'consistent'],
        'quotes': [2, 'single'],
        'require-jsdoc': 0,
        'semi': 2,
        'semi-spacing': 2,
        'semi-style': 0,
        'sort-keys': 0,
        'sort-vars': 0,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, {
            asyncArrow: 'always',
            anonymous: 'never',
            named: 'never'
        }],
        'space-in-parens': 0,
        'space-infix-ops': 2,
        'space-unary-ops': 0,
        'spaced-comment': [2, 'always'],
        'switch-colon-spacing': 2,
        'template-tag-spacing': 0,
        'unicode-bom': 0,
        'wrap-regex': 0,

        // ECMAScript 6
        // http://eslint.org/docs/rules/#ecmascript-6
        // ------------------------------------------
        'arrow-body-style': 0,
        'arrow-parens': [2, 'as-needed'],
        'arrow-spacing': 0,
        'constructor-super': 2,
        'generator-star-spacing': [2, 'after'],
        'no-class-assign': 0,
        'no-confusing-arrow': 0,
        'no-const-assign': 0,
        'no-dupe-class-members': 0,
        'no-duplicate-imports': 0,
        'no-new-symbol': 2,
        'no-restricted-imports': 0,
        'no-this-before-super': 2,
        'no-useless-computed-key': 0,
        'no-useless-constructor': 2,
        'no-useless-rename': 0,
        'no-var': 2,
        'object-shorthand': 2,
        'prefer-arrow-callback': 0,
        'prefer-const': [2, {destructuring: 'all'}],
        'prefer-destructuring': 0,
        'prefer-numeric-literals': 2,
        'prefer-rest-params': 2,
        'prefer-spread': 2,
        'prefer-template': 2,
        'require-yield': 2,
        'rest-spread-spacing': [2, 'never'],
        'sort-imports': 0,
        'symbol-description': 0,
        'template-curly-spacing': [2, 'never'],
        'yield-star-spacing': [2, 'after']
    }
};
