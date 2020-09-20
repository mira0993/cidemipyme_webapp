/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'src/assets/images'),
        components: path.resolve(__dirname, 'src/components'),
        sections: path.resolve(__dirname, 'src/components/sections'),
        fonts: path.resolve(__dirname, 'src/assets/fonts'),
        css: path.resolve(__dirname, 'src/assets/css'),
        js: path.resolve(__dirname, 'src/assets/js'),
      }
    },
    externals: {
      jquery: 'jQuery', // important: 'Q' capitalized
    }
  })
}