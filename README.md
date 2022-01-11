# stylelint-config-vast
> Stylelint shareable config for Vast's CSS coding standards

[![npm version](https://badge.fury.io/js/stylelint-config-vast.svg)](https://www.npmjs.org/package/stylelint-config-vast)

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

## License

[MIT](LICENSE) © 2022 Vast.com, Inc.
