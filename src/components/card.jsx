   import { useState } from "react";

   export default function Card({ imgUrl, title, uniqueID, score, reshuffleCards }) {
   let scoreCount = score.scoreCount;
   let setScoreCount = score.setScoreCount;
   let setClickedBoxes = score.setClickedBoxes;
   let clickedBoxes = score.clickedBoxes;
   let  bestScore = score.bestScore;
   let setBestScore = score.setBestScore;

   function handleEvent(event) {
      if(!clickedBoxes.includes(uniqueID)) {
         setScoreCount((scoreCount) => scoreCount + 1);
         setClickedBoxes([
            ...clickedBoxes,
            uniqueID
         ])
      } else {
         if(scoreCount > bestScore) {
            setBestScore(scoreCount)
         }
         setScoreCount(0);
         setClickedBoxes([]);
      }
      reshuffleCards();
   }

   return (
      <>
         <div className="card" onClick={handleEvent}>
         <div className="card-img">
            <img src={imgUrl} alt={title} />
         </div>
         <div className="card-title">
            {title}
         </div>
         </div>
      </>
   );
   }