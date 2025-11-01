const rollup = require('rollup');

module.exports = {
    input: './src/main.js',
    output: {
        file:'es/bundle.js',
        filename: 'cjs'
    }
}