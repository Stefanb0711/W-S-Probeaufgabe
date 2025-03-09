import {useEffect, useState} from "react";
import axios from "axios";

export default function FooterComponent() {

    const [visitorCount, setVisitorCount] = useState<number>(0);



    const trackVisitorsURL = "/api/trackVisitors";


    const getVisitors = async () => {
        const response = await axios.get(trackVisitorsURL);

        console.log("GetVisitorsAnswer: ", response.data["count"]);



        setVisitorCount(response.data["count"]);

    }

    useEffect(() => {
        getVisitors();

    }, []);


    return (
        <footer className="bg-gray-800 text-white py-4 w-full">
            <div className="text-center">
                <h3 className="text-2xl"> Besucheranzahl: {visitorCount}</h3>
            </div>
        </footer>

    )
}