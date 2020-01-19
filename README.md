ESLint config for my personal projects

[![Build Status](https://img.shields.io/travis/eslint-config-simon.svg?style=popout-square)](https://travis-ci.org/eslint-config-simon)![Current version](https://img.shields.io/github/tag/eslint-config-simon.svg?color=3498DB&label=version&style=flat-square)


This package contains several [eslint-config](https://eslint.org/docs/user-guide/configuring) files for my personal projects on [github](https://github.com/Simonwep).

#### Installation

> Via npm ...

```shell
npm install --save-dev eslint-config-simon
```

> ... or yarn

````
yarn add --dev eslint-config-simon
````


#### Available rules

| Name            | Where to use                                              | Extends              | Source            |
| ------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| `simon`        | Basic config, can be used in all JavaScript environments.   | `eslint:recommended` | [lib/base](lib/base.js) |
| `simon/lib/node` | Rules for [nodejs](https://nodejs.org/en/) projects. | `simon` | [lib/node](lib/node.js) |
| `simon/lib/jsx` | Rules for [react](https://reactjs.org/) / [preact](https://preactjs.com/) projects. | `simon` | [lib/react](lib/react.js) |

##### Example

> Your .eslintrc file

````json
{
    "extends": "simon"
}
````

