import Card from "./card";

export default function MainContent({data}) {
   let jD;
   if(data !== undefined) {
      jD = data;
   } else {
      return;
   }
   let img = jD['data'][0]['images']['downsized_medium']['url']
   return (
      <>
         <div className="main-container">
            <div className="card-container">
               <Card imgUrl ={img}  />
            </div>
         </div>
      </>
   )
}