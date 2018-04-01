/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.modifyWebpackConfig = ({ config, env }) => {
  config.merge({
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'src/assets/images'),
      }
    }
  });

  return config;
}
