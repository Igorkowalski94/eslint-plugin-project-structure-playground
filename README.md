<a id="root"></a>

<div>&nbsp;</div>

<p align="right">
  <picture><img src="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Cloud.png" alt="Cloud" width="35" height="35" /></picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Crescent%20Moon.png">
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Sun.png">
    <img alt="Shows an illustrated sun in light mode and a moon with stars in dark mode." src="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Sun.png" width="30" height="30" />
  </picture>
  <picture><img src="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Cloud.png" alt="Cloud" width="19" height="19" /></picture>
</p>
<h1 align="center"><picture><img src="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Video%20Game.png" alt="Video game" width="60" height="60" /></picture><picture><img src="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Owl.png" alt="Owl" width="60" height="60" /></picture></br>eslint&#8209;plugin&#8209;project-structure&#8209;playground</h1>

<p align="center">Playground for <a href="https://github.com/Igorkowalski94/eslint-plugin-project-structure/wiki/Plugin-homepage#root">eslint-plugin-project-structure</a>.</p>

## 📚 Documentation

- [project-structure/folder-structure](https://github.com/Igorkowalski94/eslint-plugin-project-structure/wiki/project%E2%80%91structure-%E2%80%8Bfolder%E2%80%91structure#root)
- [project-structure/independent-modules](https://github.com/Igorkowalski94/eslint-plugin-project-structure/wiki/project%E2%80%91structure-%E2%80%8Bindependent%E2%80%91modules#root)
- [project-structure/file-composition](https://github.com/Igorkowalski94/eslint-plugin-project-structure/wiki/project%E2%80%91structure-%E2%80%8Bfile%E2%80%91composition#root)

## 🏁 Getting started

### Step 1 (optional)

The project uses ESLint's new config system as default. If you want to test on the old eslint config, follow these steps:

- Remove package.json
- Remove eslint.config.mjs
- Remove independentModules.mjs
- Remove fileComposition.mjs
- Remove folderStructure.mjs
- Rename packageLegacyConfig.json to package.json

### Step 2

```bsh
npm install
```

```bsh
npm run lint:watch
```

or

```bsh
npm run lint
```

## 📋 General Information

> [!WARNING]
> Folder needs to contain at least one file/subfolder with file to be validated. ESLint and Git ignore empty folders, so they won’t be pushed to the repository and will only remain visible locally.

- All files in the `features` folder have all possible correct imports. You can try importing other files to see the errors.
- Examples of individual functionalities can be found in the `examples` folder.
- If you have any questions or need help creating a configuration that meets your requirements, [click here](https://github.com/Igorkowalski94/eslint-plugin-project-structure/discussions/new?category=help).

## 📋 General project rules

- Variables in `.const.ts` files must follow `{SNAKE_CASE}`.
- `.consts.ts` files may only contain variables.
- Interfaces and types in `.types.ts` files must follow `{PascalCase}`.
- Enums in `.types.ts` files must follow `{SNAKE_CASE}`.
- `.types.ts` files may only contain interfaces, types and enums.
- All `.ts` files must contain only one main function. The main function should be named `{fileName}`. The main function can have an interface or type which must be named `{FileName}Props` or `{FileName}Return`.
- All `.tsx` files must contain only one main function. The main function should be named `{FileName}`. The main function can have an interface or type which must be named `{FileName}Props` or `{FileName}Return`.
- All nested functions and variables in `.ts` and `.tsx` files must follow `{camelCase}`.
- `.types.ts` files can only import from `node_modules` and nothing else.
- `.consts.ts` files can only import from `.types.ts` files located in the same directory.
- `.api.ts` files can only import from `.consts.ts` and `.types.ts` files located in the same directory.

## 📁 Folder structure and independent module rules

```
.
├── ...
├── 📄 fileComposition.mjs
├── 📄 folderStructure.mjs
├── 📄 independentModules.mjs
├── 📄 eslint.config.mjs
└── 📂 src
    ├── 📂 examples // Private
    ├── 📂 hooks
    │   ├── ...
    │   ├── 📄 useSimpleGlobalHook.test.ts       // Private.
    │   ├── 📄 useSimpleGlobalHook.ts            // Public.
    │   └── 📂 useComplexGlobalHook              // useComplexGlobalHook family.
    │       ├── 📁 hooks (recursion)             // Private / Public for useComplexGlobalHook family.
    │       ├── 📄 useComplexGlobalHook.api.ts    // Private / Public for useComplexGlobalHook family.
    │       ├── 📄 useComplexGlobalHook.types.ts  // Private / Public for useComplexGlobalHook family.
    │       ├── 📄 useComplexGlobalHook.consts.ts // Private / Public for useComplexGlobalHook family.
    │       ├── 📄 useComplexGlobalHook.test.ts   // Private.
    │       └── 📄 useComplexGlobalHook.ts        // Public.
    └── 📂 features
        ├── ...
        ├── 📄 Feature3.test.tsx            // Private.
        ├── 📄 Feature3.tsx                 // Public.
        ├── 📂 Feature2                     // Feature2 family. Same structure as Feature1.
        └── 📂 Feature1                     // Feature1 family.
            ├── 📄 feature1.api.ts          // Private / Public for Feature1 family.
            ├── 📄 feature1.types.ts        // Private / Public for Feature1 family.
            ├── 📄 feature1.consts.ts       // Private / Public for Feature1 family.
            ├── 📄 Feature1.test.tsx        // Private.
            ├── 📄 Feature1.tsx             // Public.
            ├── 📂 components
            │   ├── ...
            │   ├── 📄 SimpleComponent.test.tsx       // Private.
            │   ├── 📄 SimpleComponent.tsx            // Private / Public for Feature1 family / Public for ComplexComponent family.
            │   └── 📂 ComplexComponent               // ComplexComponent family.
            │       ├── 📁 components (recursion)     // Private / Public for ComplexComponent family.
            │       ├── 📁 hooks (recursion)          // Private / Public for ComplexComponent family.
            │       ├── 📄 complexComponent.api.ts     // Private / Public for ComplexComponent family.
            │       ├── 📄 complexComponent.types.ts   // Private / Public for ComplexComponent family.
            │       ├── 📄 complexComponent.consts.ts  // Private / Public for ComplexComponent family.
            │       ├── 📄 ComplexComponent.test.tsx   // Private.
            │       └── 📄 ComplexComponent.tsx        // Private / Public for ComplexComponent family / Public for Feature1 family / Public for SimpleComponent.tsx.
            └── 📂 hooks
                ├── ...
                ├── 📄 useSimpleHook.test.ts           // Private.
                ├── 📄 useSimpleHook.ts                // Private / Public for Feature1 family / Public for useComplexHook family.
                └── 📂 useComplexHook                 // useComplexHook family.
                    ├── 📁 hooks (recursion)          // Private / Public for useComplexHook family.
                    ├── 📄 useComplexHook.api.ts      // Private / Public for useComplexHook family.
                    ├── 📄 useComplexHook.types.ts    // Private / Public for useComplexHook family.
                    ├── 📄 useComplexHook.consts.ts   // Private / Public for useComplexHook family.
                    ├── 📄 useComplexHook.test.ts     // Private.
                    └── 📄 useComplexHook.ts          // Private / Public for useComplexHook family / Public for Feature1 family / Public for useSimpleHook.tsx.
```

<h2><picture><img src="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Party%20Popper.png" alt="Party Popper" width="35" height="35" /></picture> Sponsors</h2>

<p align="center">A big thank you to all the <a href="https://github.com/sponsors/Igorkowalski94">sponsors</a> for your support! You give me the strength and motivation to keep going!</p>
<p align="center"> Thanks to you, I can help others create their ideal projects!</p>
<p align="center"><picture><img src="https://raw.githubusercontent.com/Igorkowalski94/eslint-plugin-project-structure/main/images/Love-You%20Gesture.png" alt="Love-You Gesture" width="60px" height="60px" /></picture><p>
