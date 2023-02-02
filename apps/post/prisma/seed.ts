import { PrismaClient, Prisma } from '@generated/post/prisma/client';
import { makeSlug } from '@nxs/helper';

const prisma = new PrismaClient();

const posts: Prisma.PostCreateInput[] = [
  {
    authorId: '',
    title: '',
    slug: '',
    content: '',
  },
  {
    authorId: '',
    title: '',
    slug: '',
    content: '',
  },
  {
    authorId: '',
    title: '',
    slug: '',
    content: '',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (let p = 0; p < posts.length; p++) {
    const post = posts[p];
    post.authorId = 'clauvnxyd0000d2ye9w79b48s';
    post.title = `Post title #${p}`;
    post.slug = makeSlug(post.title);
    post.content = `Post content #${p}`;

    const newpost = await prisma.post.create({
      data: post,
    });

    console.log(`Created post with id: ${newpost.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
