import autoprefixer from 'autoprefixer'
import webpack from 'webpack'

const config = {
  context: `${__dirname}/app`,
  devServer: {
    // contentBase: false,
    // allowedHosts: ['luffy.ee.ncku.edu.tw', 'merry.ee.nkcu.edu.tw'],
    disableHostCheck: true,
    host: '0.0.0.0',
    inline: true,
  },
  entry: './app.js',
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          { loader: 'file-loader', options: { name: '[name].html' } },
          { loader: 'extract-loader' },
          { loader: 'html-loader' },
          { loader: 'pug-html-loader' },
        ],
      },
      {
        test: /\.sass$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader', options: { plugins: [autoprefixer] } },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(eot|ico|jpg|mp3|svg|ttf|woff2|woff|png?)($|\?)/,
        use: 'file-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  output: {
    filename: '[name].js',
    path: `${__dirname}/dist`,
  },
}

export default config
