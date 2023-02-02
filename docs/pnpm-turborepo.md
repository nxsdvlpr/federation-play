# PNPM MonoRepo

## Usefull commands

Add package to root

```
pnpm -w add [package]
```

Add package to workspace

```
pnpm add [package] --filter [workspace]
pnpm add -D [package] --filter [workspace]
```

Add local shared package

```
pnpm --workspace add [package] --filter [workspace]
```

Replace package version at package.json to "\*" (refering latest version)

# TurboRepo

## Create TurboRepo

Create new TurboRepo project

```
npx create-turbo@latest
```

Create .npmrc

```
auto-install-peers=true
```
