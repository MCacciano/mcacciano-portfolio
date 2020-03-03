module.exports = {
  siteMetadata: {
    title: `Michael Cacciano`,
    description: `${this.title} | Web Developer & Foodie`,
    author: `${this.title}`,
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
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Roboto',
            variants: ['100', '300', '400', '700', '900'],
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'fnhl40k6',
        dataset: 'production',

        // a token with read permissions is required
        // if you have a private dataset
        token:
          'skHHgiHxdaWM3h9ANEkGGfC4zyAEfgXNz40Ks3KkOQow4qJHPQNFoyuxwJquufLrqn9DrsAVbRJfSkI9r7hMBTWl1wmaGIRH88vuTsyAIvPycBBVzjFldcKp6oNPazYJVpTI6ps1fMtNlFnlNhLUiaxsUQD9VsbHpLJSIwO0m6lgHO8xZg31',

        // If the Sanity GraphQL API was deployed using `--tag <name>`,
        // use `graphqlTag` to specify the tag name. Defaults to `default`.
        graphqlTag: 'default',
        watchMode: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
