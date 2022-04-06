const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const { merge } = require("webpack-merge");
const common = require("./webpack.common");
const path = require("path");

/** @type { import('webpack').Configuration } */
module.exports = merge(common, {
  mode: "development",
  devtool: "eval-source-map",
  devServer: {
    hot: true,
    port: 4000,
    static: path.resolve(__dirname, "..", "dist"),
  },
  plugins: [new ReactRefreshWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.(css|scss)$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
});
