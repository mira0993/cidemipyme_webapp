module.exports = {
  siteMetadata: {
    title: 'CIDEMiPyMe',
    slogan: 'Hacemos Negocio su Negocio',
    fbcide: 'https://www.facebook.com/cidemipyme',
    fbcce: 'https://www.facebook.com/circulodecrecimiento',
    fbcidetalento: 'https://www.facebook.com/cidetalento'
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
