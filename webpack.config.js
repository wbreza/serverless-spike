const path = require('path');
const slsw = require('serverless-webpack');

console.log(slsw.lib.entries);

module.exports = {
  mode: 'development',
  entry: slsw.lib.entries,
  target: 'node',
  output: {
    path: path.resolve(__dirname, '.webpack'),
    filename: '[name].js'
  }
};