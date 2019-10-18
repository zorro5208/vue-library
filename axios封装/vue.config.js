module.exports = {
    baseUrl: './',
    outputDir: 'dist',
    devServer: {
        proxy: {
            '/api': {
                target: 'https://www.apiopen.top', //要跨域的url
                changeOrigin: true, //是否跨域
                ws: true,
                pathRewrite: {
                  '^/api': ''
                }
            }
        }
    }
}