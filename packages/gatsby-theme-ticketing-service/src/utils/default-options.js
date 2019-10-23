module.exports = ({
    /* Key/Value Pairs as defaults, i.e. url = "https://some.cool.site/" */
    identityUrl = "http://localhost:8000",
    colors = {
        primary: "",
        secondary: "",
        tertiary: ""
    }
}) => ({ identityUrl, colors });