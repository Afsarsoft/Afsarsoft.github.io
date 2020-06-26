const path = require('path');

module.exports = {
  mode: 'development', // will do less optimization for debug needs.
  entry: './src/app.ts', //root entry file of project
  output: {
    filename: 'bundle.js', // single bundle js file at the end
    path: path.resolve(__dirname, 'dist'),   //absolute path to output file
    publicPath: 'dist' // for the dev server, bundle.js run in memory.
  },
  devtool: 'inline-source-map', // use sourceMap
  // how to deal with TypeScript
  // module in the end is just a file
  // we are telling what do do with files it finds
  module: {
    rules: [
      {
        test: /\.ts$/, // only files with ts extension
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js']
  }
};