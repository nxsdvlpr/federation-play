import { PrismaClient, Prisma } from '@generated/catalog/prisma/client';
import { makeSlug } from '@nxs/helper';

const prisma = new PrismaClient();

const products: Prisma.ProductCreateInput[] = [];

async function main() {
  console.log(`Start seeding ...`);
  for (let p = 0; p < products.length; p++) {
    const product = products[p];
    product.name = `Post title #${p}`;
    product.slug = makeSlug(product.name);

    const newproduct = await prisma.product.create({
      data: product,
    });

    console.log(`Created post with id: ${newproduct.id}`);
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
