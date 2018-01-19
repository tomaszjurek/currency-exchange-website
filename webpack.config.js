//Konfiguracja Webpack
module.exports = {
  entry: ["./js/app.js"],
  output: {
    filename: "./js/out.js"
  },
  devtool: "#eval-source-map",
  watch: true,
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','stage-2']
        }
      }
    ]
  },
  devServer: {
    contentBase: './',
    port: 3001,
    inline: true
  }
}
