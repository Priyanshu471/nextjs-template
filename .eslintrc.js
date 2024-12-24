module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    root: true,
    extends: ["next/core-web-vitals", "love", "next", "eslint:recommended", "prettier"],
    overrides: [
        {
            files: ["**/*.{ts,tsx}"],
            parser: "@typescript-eslint/parser",
            extends: [
                "plugin:@typescript-eslint/recommended",
                "plugin:@typescript-eslint/recommended-requiring-type-checking",
            ],
            // Recommended plugin for ts : https://www.youtube.com/watch?v=sSJBeWPIipQ
            plugins: ["@typescript-eslint"],
            parserOptions: {
                project: ["./tsconfig.json"],
            },
            rules: {
                // TODO : add strict rules here
                "@typescript-eslint/naming-convention": "off",
                "@typescript-eslint/explicit-function-return-type": "off",
                "@typescript-eslint/non-nullable-type-assertion-style": "off",
                "@typescript-eslint/no-misused-promises": [
                    2,
                    {
                        checksVoidReturn: {
                            attributes: false,
                        },
                    },
                ],
            },
        },
    ],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
};
