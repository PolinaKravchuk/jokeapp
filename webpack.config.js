const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
module.exports = {
  mode: "development",
  entry: {
    bundle: path.resolve(__dirname, "src/index.js"), // source file to build
  },
  output: {
    path: path.resolve(__dirname, "dist"), // target folder for build
    filename: "[name][contenthash].js", // use hash for each diff
    clean: true, // keep one js file with hash
    assetModuleFilename: "[name][ext]", // for images
  },
  // devtool: "source-map", // for debugging
  devServer: {
    static: {
      directory: path.resolve(__dirname, "dist"),
    },
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"], // compile scss file (w/o sass-loader, not all will be compiled)
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"], // to use cutting-edge js features
          },
        },
      },
      {
        test: /\.(png|svg|jpg)$/i, // to process (understand) images
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Caching-Webpack app",
      filename: "index.html",
      template: "src/template.html", // use template for html file
    }),
    // new BundleAnalyzerPlugin(), // check analyzer of the app
  ],
};
