import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {

    //Datenbank wird mit startwerten initialisiert
    // Datenbankeintrag wird erstellt, falls keiner vorhanden ist, bzw. geupdated, falls schon vorhanden
    // danach wird die Verbindung getrennt
    // Ziel --> Der Db eine Grundkonfiguration geben


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