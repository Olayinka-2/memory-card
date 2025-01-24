export default function Card({imgUrl, title, id}) {
   return (
      <>
         <div className="card" key={id}>
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
