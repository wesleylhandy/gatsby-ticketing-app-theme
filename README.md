<p align="center">
  <a href="https://www.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Theme Workspace for `gatsby-theme-ticketing-service`
</h1>

```shell
gatsby new my-ticketing-service https://github.com/wesleylhandy/gatsby-ticketing-app-theme
cd my-ticketing-service
yarn workspace example develop
```

## Layout

```shell
.
├── README.md
├── packages
│   ├── gatsby-theme-ticketing-service
│   │   ├── README.md
│   │   ├── gatsby-browser.js
│   │   ├── gatsby-config.js
│   │   ├── gatsby-node.js
│   │   ├── gatsby-ssr.js
│   │   ├── index.js
│   │   └── package.json
│   ├── gatsby-theme-ticketing-service-admin
│   │   ├── README.md
│   │   ├── gatsby-browser.js
│   │   ├── gatsby-config.js
│   │   ├── gatsby-node.js
│   │   ├── gatsby-ssr.js
│   │   ├── index.js
│   │   └── package.json
│   └── gatsby-theme-ticketing-service-attendant
│       ├── README.md
│       ├── gatsby-browser.js
│       ├── gatsby-config.js
│       ├── gatsby-node.js
│       ├── gatsby-ssr.js
│       ├── index.js
│       └── package.json
├── sites
│   ├── admin-example
│   │   ├── README.md
│   │   ├── gatsby-config.js
│   │   ├── package.json
│   │   └── src
│   ├── attendant-example
│   │   ├── README.md
│   │   ├── gatsby-config.js
│   │   ├── package.json
│   │   └── src
│   └── customer-example
│       ├── README.md
│       ├── gatsby-config.js
│       ├── package.json
│       └── src
├── LICENSE
├── .gitignore
├── package.json
└── yarn.lock

8 directories, 38 files
```

### `gatsby-theme-ticketing-service`

This directory is the theme package itself. 

- `gatsby-theme-ticketing-service/`
  - `gatsby-config.js`: An empty gatsby-config that you can use as a starting point for building functionality into your theme.
  - `index.js`: Since themes also function as plugins, this is an empty file that
    gatsby needs to use this theme as a plugin.
  - `package.json`: The dependencies that your theme will pull in when people install it. `gatsby` should be a `peerDependency`.

### `example`

This is an example usage of your theme. It should look the same as the
site of someone who installed and used your theme from npm.

- `example/`
  - `gatsby-config.js`: Specifies which theme to use and any other one-off config a site might need.
  - `src/`: Source code such as one-off pages or components that might live in
    a user's site.

You can run the example with:

```shell
yarn workspace example develop
```
