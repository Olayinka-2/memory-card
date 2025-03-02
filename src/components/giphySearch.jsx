import { useEffect, useState } from "react";
import MainContent from "./mainContent";

export default function GetGiphy({score}) {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const [error, setError] = useState(null);

   const apiKey = 'CoAZfk6hEVDA5MBsvDYP3oqPMnlZXx1U';
   const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=12`;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();

            if (!response.ok) {
               throw new Error(`API request failed with status ${response.status}`);
            }
            setData(jsonData);
         } catch(error) {
            setError(error); // Store the error in state
            console.error('Error fetching data:', error);
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, []);
   return (
      <>
         <main>
         {
            loading ? (
               <p>Loading data...</p>
            ) : error ? (
               <p>Unable to reach API endpoint. Please try again later</p>
            ) : (
               <MainContent score = {score} data = {data} />
            )
         }
         </main>
      </>
   )
}