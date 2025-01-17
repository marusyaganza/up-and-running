import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import jestPlugin from "eslint-plugin-jest";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts}"],
  },
  {
    ignores: ["**/generated/*", "**/dist/"],
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"],
    plugins: {
      jest: jestPlugin,
    },
    languageOptions: {
      globals: {
        ...jestPlugin.environments.globals.globals,
      },
    },
    rules: {
      ...jestPlugin.configs.recommended.rules,
      "jest/no-disabled-tests": "warn",
      "jest/no-focused-tests": "error",
      "jest/no-identical-title": "error",
      "jest/prefer-to-have-length": "warn",
      "jest/valid-expect": "error",
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
    },
  },
];
