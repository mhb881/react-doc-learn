import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import { defineConfig, globalIgnores } from "eslint/config";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  },
  {
    rules: {
      // console警告
      "no-console": "warn",
      // 未使用变量警告
      "@typescript-eslint/no-unused-vars": "warn",

      // ✅ 强制检查 Hooks 依赖（缺失直接报错，不是警告）
      // "react-hooks/exhaustive-deps": "error",
      // ✅ 检查 Hooks 调用顺序（React 强制规则）
      // "react-hooks/rules-of-hooks": "error",
    },
  },
]);
