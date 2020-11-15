/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "The Hippie Girl",
    description: "This will have description for better SEO This will have description for better SEO This will have description for better SEO This will have description for better SEO This will have description for better SEO This will have description for better SEO "


  },

  plugins: [
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
     `gatsby-transformer-remark`,
     {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `ufrsdgwfte31`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `eXvKiUHZN1e3TfuXYy01W9AGCphezXzoRDtcpDczFc0`,
      },
    },
  ],
}
