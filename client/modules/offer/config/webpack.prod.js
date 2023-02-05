const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;
const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: '/offer/latest/'
  },
  plugins: [
    new ModuleFederationPlugin({
      name: "offer",
      filename: "remoteEntry.js",
      remotes: {
        shared: `shared@${domain}shared/latest/remoteEntry.js`,
        product: `product@${domain}product/latest/remoteEntry.js`,
      },
      exposes: {
        "./Offers": "./src/components/LatestOffers",
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
