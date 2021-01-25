// gatsby-config.js
module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Live CMS',
    description: 'Live CMS',
    author: 'Suleman Khan',
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // This type will contain remote schema Query type
        typeName: 'LiveCMS',
        // This is the field under which it's accessible
        fieldName: 'livecms',
        // URL to query from
        url: 'http://18.222.170.161:4000/',
      },
    },
  ],
};
