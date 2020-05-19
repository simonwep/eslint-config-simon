const assert = require('assert');
const {ESLint} = require('eslint');
const conf = require('../');

// Extend env rule
conf.env.node = true;

// Run linter on repo files
new ESLint().lintFiles([
    'lib/base.js',
    'lib/node.js',
    'test/test.js'
]).then(res => {
    for (const report of res) {

        // Assert no errors and warnings were found.
        assert.strictEqual(report.errorCount, 0);
        assert.strictEqual(report.warningCount, 0);
    }
});

