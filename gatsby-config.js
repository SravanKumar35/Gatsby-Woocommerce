module.exports = {
  siteMetadata: {
    title: `Gatsby WooCommerce Rest API`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@pasdo501/gatsby-source-woocommerce',
    options: {
      api: 'cumulations.local',
      verbose: true,   
      https: false,
      api_keys: {
        consumer_key: `ck_0b79b24dbead40f181db61b9b0798b1b5601c8d7`,
        consumer_secret: `cs_d858d2aa6f65a42b775b50b9496c7a789b8a1494`,
      },
      fields: ['products', 'products/categories', 'products/attributes'],
    },
  },
  ],
}
