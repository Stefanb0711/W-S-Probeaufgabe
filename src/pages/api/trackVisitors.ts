// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../prisma/prisma-client";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {



    try {
        const currentVisit = await prisma.visitor_count.findFirst({
        });

        if (currentVisit) {
            const updatedVisit = await prisma.visitor_count.update({
                where: {
                    id: currentVisit.id
                },
                data: {
                    count: currentVisit.count + 1
                },
                select: {
                    count: true
                }
            });

            console.log("Anzahl der Besucher: ", updatedVisit.count);
            return res.status(200).json({ count: updatedVisit.count });


        } else {
            return res.status(404).json({ error: "No visitor count found" });

        }

    } catch (error) {
        res.status(500).json({error: "An error occurred"});
    }

    //res.status(200).json({ name: "John Doe" });
}
