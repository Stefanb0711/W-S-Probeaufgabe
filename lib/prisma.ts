import { PrismaClient } from '@prisma/client'

//Erstell und Verwaltet eine Prismaclient-Instanz für Datenbankanfragen mit Prisma.

//Singletonmuster wird impelmentiert. Eine Instanz von Prisma im gesamten Projekt

const globalForPrisma = global as unknown as { prisma?: PrismaClient }



export const prisma = globalForPrisma.prisma || new PrismaClient({
    //Logging für Datenbankanfragen aktiviert
    log: ['query']
})

if (process.env.NODE_ENV !== 'production') {
    globalForPrisma.prisma = prisma
}