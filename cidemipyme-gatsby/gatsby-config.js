module.exports = {
  siteMetadata: {
    title: 'CIDEMIPYME',
    slogan: 'Hacemos Negocio Tu Negocio',
    fbcide: 'https://www.facebook.com/cidemipyme',
    fbcce: 'https://www.facebook.com/circulodecrecimiento',
    fbcidetalento: 'https://www.facebook.com/cidetalento',
    linkedin: 'https://www.linkedin.com/company/cidemipyme/'
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
