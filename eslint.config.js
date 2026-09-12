import js from "@eslint/js";
import prettier from "eslint-config-prettier";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import tseslint from "typescript-eslint";

// Non-component exports that React Router route modules are allowed to have.
const routeModuleExports = [
  "meta",
  "links",
  "headers",
  "handle",
  "loader",
  "clientLoader",
  "action",
  "clientAction",
  "middleware",
  "clientMiddleware",
  "shouldRevalidate"
];

export default defineConfig([
  globalIgnores([
    "build/",
    "dist/",
    ".react-router/",
    ".wrangler/",
    "node_modules/",
    "worker-configuration.d.ts"
  ]),
  js.configs.recommended,
  tseslint.configs.recommended,
  reactHooks.configs.flat.recommended,
  reactRefresh.configs.vite,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node }
    },
    rules: {
      "no-param-reassign": ["error", { props: true, ignorePropertyModificationsFor: ["state"] }],
      "@typescript-eslint/consistent-type-imports": "error"
    }
  },
  {
    files: ["app/root.tsx", "app/routes/**/*.tsx", "app/layouts/**/*.tsx"],
    rules: {
      "react-refresh/only-export-components": ["warn", { allowExportNames: routeModuleExports }]
    }
  },
  prettier
]);
