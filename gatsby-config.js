/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "The Hippie Girl",
    description: "The niche of my blog is Fashion,Beauty and Lifestyle.Im gonna start from the smallest group and make sure i cover everything possible from colour combinations to hairstyles and makeup.Fashion,Beauty, and Lifestyle, colour, combinations to hairstyles and makeup,Beautyblogger, Beautyblog, Beautiful, Beautyguru, Beautyqueen, Beautycare,Beautytips, Beautyandthebeast, Beautyproducts, BeautySalon,",
    siteUrl: `https://www.hippiegirl.in`,
  },

  plugins: [
    
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WHLGFWL",
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.hippiegirl.in`,
      },
    },
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/image`,
      },
    },
     `gatsby-plugin-sharp`,
     `gatsby-transformer-sharp`,
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
