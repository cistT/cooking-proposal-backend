import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // ここにクエリを書く
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    // データベースとのコネクションを切る
    await prisma.$disconnect();
  });
