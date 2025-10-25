const webpack5 = require('webpack');
const config = require('./webpack.config');

const compiler = webpack5(config);

compiler.run((err, stats) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(
        stats.toString({
            colors: true
        })
    )
})
