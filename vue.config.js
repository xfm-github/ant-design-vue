// vue.config.js

const devUrl = '172.20.1.48:8080'
// const devUrl = '172.20.0.16:8080'
module.exports = {
  // 开发服务端配置
  devServer: {
    // 显示错误到控制台
    clientLogLevel: 'warning',
    // 配置开发环境端口
    port: 5001,
    // 开发环境代理配置
    proxy: {
      '/dev': {
        target: `http://${devUrl}/`,
        changeOrigin: true,
        headers: {},
        onError (err, req, res) {
          console.log(err, req, res)
        },
        pathRewrite: {
          '^/dev': ''
        }
      }
    }
  }
}
