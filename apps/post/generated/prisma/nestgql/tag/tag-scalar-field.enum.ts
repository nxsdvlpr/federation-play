import { registerEnumType } from '@nestjs/graphql';

export enum TagScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    slug = "slug",
    label = "label"
}


registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
