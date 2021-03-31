var path = require('path');

module.exports = {
  mode: "production",
  entry: `./src/index.js`,
  output: {
    filename: 'index.js',
    path: path.resolve("build"),
    libraryTarget: "commonjs2",
  },
  module : {
    rules : [
      {
        test : /\.(js)$/,
        exclude : /node_modules/,
        use : ['babel-loader'],
      },
      {
        test : /\.css$/i,
        use : ['style-loader', 'css-loader'],
      },
    ],
  },
  externals: {
    react : "react",
  }
};
