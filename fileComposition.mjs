// @ts-check

import { createFileComposition } from "eslint-plugin-project-structure";

export const fileCompositionConfig = createFileComposition({
  filesRules: [
    { filePattern: "**/*.(test|api|stories).(ts|tsx)" },
    {
      filePattern: "**/*.consts.ts",
      fileRootRules: {
        allowOnlySpecifiedSelectors: true,
        rules: [
          {
            selector: "variable",
            format: "{SNAKE_CASE}",
          },
        ],
      },
    },
    {
      filePattern: "**/*.types.ts",
      fileRootRules: {
        allowOnlySpecifiedSelectors: true,
        rules: [
          {
            selector: ["interface", "type"],
            format: "{PascalCase}",
          },
          {
            selector: "enum",
            format: "{SNAKE_CASE}",
          },
        ],
      },
    },
    {
      filePattern: "**/*.tsx",
      fileRootRules: {
        allowOnlySpecifiedSelectors: true,
        errors: {
          variable: "Move all variables to .consts file.",
          enum: "Move all enums to .types file.",
        },
        rules: [
          {
            selector: "arrowFunction",
            format: "{FileName}",
          },
          {
            selector: ["interface", "type"],
            format: ["{FileName}Props", "{FileName}Return"],
          },
        ],
      },
      fileRules: {
        allowOnlySpecifiedSelectors: true,
        rules: [
          {
            selector: "arrowFunction",
            format: "{camelCase}",
          },

          {
            selector: "variable",
            format: "{camelCase}",
          },
        ],
      },
    },
    {
      filePattern: "**/*.ts",
      fileRootRules: {
        allowOnlySpecifiedSelectors: true,
        errors: {
          variable: "Move all variables to .consts file.",
          enum: "Move all enums to .types file.",
        },
        rules: [
          {
            selector: "arrowFunction",
            format: ["{fileName}"],
          },
          {
            selector: ["interface", "type"],
            format: ["{FileName}Props", "{FileName}Return"],
          },
        ],
      },
      fileRules: {
        allowOnlySpecifiedSelectors: true,
        rules: [
          {
            selector: "arrowFunction",
            format: "{camelCase}",
          },

          {
            selector: "variable",
            format: "{camelCase}",
          },
        ],
      },
    },
  ],
});
