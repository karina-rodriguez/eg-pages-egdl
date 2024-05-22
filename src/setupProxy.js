const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
app.use(
    // '/',
    // createProxyMiddleware({
    //   target: 'https://diglib.eg.org/rest',
    //   changeOrigin: true,
    // })
    createProxyMiddleware('/proxypath', { target: '<target path>' })
  );
};

