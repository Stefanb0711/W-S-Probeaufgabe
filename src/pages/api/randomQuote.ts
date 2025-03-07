import axios from 'axios';
import {NextApiRequest, NextApiResponse} from "next";
import {ChuckNorrisApiAnswerModel} from "@/models/chuckNorrisApiModel.model";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const apiUrl: string = "https://api.chucknorris.io/jokes/random?category=dev";

        const response = await axios.get<ChuckNorrisApiAnswerModel>(apiUrl);
        res.status(200).json(response.data);

    } catch (error) {
        res.status(500).json({ error: "API-Request fehlgeschlagen" });

    }
}