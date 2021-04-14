const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/commonProject', {
      target: 'http://47.93.31.98:8080',
      changeOrigin: true
      // ,pathRewrite: {
      //   '/commonProject': ''
      // }
    })
  );
};
