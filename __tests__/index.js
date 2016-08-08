import config from '../';
import stylelint from 'stylelint';
import test from 'ava';


const validCss = (
    `a {
    top: 0.2em;
}
`);

const invalidCss = (
    `a {
    top: .2em;
}
`);

test('Should flag no warnings with valid CSS.', t => {
    return stylelint.lint({
        code: validCss,
        config: config
    })
    .then(data => {
        const { errored, results } = data;
        const { warnings } = results[0];
        t.falsy(errored, 'Not errored.');
        t.is(warnings.length, 0, 'Flags no warnings.');
    });
});

test('Should flag a warning with invalid CSS.', t => {
    return stylelint.lint({
        code: invalidCss,
        config: config
    })
    .then(data => {
        const { errored, results } = data;
        const { warnings } = results[0];
        t.truthy(errored, 'Errored.');
        t.is(warnings.length, 1, 'Flags one warning.');
        t.is(warnings[0].text, 'Expected a leading zero (number-leading-zero)', 'correct warning text');
    });
});
