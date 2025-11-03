import baseConfig from "@repo/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  ...baseConfig,
  {
    ignores: ["*.cjs", "eslint.config.js"],
  },
  {
    languageOptions: {
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: import.meta.dirname,
      },
    },
  }
);
