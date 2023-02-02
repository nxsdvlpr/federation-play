# Prisma

## NestJS GraphQL

Install NestJS GraphQL packages

```
pnpm add @nestjs/graphql @nestjs/apollo graphql apollo-server-express --filter [workspace]
```

Update AppModule

```
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
})
export class AppModule {}
```
