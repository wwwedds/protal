const path = require('path')

const IS_PRODUCTION = process.env.NODE_ENV === 'production' // 正式环境
const IS_RELEASE = process.env.NODE_ENV === 'release'

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  // 输出文件目录
  outputDir: IS_RELEASE ? 'release' : 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的目录(相对于outputDir目录)。
  assetsDir: 'assets',
  // eslint-loader 是否在保存的时候检查
  lintOnSave: process.env.NODE_ENV !== 'production',
  productionSourceMap: false,
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('api', resolve('src/api'))
      .set('lib', resolve('src/lib'))
      .set('views', resolve('src/views'))
  },
  devServer: {
    open: true,
    host: '127.0.0.1',
    allowedHosts: [],
    port: 8080,
    https: false,
    hotOnly: false

    // 配置多个代理
    // proxy: {
    //   '/': {
    //     target: 'http://10.170.135.191', // 本地模拟数据服务器
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^/': '' // 去掉接口地址中的api字符串
    //     }
    //   }
    // }
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
        ]
      }
    }
  }
}
