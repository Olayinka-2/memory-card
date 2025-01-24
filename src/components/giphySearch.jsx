import { useEffect, useState } from "react";
import MainContent from "./mainContent";

export default function GetGiphy() {
   const [loading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const apiKey = 'CoAZfk6hEVDA5MBsvDYP3oqPMnlZXx1U';
   const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=cat&limit=10`;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const response = await fetch(apiUrl);
            const jsonData = await response.json();
            console.log(jsonData);
            setData(jsonData);
         } catch(error) {
            console.log(error);
         } finally {
            setLoading(false);
         }
      }
      fetchData();
   }, []);
   return (
      <>
         {
            loading ? 'Loading data...': <MainContent data = {data}/>
         }
      </>
   )
}