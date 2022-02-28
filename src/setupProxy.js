const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/commonProject', {
      target: 'http://xxxx:8080',
      changeOrigin: true
      // ,pathRewrite: {
      //   '/commonProject': ''
      // }
    })
  );
};
