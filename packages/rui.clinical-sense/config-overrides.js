const glob = require("glob");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const PurgecssPlugin = require("purgecss-webpack-plugin");

module.exports = function override(config, env) {
  if (env === "production") {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "server",
        statsOptions: {source: false},
        generateStatsFile: true,
      }),
      new MiniCssExtractPlugin({
        filename: "[name].[chunkhash].css",
      }),
      new PurgecssPlugin({
        paths: glob.sync("src/**/*", {nodir: true}),
        // whitelist is needed to keep body and html tag styles which are not part of the src path
        whitelist: ["body", "html"],
        // only is needed to keep dependencies styles which are not part of the src path
        only: ["bundle", "vendor"],
      }),
    );
  }
  return config;
};
