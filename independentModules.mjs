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
      name: "Only files",
      pattern: "onlyFiles/**",
      allowExternalImports: false,
      allowImportsFrom: [],
    },
    {
      name: "Only folders",
      pattern: "onlyFolders/**",
      allowExternalImports: false,
      allowImportsFrom: [],
    },
  ],
  reusableImportPatterns: {
    privateFolders: ["(hooks|components)"],
    privateFiles: ["*.(types|test|api|consts).(ts|tsx)"],

    notPrivateFilesAndFolders: [
      "!(**/{privateFiles})",
      "!(**/{privateFolders}/**)",
    ],

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
