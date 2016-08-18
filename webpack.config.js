module.exports = function(webpackConfig) {
  webpackConfig.babel.plugins.push('antd');

  // must be loaded before other plugins
  webpackConfig.babel.plugins.unshift('./scripts/babelRelayPlugin');

  return webpackConfig;
};
