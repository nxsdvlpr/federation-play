import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import * as Scalars from 'graphql-scalars';
import { PostImageDto } from 'src/post/dto/post-image.dto';
import { Int } from '@nestjs/graphql';
import { Comment } from '../comment/comment.model';
import { Tag } from '../tag/tag.model';
import { PostCount } from './post-count.output';
import * as NG from '@nestjs/graphql';

@ObjectType({})
@NG.Directive('@key(fields: "id")')
export class Post {

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    id!: string;

    @Field(() => Scalars.GraphQLCuid, {nullable:false})
    authorId!: string;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    createdAt!: Date;

    @Field(() => Scalars.GraphQLDateTime, {nullable:false})
    updatedAt!: Date;

    @Field(() => String, {nullable:false})
    slug!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:true})
    content!: string | null;

    @Field(() => Boolean, {nullable:false,defaultValue:false})
    published!: boolean;

    @Field(() => [PostImageDto], {nullable:true})
    images!: Array<any>;

    @Field(() => Int, {nullable:false,defaultValue:0})
    viewCount!: number;

    @Field(() => [Comment], {nullable:true})
    comments?: Array<Comment>;

    @Field(() => [Tag], {nullable:true})
    tags?: Array<Tag>;

    @Field(() => PostCount, {nullable:false})
    _count?: PostCount;
}
