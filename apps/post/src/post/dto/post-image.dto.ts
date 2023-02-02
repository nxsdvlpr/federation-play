import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType('PostImage')
export class PostImageDto {
  @Field(() => String)
  large: string;

  @Field(() => String)
  medium: string;
}
