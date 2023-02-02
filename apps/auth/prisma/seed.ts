import { PrismaClient, Prisma } from '@generated/auth/prisma/client';
import { passwordHash } from '@nxs/helper';

const prisma = new PrismaClient();

const users: Prisma.UserCreateInput[] = [
  {
    name: 'Alice',
    email: 'alice@prisma.io',
    password: 'alice@prisma.io',
  },
  {
    name: 'Nilu',
    email: 'nilu@prisma.io',
    password: 'nilu@prisma.io',
  },
  {
    name: 'Mahmoud',
    email: 'mahmoud@prisma.io',
    password: 'nilu@prisma.io',
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const user of users) {
    user.password = passwordHash(user.password);

    const newUser = await prisma.user.create({
      data: user,
    });

    console.log(`Created user with id: ${newUser.id}`);
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
