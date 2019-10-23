require('dotenv').config({
    path: `./.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {},
    plugins: [{
        resolve: 'gatsby-source-graphql',
        options: {
            typeName: 'GitHub',
            fieldName: 'github',
            url: 'https://api.github.com/graphql',
            headers: {
                Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
            },
        }
    }]
}
