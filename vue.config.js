const webpack = require('webpack')

module.exports = {
  publicPath: '',
  devServer: {
    overlay: {
      warnings: false,
      errors: false
    }
  },
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/)
    ]
  },
  chainWebpack: config => {
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')
    config
    .plugin('webpack-bundle-analyzer')
    .use(require('webpack-bundle-analyzer').BundleAnalyzerPlugin)
  }
}
