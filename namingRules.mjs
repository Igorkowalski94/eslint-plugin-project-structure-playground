// @ts-check

import { createNamingRules } from "eslint-plugin-project-structure";

export const namingRulesConfig = createNamingRules([
  {
    filePattern: "**/*consts.ts",
    rules: [
      {
        nameType: "VariableDeclarator",
        allowNames: ["{SNAKE_CASE}"],
      },
    ],
  },
  {
    filePattern: "**/*.types.ts",
    rules: [
      {
        nameType: ["TSInterfaceDeclaration", "TSTypeAliasDeclaration"],
        allowNamesFileRoot: ["{PascalCase}"],
      },
      {
        nameType: "TSEnumDeclaration",
        allowNames: ["{SNAKE_CASE}"],
      },
    ],
  },
  {
    filePattern: "**/*.tsx",
    rules: [
      {
        nameType: ["ArrowFunctionExpression", "FunctionDeclaration"],
        allowNamesFileRoot: ["{filename_PascalCase}"],
        allowNames: ["{camelCase}"],
      },
      {
        nameType: ["TSInterfaceDeclaration", "TSTypeAliasDeclaration"],
        allowNamesFileRoot: [
          "{filename_PascalCase}Props",
          "{filename_PascalCase}Return",
        ],
      },
      {
        nameType: ["VariableDeclarator"],
        allowNames: ["{camelCase}"],
      },
    ],
  },
  {
    filePattern: "**/*.ts",
    rules: [
      {
        nameType: ["ArrowFunctionExpression", "FunctionDeclaration"],
        allowNamesFileRoot: ["{filename_camelCase}"],
        allowNames: ["{camelCase}"],
      },
      {
        nameType: ["TSInterfaceDeclaration", "TSTypeAliasDeclaration"],
        allowNamesFileRoot: [
          "{filename_PascalCase}Props",
          "{filename_PascalCase}Return",
        ],
      },
      {
        nameType: "VariableDeclarator",
        allowNames: ["{camelCase}"],
      },
    ],
  },
]);
