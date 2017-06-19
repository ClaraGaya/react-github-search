const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'assets/js/bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    contentBase: path.join(__dirname, 'public'),
    publicPath: '/',
    port: 9090
  }
};