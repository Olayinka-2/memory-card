import Card from "./card";
import {useState, useEffect} from "react";

export default function MainContent({data, score}) {
   const [shuffledData, setShuffledData] = useState([]);

   const shuffleArray = (array) => {
         let shuffled = [...array];
         for (let i = shuffled.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
         }
         return shuffled;
   }

   const reshuffleCards = () => {
      setShuffledData(prevData => shuffleArray(prevData));
   };

   useEffect(() => {
      if(data) {
         setShuffledData(shuffleArray(data['data']));
      }
   }, [data]);

   return (
      <>
         <div className="main-container">
            <div className="card-container">
               {
                  shuffledData.map((cardData) => (
                     <Card 
                     imgUrl ={cardData['images']['downsized_medium']['url']} 
                     title = {cardData['title']} 
                     uniqueID={cardData['id']}
                     key={cardData['id']} 
                     score = {score}
                     reshuffleCards = {reshuffleCards} />
                  ))
               }
               
            </div>
         </div>
      </>
   )
}