export default function Header() {
   return (
      <>
         <header>
            <div className="container">
               <div className="game-name">Animal Memory Game</div>
               <div className="game-scoreboard">
                  <div className="score"><span>Score:</span> 0</div>
                  <div className="bestScore"><span>Best score:</span> 0</div>
               </div>
            </div>
            <div className="game-info">Get points by clicking on an image but don&apos;t click on any more than once!</div>
         </header>
      </>
   )
}