const OFF = 0;

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
    parser: 'babel-eslint',
    rules: {
        'consistent-return': OFF,
        'func-names': OFF,
        'lines-between-class-members': OFF,
        'max-classes-per-file': OFF,
        'no-bitwise': OFF,
        'no-console': OFF,
        'no-param-reassign': OFF,
        'no-plusplus': OFF,
        'no-restricted-syntax': OFF,
        'no-underscore-dangle': OFF,
        'no-unused-expressions': OFF,
        'no-unused-vars': OFF,
    },
    overrides: [
        {
            files: ['{test,benchmark}/**/*.js'],
            rules: {
                'import/no-extraneous-dependencies': OFF,
            },
        },
    ],
};
