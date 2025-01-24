export default function Card({imgUrl}) {
   console.log(imgUrl);

   return (
      <>
         <div className="card">
            <div className="card-img">
               <img src={imgUrl} alt="..." />
            </div>
            <div className="card-title">
               Animal Name
            </div>
         </div>
      </>
   )
}
