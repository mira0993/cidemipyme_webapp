module.exports = {
  siteMetadata: {
    title: 'CIDEMiPyMe',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-react-helmet'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src-data',
        path: './src/data/',
      },
    },
    {
      resolve: 'gatsby-transformer-json'
    }
  ]
};
