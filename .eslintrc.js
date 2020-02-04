module.exports = {
    env: {
        commonjs: true,
        es6: true,
        node: true,
        mocha: true,
    },
    extends: ['airbnb-base', 'prettier'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
        BigInt: 'readonly',
    },
    parserOptions: {
        ecmaVersion: 2020,
    },
    rules: {
        'consistent-return': 0,
        'func-names': 0,
        'no-bitwise': 0,
        'no-console': 0,
        'no-param-reassign': 0,
        'no-plusplus': 0,
        'no-unused-expressions': 0,
        'no-unused-vars': 0,
    },
    overrides: [
        {
            files: ['{test,benchmark}/**/*.js'],
            rules: {
                'import/no-extraneous-dependencies': 0,
            },
        },
    ],
};
