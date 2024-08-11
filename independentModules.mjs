// @ts-check

import { createIndependentModules } from "eslint-plugin-project-structure";

export const independentModulesConfig = createIndependentModules({
  debugMode: false,
  modules: [
    {
      name: "Features",
      pattern: "features/**",
      allowImportsFrom: ["{familyImports}", "{globalHooks}", "{features}"],
    },
    {
      name: "Global hooks",
      pattern: "hooks/**",
      allowImportsFrom: ["{familyImports}", "{globalHooks}"],
    },
    {
      name: "Examples",
      pattern: "examples/**",
      allowExternalImports: false,
      allowImportsFrom: ["{storiesFolder}"],
    },
  ],
  reusableImportPatterns: {
    privateFolders: ["(hooks|components)"],
    privateFiles: ["*.(types|test|api|consts).(ts|tsx)"],

    notPrivateFilesAndFolders: [
      "!(**/{privateFiles})",
      "!(**/{privateFolders}/**)",
    ],

    storiesFolder: ["examples/enforceExistenceExample/stories/**"],
    globalHooks: [["hooks/**", "{notPrivateFilesAndFolders}"]],
    features: [["features/**", "{notPrivateFilesAndFolders}"]],

    familyImports: [
      ["{family}/*", "!{family}/*.test.ts"],

      [
        "{family}/{privateFolders}/*/*",
        "!{family}/{privateFolders}/*/{privateFiles}",
      ],

      ["{family}/*/*", "!{family}/*/{privateFiles}"],
    ],
  },
});