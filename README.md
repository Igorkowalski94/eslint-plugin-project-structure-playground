# eslint-plugin-project-structure-playground

Playground for [eslint-plugin-project-structure](https://github.com/Igorkowalski94/eslint-plugin-project-structure).

### Documentation

- **[project-structure-folder-structure](https://github.com/Igorkowalski94/eslint-plugin-project-structure/blob/main/documentation/project-structure-folder-structure.md)**
- **[project-structure-independent-modules](https://github.com/Igorkowalski94/eslint-plugin-project-structure/blob/main/documentation/project-structure-independent-modules.md)**
- **[project-structure-naming-rules](https://github.com/Igorkowalski94/eslint-plugin-project-structure/blob/main/documentation/project-structure-naming-rules.md)**

## Getting started

### Step 1 (optional)

The project uses ESLint's new config system as default. If you want to test on the old eslint config, follow these steps:

- Remove package.json
- Remove eslint.config.mjs
- Rename packageLegacyConfig.json to package.json

### Step 2

```bsh
npm install
```

```bsh
npm run lint
```

#### Folder structure:

```
.
├── ...
├── 📄 folderStructure.mjs
├── 📄 independentModules.mjs
├── 📄 .eslintrc.json
└── 📂 src
    ├── 📂 images       // Private
    ├── 📂 onlyFolders  // Private
    ├── 📂 onlyFiles    // Private
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
            │       ├── 📄 complexComponent.types.ts   // Private / Public for ComplexComponent family.
            │       ├── 📄 complexComponent.api.ts     // Private / Public for ComplexComponent family.
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
