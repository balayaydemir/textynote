module.exports = {
  /**
   * This is the main entry point for your application, it's the first file
   * that runs in the main process.
   */
  entry: './src/main.js',
  // Put your normal webpack config below here
  resolve: {
    fallback: {
      "crypto": require.resolve('crypto-browserify'),
      "stream": require.resolve("stream-browserify"),
      // "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify 
    } 
  },
  module: {
    rules: require('./webpack.rules'),
  },
};
