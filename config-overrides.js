/* config-overrides.js */

const rewireTypescript = require('react-app-rewire-typescript');
const workboxPlugin = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  webpack: function (config, env) {
    config = rewireTypescript(config, env);
    if (env === 'production') {
      const workboxConfigProd = {
        swSrc: path.join(__dirname, 'public', 'cus-service-worker.js'),
        swDest: 'cus-service-worker.js',
        importWorkboxFrom: 'disabled'
      }
      config = removePreWorkboxWebpackPluginConfig(config)
      config.plugins.push(new workboxPlugin.InjectManifest(workboxConfigProd))
    }
    return config
  }
}

function removePreWorkboxWebpackPluginConfig (config) {
  const preWorkboxPluginIndex = config.plugins.findIndex((element) => {
    return Object.getPrototypeOf(element).constructor.name === 'GenerateSW'
  })
  if (preWorkboxPluginIndex !== -1) {
    config.plugins.splice(preWorkboxPluginIndex, 1)
  }
  return config
}
