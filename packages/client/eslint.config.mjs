import js from "@eslint/js";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import reactRefreshPlugin from "eslint-plugin-react-refresh";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import cypressPlugin from "eslint-plugin-cypress";
import chaiFriendlyPlugin from "eslint-plugin-chai-friendly";
import globals from "globals";

export default [
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
  },
  {
    ignores: ["**/generated/*", "**/dist/"],
  },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: {
        ...globals.browser,
        ...cypressPlugin.environments.globals.globals,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "react-refresh": reactRefreshPlugin,
      "react-hooks": reactHooksPlugin,
      cypress: cypressPlugin,
      "chai-friendly": chaiFriendlyPlugin,
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      ...cypressPlugin.configs.recommended.rules,
      ...chaiFriendlyPlugin.configs.recommended.rules,
      "react-hooks/exhaustive-deps": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "no-unused-expressions": "off",
      "chai-friendly/no-unused-expressions": "error",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  {
    files: ["cypress/**/*.{js,jsx,ts,tsx}"],
    rules: {
      "cypress/no-unnecessary-waiting": "warn",
      "cypress/no-assigning-return-values": "error",
      "cypress/no-async-tests": "error",
    },
  },
];
