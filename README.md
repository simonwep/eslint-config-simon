<h3 align="center">
    ESLint config for my personal projects
</h3>

<p align="center">
  <a href="https://travis-ci.org/Simonwep/eslint-config-simon"><img
     alt="Build Status"
     src="https://img.shields.io/travis/Simonwep/eslint-config-simon.svg?style=popout-square"></a>
  <img alt="Current version"
     src="https://img.shields.io/github/tag/Simonwep/eslint-config-simon.svg?color=3498DB&label=version&style=flat-square">
</p>




This package contains several [eslint-config](https://eslint.org/docs/user-guide/configuring) files for my personal projects on [github](https://github.com/Simonwep).

## Installation

Install via npm:

```shell
npm install --save-dev eslint-config-simon
```

Install via yarn:

````
yarn add --dev eslint-config-simon
````

> As of `2.x` all ESLint rules are now implemented to simplify maintenance.

## Available rules

| Name            | Where to use                                              | Extends              | Source            |
| ------------------------- | --------------------------------------------------------- | --------------------------------------------------------- | --------------------- |
| `simon`        | Basic config, can be used in all JavaScript environments.   | - | [lib/base](lib/base.js) |
| `simon/lib/node` | Rules for [nodejs](https://nodejs.org/en/) projects. | `simon` | [lib/node](lib/node.js) |
| `simon/lib/react` | Rules for [react](https://reactjs.org/) / [preact](https://preactjs.com/) projects. | `simon` | [lib/react](lib/react.js) |

### Example

> Your .eslintrc file, you probably want to extend eslint:recommended too:

````json
{
    "extends": [
        "eslint:recommended",
        "simon"
    ]
}
````

