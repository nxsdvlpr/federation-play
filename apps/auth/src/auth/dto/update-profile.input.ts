import { Field, InputType } from '@nestjs/graphql';
import { IsString } from 'class-validator';

@InputType()
export class UpdateProfileInput {
  @Field()
  @IsString()
  name!: string;

  @Field()
  @IsString()
  email!: string;

  @Field({ nullable: true })
  password?: string;
}
