/* config-overrides.js */

const rewireTypescript = require('react-app-rewire-typescript');

module.exports = function override(config, env) {
    // ...
    config = rewireTypescript(config, env);
    // ...
    return config;
}