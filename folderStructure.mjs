// @ts-check

import { createFolderStructure } from "eslint-plugin-project-structure";

export const folderStructureConfig = createFolderStructure({
  structureRoot: "src",
  structure: [
    { ruleId: "hooks_folder" },
    { ruleId: "examples_folder" },
    { name: "features", ruleId: "components_folder" },
  ],
  rules: {
    hook_folder: {
      name: "use{PascalCase}",
      children: [
        { ruleId: "hooks_folder" },

        // This rule will only be considered when the final nesting of the hooks_folder rule occurs.
        { name: "hooks", children: [{ name: "use{PascalCase}(.test)?.ts" }] },

        { name: "{folderName}(.(test|api|types|consts))?.ts" },
      ],
    },

    hooks_folder: {
      name: "hooks",
      folderRecursionLimit: 2,
      children: [
        { ruleId: "hook_folder" },
        { name: "use{PascalCase}(.test)?.ts" },
      ],
    },

    component_folder: {
      name: "{PascalCase}",
      children: [
        { ruleId: "components_folder" },
        { ruleId: "hooks_folder" },
        { name: "{folderName}.(api|types|consts).ts" },
        { name: "{FolderName}(.test)?.tsx" },
      ],
    },

    components_folder: {
      name: "components",
      children: [
        { ruleId: "component_folder" },
        { name: "{PascalCase}(.test)?.tsx" },
      ],
    },

    onlyFilesExample_folder: {
      name: "onlyFilesExample",
      children: [{ name: "{camelCase}.ts" }],
    },

    onlyFoldersExample_folder: {
      name: "onlyFoldersExample",
      children: [
        { name: "{camelCase}", children: [{ name: "{camelCase}.ts" }] },
      ],
    },

    extensionsExample_folder: {
      name: "extensionsExample",
      children: [{ name: "{SNAKE_CASE}.(svg|jpg|png|ico)" }],
    },

    enforceExistenceExample_folder: {
      name: "enforceExistenceExample",
      children: [
        { name: "stories", children: [{ name: "{camelCase}.stories.tsx" }] },
        { name: "{PascalCase}.test.tsx" },
        {
          name: "{PascalCase}.tsx",
          enforceExistence: [
            "stories/{nodeName}.stories.tsx",
            "{NodeName}.test.tsx",
          ],
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
        { name: "{camelCase}Example.(ts|tsx)" },
      ],
    },
  },
});
