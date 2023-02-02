import { Module } from '@nestjs/common';
import { PostService } from 'src/post/post.service';
import { UserResolver } from './user.resolver';

@Module({
  providers: [UserResolver, PostService],
})
export class UserModule {}
