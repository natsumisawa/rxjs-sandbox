module.exports = {
  entry: ['./src/observable-sandbox.ts', ['./test/observable-sandbox-spec.ts'],
  output: {
      filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'awesome-typescript-loader'
      }
    ]
  }
};
