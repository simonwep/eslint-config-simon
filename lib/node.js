module.exports = {
    extends: './base',

    env: {
        'node': true
    },

    rules: {
        'callback-return': 'error',
        'handle-callback-err': 'error',
        'no-process-exit': 'warn',
        'no-buffer-constructor': 'error',
        'no-mixed-requires': 'warn',
        'no-new-require': 'warn'
    }
};
