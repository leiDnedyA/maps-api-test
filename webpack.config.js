const path = require('path');

module.exports = {
    entry: './src/main.js',
    mode: 'development',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'public'),
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                router: () => 'http://localhost:3000',
                logLevel: 'debug',
            }
        },
        compress: true,
        port: 8080,
        open: true,
    },
};