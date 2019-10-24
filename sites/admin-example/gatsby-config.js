module.exports = {
  siteMetadata: {
    title: "Get Ferry Tickets Admin"
  },
  plugins: [
    {
      resolve: `gatsby-theme-ticketing-service`,
      options: { identityUrl: "https://ticketing-admin-example.netlify.com/" }
    }
  ]
};
