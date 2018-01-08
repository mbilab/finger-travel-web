const autoprefixer = require('autoprefixer')
const webpack = require('webpack')

module.exports = {
  devServer: {
    allowedHosts: ['merry.ee.nkcu.edu.tw', 'zoro.ee.ncku.edu.tw'],
    contentBase: false,
    host: '0.0.0.0',
    stats: { colors: true, modules: false },
  },
  entry: './app/app.js',
  module: {
    rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(eot|ico|jpg|png|svg|ttf|woff|woff2)($|\?)/, use: 'file-loader?name=[hash:5].[ext]' },
      { test: /\.sass$/,
        use: [
          'style-loader',
          'css-loader',
          { loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
          'sass-loader',
        ],
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: `${__dirname}/dist`,
  },
}

if ('production' === process.env.NODE_ENV) {
  module.exports.plugins = [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
    })
  ]
}
