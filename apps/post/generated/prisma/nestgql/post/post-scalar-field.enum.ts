import { registerEnumType } from '@nestjs/graphql';

export enum PostScalarFieldEnum {
    id = "id",
    authorId = "authorId",
    createdAt = "createdAt",
    updatedAt = "updatedAt",
    slug = "slug",
    title = "title",
    content = "content",
    published = "published",
    images = "images",
    viewCount = "viewCount"
}


registerEnumType(PostScalarFieldEnum, { name: 'PostScalarFieldEnum', description: undefined })
