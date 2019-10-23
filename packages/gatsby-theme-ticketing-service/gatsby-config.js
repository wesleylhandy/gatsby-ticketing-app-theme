const withDefaults = require('./src/utils/default-options');
module.exports = options => {
    const { identityUrl, colors: { primary, secondary, tertiary } } = withDefaults(options)
    return {
        siteMetadata: {
        },
        plugins: [{
            resolve: `gatsby-plugin-netlify-identity`,
            options: {
                url: identityUrl // required!
            }
        }],
    }
}
