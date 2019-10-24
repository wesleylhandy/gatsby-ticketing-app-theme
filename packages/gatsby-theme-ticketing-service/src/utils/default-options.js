module.exports = ({
  /* Key/Value Pairs as defaults, i.e. url = "https://some.cool.site/" */
  identityUrl,
  colors = {
    primary: {
      light: "",
      dark: ""
    },
    secondary: {
      light: "",
      dark: ""
    },
    tertiary: {
      light: "",
      dark: ""
    }
  }
}) => ({ identityUrl, colors });
