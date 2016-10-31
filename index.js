'use strict';

module.exports = {
    rules: {
        'at-rule-empty-line-before': ['always', {
            except: ['blockless-group', 'first-nested'],
            ignore: ['after-comment']
        }],
        'at-rule-name-case': 'lower',
        'at-rule-no-unknown': [true, {
            ignoreAtRules: ['mixin', 'define-mixin'] // for PostCSS
        }],
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',
        'block-closing-brace-newline-after': 'always',
        'block-closing-brace-newline-before': 'always-multi-line',
        'block-closing-brace-space-before': 'always-single-line',
        'block-no-empty': true,
        'block-opening-brace-newline-after': 'always-multi-line',
        'block-opening-brace-space-after': 'always-single-line',
        'block-opening-brace-space-before': 'always',
        'color-hex-case': 'lower',
        'color-no-invalid-hex': true,
        'comment-whitespace-inside': 'always',
        'declaration-bang-space-after': 'never',
        'declaration-bang-space-before': 'always',
        'declaration-block-no-duplicate-properties': true,
        'declaration-block-no-ignored-properties': true,
        'declaration-block-no-shorthand-property-overrides': true,
        'declaration-block-semicolon-newline-after': 'always-multi-line',
        'declaration-block-semicolon-space-after': 'always-single-line',
        'declaration-block-semicolon-space-before': 'never',
        'declaration-block-single-line-max-declarations': 1,
        'declaration-block-trailing-semicolon': 'always',
        'declaration-colon-newline-after': 'always-multi-line',
        'declaration-colon-space-after': 'always-single-line',
        'declaration-colon-space-before': 'never',
        'declaration-empty-line-before': ['never', {
            ignore: ['after-comment']
        }],
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-name-case': 'lower',
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-quotes': 'always',
        'function-whitespace-after': 'always',
        indentation: 4,
        'keyframe-declaration-no-important': true,
        'length-zero-no-unit': true,
        'max-empty-lines': 1,
        'media-feature-colon-space-after': 'always',
        'media-feature-colon-space-before': 'never',
        'media-feature-name-no-vendor-prefix': true,
        'media-feature-no-missing-punctuation': true,
        'media-feature-parentheses-space-inside': 'never',
        'media-feature-range-operator-space-after': 'always',
        'media-feature-range-operator-space-before': 'always',
        'media-query-list-comma-newline-after': 'always-multi-line',
        'media-query-list-comma-space-after': 'always-single-line',
        'media-query-list-comma-space-before': 'never',
        'no-duplicate-selectors': true,
        'no-empty-source': true,
        'no-eol-whitespace': true,
        'no-indistinguishable-colors': [true, {
            threshold: 2
        }],
        'no-invalid-double-slash-comments': true,
        'no-missing-end-of-source-newline': true,
        'number-leading-zero': 'always',
        'number-no-trailing-zeros': true,
        'property-case': 'lower',
        'property-no-unknown': [true, {
            ignoreProperties: ['composes'] // for CSS Modules
        }],
        'property-no-vendor-prefix': true,
        'root-no-standard-properties': true,
        'rule-nested-empty-line-before': ['always-multi-line', {
            except: ['first-nested'], ignore: ['after-comment']
        }],
        'rule-non-nested-empty-line-before': ['always-multi-line', {
            ignore: ['after-comment']
        }],
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-list-comma-newline-after': 'always',
        'selector-list-comma-space-before': 'never',
        'selector-max-compound-selectors': 3,
        'selector-no-empty': true,
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': [true, {
            ignorePseudoClasses: ['global', 'local'] // for CSS Modules
        }],
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'double',
        'selector-root-no-composition': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true,
        'string-no-newline': true,
        'string-quotes': 'double',
        'unit-case': 'lower',
        'unit-no-unknown': true,
        'value-list-comma-newline-after': 'always-multi-line',
        'value-list-comma-space-after': 'always-single-line',
        'value-list-comma-space-before': 'never',
        'value-no-vendor-prefix': true
    }
};
