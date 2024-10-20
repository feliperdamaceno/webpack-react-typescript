import path from 'path'
import Webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import DotenvWebpackPlugin from 'dotenv-webpack'
import CopyWebpackPlugin from 'copy-webpack-plugin'

const Config: Webpack.Configuration = {
  entry: path.resolve(__dirname, '../src/main.tsx'),
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, '../build'),
    clean: true
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src')
    }
  },
  module: {
    rules: [
      {
        test: /\.(tsx|ts|jsx|js)$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
      {
        test: /\.(png|jpg|jpeg|gif|ico)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[contenthash][ext]'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[contenthash][ext]'
        }
      },
      {
        test: /\.svg$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 8192 /* inline smaller than 8kb  */
          }
        },
        generator: {
          filename: 'images/[name].[contenthash][ext]'
        }
      }
    ]
  },
  plugins: [
    new DotenvWebpackPlugin({
      path: path.resolve(__dirname, '../.env'),
      safe: true
    }),
    new Webpack.ProvidePlugin({
      React: 'react'
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../build'),
          globOptions: {
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}

export default Config
