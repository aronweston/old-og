require('dotenv').config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    title: `Olive & Grain | Maroubra Delicatessen`,
    description: `Sydney delicatessen based in Maroubra offering all things cheeses, meats and a variety of European classics.`,
    author: `Aron Weston`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-optional-chaining`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-source-shopify',
      options: {
        shopName: process.env.GATSBY_SHOP_NAME,
        accessToken: process.env.GATSBY_ACCESS_TOKEN,
        apiVersion: '2020-07',
        downloadImages: true,
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET,
      },
    },
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
        name: `Olive & Grain Delicatessen Maroubra Sydney`,
        short_name: `Olive & Grain`,
        start_url: `/`,
        background_color: `#f5f5f5`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/assets/favicons/favicon-32x32.png`,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/Layout/index.js`),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
};
