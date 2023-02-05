const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: '/app_shell/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "app_shell",
      remotes: {
        auth: `auth@${domain}/auth/latest/remoteEntry.js`,
        cart: `cart@${domain}/cart/latest/remoteEntry.js`,
        offer: `offer@${domain}/offer/latest/remoteEntry.js`,
        product: `product@${domain}/product/latest/remoteEntry.js`,
        shared: `shared@${domain}/shared/latest/remoteEntry.js`,
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

module.exports = merge(commonConfig, prodConfig);
