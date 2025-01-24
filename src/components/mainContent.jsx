import Card from "./card";

export default function MainContent({data}) {
   let jD;
   if(data !== undefined) {
      jD = data;
   } else {
      return;
   }
   let cardArray = jD['data'];
   console.log(cardArray);

   return (
      <>
         <div className="main-container">
            <div className="card-container">
               {
                  cardArray.map((cardData) => (
                     <Card imgUrl ={cardData['images']['downsized_medium']['url']} title = {cardData['title']} key={cardData['id']}/>
                  ))
               }
               
            </div>
         </div>
      </>
   )
}