const OFF = 0;
const ERROR = 2;

module.exports = {
    env: {
        es6: true,
        node: true,
        mocha: true,
    },
    extends: [
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        'prettier',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint'],
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.ts', '.js', '.json'],
            },
        },
    },
    rules: {
        'import/extensions': [
            ERROR,
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
                json: 'never',
                js: 'never',
            },
        ],

        '@typescript-eslint/no-useless-constructor': ERROR,
        '@typescript-eslint/no-non-null-assertion': OFF,

        'consistent-return': OFF,
        'func-names': OFF,
        'lines-between-class-members': OFF,
        'max-classes-per-file': OFF,
        'no-bitwise': OFF,
        'no-console': OFF,
        'no-empty': OFF,
        'no-param-reassign': OFF,
        'no-plusplus': OFF,
        'no-restricted-syntax': OFF,
        'no-underscore-dangle': OFF,
        'no-unused-expressions': OFF,
        'no-unused-vars': OFF,
        'no-useless-constructor': OFF,
    },
    overrides: [
        {
            files: ['{test,benchmark}/**/*.ts'],
            rules: {
                'import/first': OFF,
            },
        },
    ],
};
