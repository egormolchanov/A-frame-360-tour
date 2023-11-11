const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const path = require('path')

module.exports = (_, options) => {
  return {
    mode: options.mode,
    entry: './src/main.js',
    output: {
      filename: 'js/app.[contenthash].js',
      chunkFilename: 'js/chunk.[contenthash].js',
      path: path.resolve(__dirname, 'build')
    },
    devtool: options.mode == 'development' ? 'inline-source-map' : false,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react']
            }
          }
        }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: __dirname + '/src/index.html',
        inject: 'head'
      })
    ],
    devServer: {
      contentBase: './public',
      host: '0.0.0.0',
      port: 5000,
      stats: 'errors-only',
      noInfo: true,
      watchContentBase: true,
      overlay: true,
      after(_, server) {
        console.clear()
        console.log(`start http://localhost:${server.options.port}`)
      }
    }
  }
}
