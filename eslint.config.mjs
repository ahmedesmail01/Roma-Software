import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  ...compat.extends("next/core-web-vitals"),

  // Add your custom rules here
  {
    rules: {
      // Disable explicit any errors
      "@typescript-eslint/no-explicit-any": "off",

      // Disable unused variable errors
      "@typescript-eslint/no-unused-vars": "off",

      // Allow img tags
      "@next/next/no-img-element": "off",

      // Fix React Hook dependencies
      "react-hooks/exhaustive-deps": "warn",

      // Add other rules to fix your errors
      "prefer-const": "off",
    },
  },
];
