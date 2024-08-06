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
            ruleId: "onlyFiles_folder",
          },
          {
            ruleId: "onlyFolders_folder",
          },
          {
            ruleId: "images_folder",
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
    onlyFiles_folder: {
      name: "onlyFiles",
      children: [
        {
          name: "{camelCase}.ts",
        },
      ],
    },
    onlyFolders_folder: {
      name: "onlyFolders",
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
    images_folder: {
      name: "images",
      children: [
        {
          name: "{SNAKE_CASE}.(svg|jpg|png|ico)",
        },
      ],
    },
  },
});
