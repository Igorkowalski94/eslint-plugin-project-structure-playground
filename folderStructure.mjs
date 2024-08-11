// @ts-check

import { createFolderStructure } from "eslint-plugin-project-structure";

export const folderStructureConfig = createFolderStructure({
  structure: {
    children: [
      {
        name: "*",
      },
      {
        name: "src",
        children: [
          {
            ruleId: "hooks_folder",
          },
          {
            name: "features",
            ruleId: "components_folder",
          },
          {
            ruleId: "examples_folder",
          },
        ],
      },
    ],
  },
  rules: {
    hooks_folder: {
      name: "hooks",
      children: [
        {
          name: "use{PascalCase}",
          children: [
            {
              ruleId: "hooks_folder",
            },
            {
              name: "{parentName}(.(test|api|types|consts))?.ts",
            },
          ],
        },
        {
          name: "use{PascalCase}(.test)?.ts",
        },
      ],
    },
    component_folder: {
      name: "{PascalCase}",
      children: [
        {
          ruleId: "components_folder",
        },
        {
          ruleId: "hooks_folder",
        },
        {
          name: "{parentName}(.(api|types|consts))?.ts",
        },
        {
          name: "{ParentName}(.test)?.tsx",
        },
      ],
    },
    components_folder: {
      name: "components",
      children: [
        {
          ruleId: "component_folder",
        },
        {
          name: "{PascalCase}(.test)?.tsx",
        },
      ],
    },
    onlyFilesExample_folder: {
      name: "onlyFilesExample",
      children: [
        {
          name: "{camelCase}.ts",
        },
      ],
    },
    onlyFoldersExample_folder: {
      name: "onlyFoldersExample",
      children: [
        {
          name: "{camelCase}",
          children: [
            {
              name: "{camelCase}.ts",
            },
          ],
        },
      ],
    },
    extensionsExample_folder: {
      name: "extensionsExample",
      children: [
        {
          name: "{SNAKE_CASE}.(svg|jpg|png|ico)",
        },
      ],
    },
    enforceExistenceExample_folder: {
      name: "enforceExistenceExample",
      children: [
        {
          name: "stories",
          children: [
            {
              name: "{camelCase}.stories.tsx",
            },
          ],
        },
        {
          name: "{PascalCase}.test.tsx",
        },
        {
          name: "{PascalCase}.tsx",
          enforceExistence: ["stories/{name}.stories.tsx", "{Name}.test.tsx"],
        },
      ],
    },
    examples_folder: {
      name: "examples",
      children: [
        { ruleId: "enforceExistenceExample_folder" },
        { ruleId: "extensionsExample_folder" },
        { ruleId: "onlyFilesExample_folder" },
        { ruleId: "onlyFoldersExample_folder" },
        {
          name: "pathAliasesExample.ts",
        },
      ],
    },
  },
});