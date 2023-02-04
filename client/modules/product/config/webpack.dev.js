const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const port = 8004;

const devConfig = {
  mode: "development",
  output: {
    publicPath: `http://localhost:${port}/`,
  },
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
  devtool: "inline-source-map",
  devServer: {
    port,
    historyApiFallback: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "product",
      filename: "remoteEntry.js",
      exposes: {
        "./Routes": "./src/components/Routes",
        "./SearchAutoComplete": "./src/components/SearchAutoComplete",
      },
      remotes: {
        shared: "shared@http://localhost:8005/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
  ],
};

module.exports = merge(commonConfig, devConfig);
