const withDefaults = require("./src/utils/default-options");
module.exports = options => {
  const {
    identityUrl,
    colors: { primary, secondary, tertiary }
  } = withDefaults(options);
  return {
    siteMetadata: {
      themeColors: {
        primary,
        secondary,
        tertiary
      }
    },
    plugins: [
      {
        resolve: `gatsby-theme-netlify-identity`,
        options: {
          url: identityUrl
        }
      }
    ]
  };
};
