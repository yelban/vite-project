module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:import/recommended', // 1. eslint-plugin-import
        'airbnb',
        'plugin:prettier/recommended', // 3. eslint-plugin-prettier
    ],
    overrides: [],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
        'simple-import-sort', // 2. eslint-plugin-simple-import-sort
    ],
    rules: {
        // 2. eslint-plugin-simple-import-sort
        'simple-import-sort/imports': 'warn',
        'simple-import-sort/exports': 'warn',
        'import/first': 'warn',
        'import/newline-after-import': 'warn',
        'import/no-duplicates': 'warn',
        //
        'no-unused-vars': 'warn',
        //
        'global-require': 'warn',
        //
        'react/button-has-type': 'warn',
        //
        'no-shadow': 'warn',
    },
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        }, // Unable to resolve path to module './Auth'.eslintimport/no-unresolved
    },
    ignorePatterns: [
        'tailwind.config-all.cjs', //
    ],
};
