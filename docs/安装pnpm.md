## install pnpm

### Install using Corepack (recommended)

Starting with v16.13, Node.js released Corepack to manage the package manager. This is an experimental feature and needs to be enabled by running the following script:

```
npx corepack enable // may require admin privileges
```

This will automatically install pnpm on your system. However, it may not be the latest version of pnpm. To upgrade, please check[latest pnpm version](https://github.com/pnpm/pnpm/releases/latest) and run, like 7.14.0

```
corepack prepare pnpm@7.14.0 --activate
```

If it is Node.js v16.17 or later, you can directly install the latest version of pnpm

```
corepack prepare pnpm@latest --activate
```

### Install using npm

```
npm i -g pnpm
```

update, uninstall and reinstall

```
npm uninstall -g pnpm
npm i -g pnpm
```
