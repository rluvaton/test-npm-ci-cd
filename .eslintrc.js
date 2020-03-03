/**
 * We are using the .JS version of an ESLint config file here so that we can
 * add lots of comments to better explain and document the setup.
 */
module.exports = {

    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2020,
                sourceType: 'module',
                project: './tsconfig.json',
            },

            plugins: ['@typescript-eslint', 'prettier'],
            extends: ["plugin:prettier/recommended"],
            rules: {
                "prettier/prettier": ["error"],

                // ORIGINAL tslint.json -> "array-type": false,
                '@typescript-eslint/array-type': 'off',

                // ORIGINAL tslint.json -> "arrow-parens": false,
                'arrow-parens': 'off',

                // ORIGINAL tslint.json -> "deprecation": { "severity": "warning" },
                /**
                 * | [`deprecation`]              | 🌓  | [`import/no-deprecated`] <sup>[1]</sup>            |
                 * <sup>[1]</sup> Only warns when importing deprecated symbols<br>
                 */

                // ORIGINAL tslint.json -> "directive-class-suffix": true,

                // ORIGINAL tslint.json -> "import-blacklist": [true, "rxjs/Rx"],
                'no-restricted-imports': [
                    'error',
                    {
                        paths: [
                            {
                                name: 'rxjs/Rx',
                                message: "Please import directly from 'rxjs' instead",
                            },
                        ],
                    },
                ],

                // ORIGINAL tslint.json -> "interface-name": false,
                '@typescript-eslint/interface-name-prefix': 'off',

                // ORIGINAL tslint.json -> "max-classes-per-file": false,
                'max-classes-per-file': 'off',

                // ORIGINAL tslint.json -> "max-line-length": [true, 140],
                'max-len': ['error', { code: 140 }],

                // ORIGINAL tslint.json -> "member-access": false,
                '@typescript-eslint/explicit-member-accessibility': 'off',

                // ORIGINAL tslint.json -> "member-ordering": [true, { "order": ["static-field", "instance-field", "static-method", "instance-method"] } ],
                '@typescript-eslint/member-ordering': [
                    'error',
                    {
                        default: [
                            'static-field',
                            'instance-field',
                            'static-method',
                            'instance-method',
                        ],
                    },
                ],

                // ORIGINAL tslint.json -> "no-consecutive-blank-lines": false,
                'no-multiple-empty-lines': 'off',

                // ORIGINAL tslint.json -> "no-console": [true, "debug", "info", "time", "timeEnd", "trace"],
                'no-restricted-syntax': [
                    'error',
                    {
                        selector:
                            'CallExpression[callee.object.name="console"][callee.property.name=/^(debug|info|time|timeEnd|trace)$/]',
                        message: 'Unexpected property on console object was called',
                    },
                ],

                // ORIGINAL tslint.json -> "no-empty": false,
                'no-empty': 'off',

                // ORIGINAL tslint.json -> "no-inferrable-types": [true, "ignore-params"],
                '@typescript-eslint/no-inferrable-types': [
                    'error',
                    {
                        ignoreParameters: true,
                    },
                ],

                // ORIGINAL tslint.json -> "no-non-null-assertion": true,
                '@typescript-eslint/no-non-null-assertion': 'error',


                // ORIGINAL tslint.json -> "no-switch-case-fall-through": true,
                'no-fallthrough': 'error',

                // ORIGINAL tslint.json -> "no-var-requires": false,
                '@typescript-eslint/no-var-requires': 'off',

                // ORIGINAL tslint.json -> "object-literal-key-quotes": [true, "as-needed"],
                'quote-props': ['error', 'as-needed'],

                // ORIGINAL tslint.json -> "object-literal-sort-keys": false,
                'sort-keys': 'off',

                // ORIGINAL tslint.json -> "quotemark": [true, "single"],
                quotes: ['error', 'single'],

                // ORIGINAL tslint.json -> "trailing-comma": false,
                'comma-dangle': 'off'
            },
        },
    ],
};
