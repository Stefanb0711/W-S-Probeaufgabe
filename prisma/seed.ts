import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    const visitor_count = await prisma.visitor_count.upsert({
        where: {
            id: 1,
        },
        update: {},
        create: {
            count: 0,
        }

    })
    console.log({ visitor_count})
}

main()
    .then(() => prisma.$disconnect())
    .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
})