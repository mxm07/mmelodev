const path = require('path')

module.exports = function override(config) {
 return {
    ...config, 
    resolve: {
      ...config.resolve,
      alias: {
        'App': path.resolve(__dirname, './src/app'),
        'Constants': path.resolve(__dirname, './src/constants'),
        'Components': path.resolve(__dirname, './src/components'),
        'Assets': path.resolve(__dirname, './src/assets')
      }
    }
  }
}
