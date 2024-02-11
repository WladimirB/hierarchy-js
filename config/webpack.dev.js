const { merge } = require('webpack-merge')

const common = require('./webpack.common')

const webpack = require("webpack");

module.exports = merge(common, {
  // Set the mode to development or production
  mode: 'development',

  // Control how source maps are generated
  devtool: 'inline-source-map',

  // Spin up a server for quick development
  devServer: {
    // historyApiFallback: true,
    // open: true,
    // compress: true,
    static: './dist',
    // hot: true,
    // port: 8080,
    // contentBase: path.join(__dirname, 'public'),
    watchFiles: ["./src/template.html"], 
    port: 9000,
    open:true,
    liveReload: true,
  },

  module: {
    rules: [
      {
        test: /\.html$/i,
        use: ["html-loader"],
      },
      {
        test: /\.(css)$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { sourceMap: true, importLoaders: 1, modules: false },
          },
        ],
      },
    ],
  },
  plugins: [
   // Plugin for hot module replacement
   new webpack.HotModuleReplacementPlugin(),
  ],
})
