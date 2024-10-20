import path from 'path'

import Webpack from 'webpack'
import merge from 'webpack-merge'
import 'webpack-dev-server'

import CommonConfig from './webpack.common'

const DevConfig: Webpack.Configuration = merge(CommonConfig, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '../public')
    },
    compress: true,
    hot: true,
    port: 5000
  }
})

export default DevConfig
