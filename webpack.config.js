var path = require('path');
var config = require('config');

module.exports = {
  entry: './client/entry.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [],
  module: {
    loaders: [
      {
        test: /\.js$/, // Telling webpack to use files that match this pattern
        loader: 'babel', // Uses the module `babel-loader`
        exclude: /node_modules/, // Don't transpile modules in the `node_modules/` directory
        include: __dirname, // Include all other files
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
    proxy: {
      '**': `http://localhost:${config.get('port')}`
    }
  }
};
