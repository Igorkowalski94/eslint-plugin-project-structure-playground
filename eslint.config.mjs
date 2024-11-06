// @ts-check

import { dirname } from "path";
import { fileURLToPath } from "url";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import {
  projectStructureParser,
  projectStructurePlugin,
} from "eslint-plugin-project-structure";

import { folderStructureConfig } from "./folderStructure.mjs";
import { independentModulesConfig } from "./independentModules.mjs";
import { fileCompositionConfig } from "./fileComposition.mjs";

const __dirname = dirname(fileURLToPath(import.meta.url));

export default tseslint.config(
  /**
   *  Only for the project-structure/folder-structure rule,
   *  which must use the projectStructureParser to check all file extensions not supported by ESLint.
   */
  {
    files: ["**"],
    languageOptions: {
      parser: projectStructureParser,
    },
    plugins: {
      "project-structure": projectStructurePlugin,
    },
    rules: {
      "project-structure/folder-structure": ["error", folderStructureConfig],
    },
  },

  /**
   *  Here you will add your normal rules, which use the default parser.
   */
  {
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
    ],
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx", "**/*.mjs"],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "project-structure": projectStructurePlugin,
    },
    rules: {
      ...eslint.configs.recommended.rules,
      "project-structure/independent-modules": [
        "error",
        independentModulesConfig,
      ],
      "project-structure/file-composition": ["error", fileCompositionConfig],

      "no-duplicate-imports": "error",
      "no-unused-vars": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          vars: "all",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
          caughtErrorsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          ignoreRestSiblings: true,
        },
      ],
    },
  }
);
