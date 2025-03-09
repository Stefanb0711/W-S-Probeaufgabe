// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

import { prisma } from "../../../lib/prisma";


export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse,
) {


    /*
    const visitorData = await prisma.visitor_count.findFirst();

    console.log("Visitordata: ", visitorData, "");

    return res.status(200).json({ count: visitorData });
       */


    try {
        const visitorData = await prisma.visitor_count.findFirst();


        if (visitorData) {
            const updatedVisitorData = await prisma.visitor_count.update({
                where: {
                    id: visitorData.id,
                },
                data: {
                    count: visitorData.count + 1,
                },
            });

            return res.status(200).json({ count: updatedVisitorData.count });

        } else {

            const newVisitorData = await prisma.visitor_count.create({
                data: {
                    count: 1,
                },
            });

            return res.status(201).json({ count: newVisitorData.count });
        }



    } catch (error) {
        console.error("Error updating visitor count:", error);
        return res
            .status(500)
            .json({ error: "An error occurred while updating the visitor count" });

    }




}
