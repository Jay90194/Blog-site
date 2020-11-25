/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "The Hippie Girl",
    description: "The niche of my blog is Fashion,Beauty, and Lifestyle, colour, combinations to hairstyles and makeup.Beautyblogger, Beautyblog, Beautiful, Beautyguru, Beautyqueen, Beautycare, Beautyaddict, Beautytips, Beautyandthebeast, Beautyproducts, BeautySalon, Beautybloggers, Beautyjunkie, Beautygram, Beautyofnature, Beautylover, Beautygirl, Beautymakeup, Beautyphotography, Beautylaunchpad, Beautyvlogger, Beautycommunity, Beautyfull, Beautyblender, Beautyproduct, Beautys, Beautyshoot, Beautyskin, Beautybox, Beautyhair Makeup, Blog, Beauty, Earned, Beautiful, Link, Latest, Saturday, Favorite, Festival, Face, Fave, Post, Hair, Palette, Enter, Natural, Follow, Review, Skin, Video, Sping, Winning, Rounded, Set, Guys, Matte, Head, Free, Product, Products, YouTube, Chanel, Worth beauty blogger acne, beauty vlogger Zoella, beauty vlogger with acne, beauty vlogger setup, beauty vlogger room tour, beauty vlogger oily skin,beauty vlogger natural, beauty vlogger music, beauty vlogger equipment, "


  },

  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "G-QM1H0BKHM4",
        head: true,
        anonymize: true,
        respectDNT: true,
        pageTransitionDelay: 0,
      },
      
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-WHLGFWL",
      },
    },
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
