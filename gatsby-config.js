/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "The Hippie Girl",
    description: "The niche of my blog is Fashion,Beauty and Lifestyle.Im gonna start from the smallest group and make sure i cover everything possible from colour combinations to hairstyles and makeup.",
    siteUrl: `https://www.hippiegirl.in`,
    keywords: 'Fashion,Beauty, and Lifestyle, colour, combinations to hairstyles and makeup,Beautyblogger, Beautyblog, Beautiful, Beautyguru, Beautyqueen, Beautycare, Beautyaddict, Beautytips, Beautyandthebeast, Beautyproducts, BeautySalon, Beautybloggers, Beautylover, Beautygirl, Beautymakeup, Beautyphotography,  Beautyvlogger, Beautycommunity, Beautyfull,  Beautyproduct, Beauty, Beautyshoot, Beautyskin, Beautyhair Makeup, Blog, Beauty,  Beautiful, Link, Latest, Favorite, Festival, Face, Post, Hair, Natural,  Review, Skin, Video, Sping, Winning, Rounded, Set, Guys, Matte, Head, Free, Product, Products, YouTube, Chanel, Worth beauty blogger acne, beauty vlogger , beauty vlogger with acne, beauty vlogger setup, beauty vlogger room tour, beauty vlogger oily skin,beauty vlogger natural, beauty vlogger music, beauty vlogger equipment,'
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
