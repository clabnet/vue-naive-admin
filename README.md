<p align="center">
  <a href="https://github.com/zclzone/vue-naive-admin">
    <img alt="Vue Naive Admin Logo" width="200" src="https://assets.qszone.com/images/logo_qs.svg">
  </a>
</p>
<p align="center">
  <a href="https://github.com/zclzone/vue-naive-admin"><img allt="stars" src="https://badgen.net/github/stars/zclzone/vue-naive-admin"/></a>
  <a href="https://github.com/zclzone/vue-naive-admin"><img allt="forks" src="https://badgen.net/github/forks/zclzone/vue-naive-admin"/></a>
  <a href="./LICENSE"><img allt="MIT License" src="https://badgen.net/github/license/zclzone/vue-naive-admin"/></a>
</p>

<p align='center'>
  <b>英文</b> | 
  <a href="https://github.com/zclzone/vue-naive-admin/blob/main/README.md">中文</a>
</p>

### Introduction

[Vue Naive Admin](https://github.com/zclzone/vue-naive-admin) is a **completely open source free and commercially allowed ** admin template，Based on the latest technology stack of front-end such as `Vue3、Vite3、Pinia、Unocss and Naive UI`. Compared with other more popular backend management templates, this project is more concise, lightweight, fresh style, very low learning costs, ideal for small and medium-sized projects or personal projects.

### Features

- 🍒 Integrated [Naive UI](https://www.naiveui.com)，recommended by Evan You.
- 🍑 Integrated login, logout and permission verification.
- 🍐 Integrated multi-environment configuration, dev, test, production and github pages environments.
- 🍎 Integrated `eslint + prettier`.
- 🍌 Integrated `husky + commitlint`.
- 🍉 Integrated `Mock`.
- 🍍 Integrated `pinia`，lightweight, simple and easy to use alternative to vuex.
- 📦 Integrated `unplugin` auto import.
- 🤹 Integrated `iconify` icon，support custom svg icons.
- 🍇 Integrated `unocss`.

### Preview

[https://template.qszone.com](https://template.qszone.com)

[https://vercel.template.qszone.com](https://vercel.template.qszone.com)

### Docs

[Vue Naive Admin Docs](https://zclzone.github.io/vue-naive-admin-docs)

### Getting Started

```shell
# Recommended setup git autocrlf 为 false
git config --global core.autocrlf false

# Clone Project
git clone https://github.com/zclzone/vue-naive-admin.git

cd vue-naive-admin

# Install dependencies(Recommended use pnpm: https://pnpm.io/zh/installation)
npm i -g pnpm # Installed and can be ignored
pnpm i # or npm i

# Start
pnpm dev
```

### Build and Release

```shell
# Test Environment
pnpm build:test

# Github Environment
pnpm build:github

# Prod Environment
pnpm build
```

### Other

```shell
# eslint check
pnpm lint

# eslint check and fix
pnpm lint:fix

# Preview（Need to build first）
pnpm preview

# Commit（husky+commitlint）
pnpm cz
```

### Directory description

```
Vue Naive Admin
|-- .github                             // github-related, such as automatically deploying gh pages
|-- .husky                              // git commit hook
|-- .vscode                             // vscode editor related
|   |-- extensions.json                 // Plug-in recommendation
|   |-- settings.json                   // Project-level vscode configuration Priority greater global
|-- build                               // Build related configuration
|   |-- constant.js                     // Build related constants
|   |-- utils.js                        // Build related tools and methods
|   |-- config
|   |   |-- define.js                   // Inject global constants after startup or packaging.
|   |   |-- proxy.js                    // proxy configuration
|   |-- plugin
|   |   |-- html.js                     // vite-plugin-html: inject variables or HTML tags.
|   |   |-- mock.js                     // The vite-plugin-mock plugin handles mocking
|   |   |-- unplugin.js                 // Unplugin: DefineOptions and automatic import.
|   |-- script                          // Post-packaging node scripts (not crucial).
|       |-- build-cname.js              // Automatically generate cname
|-- mock                                // mock
|   |-- utils.js                        // The tools and methods needed for the mock request
|   |-- api                             // mock interface
|-- public                              // Public resources added to dist root directory post-packaging.
|-- settings                            // project configuration
|   |-- proxy-config.js                 // proxy configuration file
|   |-- theme.json                      // Theme configuration items, theme colors, etc.
|-- src
|   |-- api                             // public api
|   |-- assets                          // static resources
|   |   |-- images                      // image
|   |   |-- svg                         // svg icon
|   |-- components                      // global component
|   |   |-- common                      // public components
|   |   |-- icon                        // icon related components
|   |   |-- page                        // page components
|   |   |-- query-bar                   // query options
|   |   |-- table                       // Wrapped Form Component
|   |-- composables                     // Encapsulated Composite Functions
|   |-- layout                          // Layout related components
|   |   |-- components
|   |       |-- AppMain.vue             // Main content
|   |       |-- header                  // head
|   |       |-- sidebar                 // side menu bar
|   |       |-- tags                    // multi-tab bar
|   |-- router                          // routing
|   |   |-- guard                       // route guard
|   |   |-- routes                      // routing list
|   |-- store                           // state management (pinia)
|   |   |-- modules                     // module
|   |       |-- app                     // Manage page reloads, menu bars, and keepAlive.
|   |       |-- permission              // Permissions related, manage permissions menu
|   |       |-- tags                    // Manage multiple tabs
|   |       |-- user                    // User module, manage user information, login and logout
|   |-- styles                          // style
|   |-- utils                           // Packaged Tool Methods
|   |   |-- auth                        // Permission related, such as token, jumping to login page, etc.
|   |   |-- common                      // in common use
|   |   |-- http                        // Package axios
|   |   |-- storage                     // Encapsulate localStorage and sessionStorage
|   |-- views                           // page
|   |   |-- demo                        // example
|   |   |-- error-page                  // error page
|   |   |-- login                       // login page
|   |   |-- workbench                   // front page
|   |-- App.vue
|   |-- main.js
|-- .cz-config.js                       // git commit configuration
|-- .editorconfig                       // editor configuration
|-- .env                                // environment file, all environments will be loaded
|-- .env.development                    // Development environment files
|-- .env.production                     // Production environment files
|-- .env.test                           // test environment file
|-- .eslintignore                       // eslint-ignore
|-- .eslintrc.js                        // eslint configuration
|-- .gitignore                          // git ignore
|-- .prettierignore                     // prettier formatting ignored
|-- commitlint.config.js                // commitlint specification configuration
|-- index.html
|-- jsconfig.json                       // js configuration
|-- LICENSE                             // agreement
|-- package.json                        // Dependency description file
|-- pnpm-lock.yaml                      // Depends on the lock file
|-- prettier.config.js                  // Prettier formatting configuration
|-- README.md                           // Project description document (English)
|-- unocss.config.js                    // unocss configuration
|-- vite.config.js                      // vite configuration
```

### TS version: Qs Admin

#### source code

- gitub: [https://github.com/zclzone/qs-admin](https://github.com/zclzone/qs-admin)
- gitee: [https://gitee.com/zclzone/qs-admin-ts](https://gitee.com/zclzone/qs-admin-ts)

#### preview

- [https://admin.qszone.com](https://admin.qszone.com)
- [https://zclzone.github.io/qs-admin](https://zclzone.github.io/qs-admin)

### Communication group & About the author

<a href="https://blog.qszone.com/about/">
  <img src="https://assets.qszone.com/images/about.png" style="max-width: 400px" />
</a>
