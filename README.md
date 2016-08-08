# stylelint-config-vast
> Stylelint shareable config for Vast's CSS coding standards

[![NPM version](https://badge.fury.io/js/stylelint-config-vast.svg)](https://www.npmjs.org/package/stylelint-config-vast)

## Installation

    npm install stylelint-config-vast --save-dev

## Usage

Create a file named `.stylelintrc` in your project:

```javascript
{
  "extends": "stylelint-config-vast",
  "rules": {
    // Your overrides:
    "indentation": "tab"
  },
  // Your settings:
  "ignoreFiles": "css/vendor/**/*.css",
}
```

### Setting up stylelint

If you haven’t already set up stylelint on your project, run:

    npm install stylelint --save-dev

Add "stylelint" to "scripts" in `package.json`:

```json
"scripts": {
    "stylelint": "stylelint css/**/*.css",
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

[MIT](LICENSE) © 2016 Vast.com, Inc.
