import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import customRules from "eslint-plugin-custom-rules";
import playwright from "eslint-plugin-playwright";

export default tseslint.config(
  pluginJs.configs.recommended, // это  "eslint:recommended",
  ...tseslint.configs.recommended,
  playwright.configs["flat/recommended"],
  {
    ignores: ["node-modules", "eslint"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.node,
      },
    },
  },
  {
    files: ["tests/**/*{js,ts}"],
    plugins: {
      "custom-rules": customRules,
    },
    rules: {
      "playwright/no-skipped-test": 0,
      "custom-rules/skip-with-issue": ["error"],
    },
  },
);
