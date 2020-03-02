const configs = {
    require: ['tsconfig-paths/register', 'espower-typescript/guess'],
    recursive: true,
    extension: ['ts'],
    spec: ['./test/**/*.test.ts'],
    exit: true,
    timeout: 3 * 1000,
    colors: true,
};

if (process.env.VSCODE_TEST === '1') {
    delete configs.spec;
}

module.exports = configs;
