"use client";

import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import axios from "axios";
import {ChuckNorrisApiAnswerModel} from "@/models/chuckNorrisApiModel.model";
import {Header} from "next/dist/lib/load-custom-routes";
import HeaderComponent from "@/components/header.component";
import {useState, useEffect} from "react";
import FooterComponent from "@/components/footer.component";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {


  const [quote, setQuote] = useState<string>("");


  const apiUrl: string = "https://api.chucknorris.io/jokes/random?category=dev";




  const getQuoteFromApi = async () => {
    const response  = await axios.get(apiUrl);

    console.log(response.data.value);
    setQuote(response.data.value);


  }






  useEffect(() => {
    getQuoteFromApi();


    //getVisitors();

  }, []);



  /*
  const getVisitorcount = async () => {
    const visitorCount = await prisma.visitor_count.count({
      where: {
        id: 1
      }
    });

    console.log("Visitorcount: ", visitorCount);
  }
  */




    /*
    const fetchData = async () => {
      try {
        const response = await axios.get(trackVisitorsUrl);
        console.log("Response: ", response); // Führe hier weitere Aktionen aus
      } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
      }
    };

    fetchData();
     */


  return (
      <div
          className={`${geistSans.variable} ${geistMono.variable} grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]`}
      >
        <HeaderComponent />

        <main className="flex justify-center items-center h-screen w-full">
          <div className="flex items-center">
            <div>
              <img width={400} src={"chuck-norris.webp"} alt="Logo" />
            </div>

            <div
                style={{ marginLeft: '50px', width: '500px' }}
                className="flex flex-col justify-center items-center max-w-lg"
            >
              <h1 className="text-2xl break-words items-center text-center">
                {quote}
              </h1>
              <button
                  style={{ marginTop: '30px' }}
                  className="px-6 py-3 bg-blue-500 text-white font-semibold
        rounded-lg shadow-md hover:bg-blue-600
        focus:outline-none focus:ring-2
        focus:ring-blue-400 focus:ring-offset-2"
                  onClick={getQuoteFromApi}
              >
                Neuer Witz
              </button>
            </div>
          </div>
        </main>

        <FooterComponent />
      </div>


  );


}



