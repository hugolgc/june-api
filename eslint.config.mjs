// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    { ignores: ["eslint.config.mjs"] },
    { languageOptions: { parserOptions: { project: true } } },
    {
        rules: {
            eqeqeq: "error",
            "no-implicit-coercion": "error",
            "@typescript-eslint/no-inferrable-types": "off",
            "@typescript-eslint/no-extraneous-class": "off",
            "@typescript-eslint/explicit-function-return-type": "error",
            "@typescript-eslint/explicit-member-accessibility": "error",
            "@typescript-eslint/explicit-module-boundary-types": "error",
            "@typescript-eslint/typedef": [
                "error",
                {
                    parameter: true,
                    arrowParameter: false,
                    arrayDestructuring: true,
                    objectDestructuring: true,
                    propertyDeclaration: true,
                    variableDeclaration: true,
                    memberVariableDeclaration: true,
                },
            ],
        },
    },
);
