const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/api', {
      target: 'http://xxx:8088',
      changeOrigin: true
      // ,pathRewrite: {
      //   '/api': '/api'
      // }
    })
  );
};
