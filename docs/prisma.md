# Prisma

## Setup new Prisma at workspace

Install Prisma CLI as development dependency

```
pnpm add -D prisma prisma-nestjs-graphql --filter [workspace]
pnpm add @prisma/client graphql-type-json prisma-graphql-type-decimal --filter [workspace]
pnpm --workspace add -D prisma-module --filter [workspace]
```

Run Prisma init

```
cd apps/[workspace] && pnpm dlx prisma init
```

Or, via NPS script

```
nps [workspace].prisma.init
```

Config schema.prisma

```
generator client {
  provider = "prisma-client-js"
  output   = "../../../node_modules/@generated/[workspace]/prisma/client"
}

generator nestgql {
  provider = "node node_modules/prisma-nestjs-graphql"
  output   = "../generated/prisma/nestgql"
}
```
