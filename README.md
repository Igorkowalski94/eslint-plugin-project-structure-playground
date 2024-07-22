# eslint-plugin-project-structure-playground

Playground for [eslint-plugin-project-structure](https://github.com/Igorkowalski94/eslint-plugin-project-structure).

1. npm install
2. npm run lint

#### Folder structure:

```
.
├── ...
├── 📄 folderStructure.json
├── 📄 independentModules.json
├── 📄 .eslintrc.json
└── 📂 src
    ├── 📂 hooks
    │   ├── ...
    │   ├── 📄 useSimpleHook.test.ts
    │   ├── 📄 useSimpleHook.ts
    │   └── 📂 useComplexHook
    │       ├── 📁 hooks (recursion)
    │       ├── 📄 useComplexHook.api.ts
    │       ├── 📄 useComplexHook.types.ts
    │       ├── 📄 useComplexHook.test.ts
    │       └── 📄 useComplexHook.ts
    └── 📂 features
        ├── ...
        ├── 📄 Feature3.test.tsx
        ├── 📄 Feature3.tsx
        ├── 📂 Feature2
        └── 📂 Feature1
            ├── 📄 feature1.api.ts
            ├── 📄 feature1.types.ts
            ├── 📄 Feature1.test.tsx
            ├── 📄 Feature1.tsx
            ├── 📂 components
            │   ├── ...
            │   ├── 📄 SimpleComponent.test.tsx
            │   ├── 📄 SimpleComponent.tsx
            │   └── 📂 ComplexComponent
            │       ├── 📁 components (recursion)
            │       ├── 📁 hooks (recursion)
            │       ├── 📄 complexComponent.types.ts
            │       ├── 📄 complexComponent.api.ts
            │       ├── 📄 ComplexComponent.test.tsx
            │       └── 📄 ComplexComponent.tsx
            └── 📂 hooks
                ├── ...
                ├── 📄 useSimpleHook.test.ts
                ├── 📄 useSimpleHook.ts
                └── 📂 useComplexParentComponentHook
                    ├── 📁 hooks (recursion)
                    ├── 📄 useComplexHook.api.ts
                    ├── 📄 useComplexHook.types.ts
                    ├── 📄 useComplexHook.test.ts
                    └── 📄 useComplexHook.ts
```
