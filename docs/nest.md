# NestJS

## Create new NestJS project

Create Nest project

```
cd apps
nest new [workspace]
```

Choose PNPM as package manager

Install required packages

```
pnpm add class-validator class-transformer --filter [workspace]
pnpm --workspace add -D config tsconfig --filter [workspace]
```

Add scripts and dependencies to package.json

```
  "scripts": {
    ...
    "dev": "nest start --watch",
    ...
  },
```

Replace tsconfig.json to extends shared tsconfig

```
{
  "extends": "tsconfig/nestjs.json",
  "compilerOptions": {
    "outDir": "./dist",
    "baseUrl": "./"
  },
  "exclude": ["node_modules", "dist", "test"]
}
```

Replace .eslintrc.js to extends shared eslint config

```
module.exports = {
  ...require('config/eslint-nest'),
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
  },
};
```

Replace .prettierrc with .prettierrc.js to extends shared prettier config

```
module.exports = {
  ...require("config/prettier-nest"),
};
```

Set NestJS listen port to avoid port conflict (/src/main.ts)
