# stylelint-config-vast
> Stylelint shareable config for Vast's CSS coding standards

[![NPM version](https://badge.fury.io/js/stylelint-config-vast.svg)](https://www.npmjs.org/package/stylelint-config-vast) [![Dependency Status](https://david-dm.org/vast-engineering/stylelint-config-vast.svg)](https://david-dm.org/vast-engineering/stylelint-config-vast) [![devDependency Status](https://david-dm.org/vast-engineering/stylelint-config-vast/dev-status.svg)](https://david-dm.org/vast-engineering/stylelint-config-vast?type=dev) [![devDependency Status](https://david-dm.org/vast-engineering/stylelint-config-vast/peer-status.svg)](https://david-dm.org/vast-engineering/stylelint-config-vast?type=peer)

## Installation

    npm install stylelint-config-vast --save-dev

## Usage

Create a `.stylelintrc` file in the root of your project and add your settings and overrides there:

```javascript
{
  "extends": "stylelint-config-vast",
  "rules": {
    "indentation": null
  },
  "ignoreFiles": "css/vendor/**/*.css",
}
```

### Setting up stylelint

If you haven’t already set up stylelint on your project, run:

    npm install stylelint --save-dev

Add "stylelint" to "scripts" in `package.json` (wrap globstar pattern with single quotes):

```json
"scripts": {
    "stylelint": "stylelint 'css/**/*.css'",
}
```

...and then you can run:

    npm run stylelint

To add a Git pre-commit hook for stylelint, run:

    npm install pre-commit --save-dev

...and add this to `package.json`:

```json
"pre-commit": [
  "stylelint"
]
```

**Tip**: For real time linting in your text editor, install one of the [stylelint editor plugins](http://stylelint.io/user-guide/complementary-tools/#editor-plugins).

**Tip**: [stylefmt](https://github.com/morishitter/stylefmt) can read `.stylelintrc` configuration files and automatically format the code and fix most styling errors. It can be used in many ways, but probably the easiest way is to install the `stylefmt` editor plugin.

## License

[MIT](LICENSE) © 2016 Vast.com, Inc.
