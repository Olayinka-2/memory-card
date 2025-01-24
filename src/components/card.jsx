import { useState } from "react"

export default function Card({imgUrl, title, id, score,reshuffleCards}) {
   console.log(score)
   let scoreCount = score['scoreCount'];

   let setScoreCount = score['setScoreCount'];

   function handleEvent() {
      setScoreCount(scoreCount => scoreCount + 1);
      reshuffleCards();
   }


   return (
      <>
         <div className="card" key={id} onClick={handleEvent}>
            <div className="card-img">
               <img src={imgUrl} alt={title} />
            </div>
            <div className="card-title">
               {title}
            </div>
         </div>
      </>
   )
}
