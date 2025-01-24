export default function Header({score}) {
   return (
      <>
         <header>
            <div className="container">
               <div className="game-name">Animal Memory Game</div>
               <div className="game-scoreboard">
                  <div className="score">Score: {score['scoreCount']}</div>
                  <div className="bestScore">Best score: 0</div>
               </div>
            </div>
            <div className="game-info">Get points by clicking on an image but don&apos;t click on any more than once!</div>
         </header>
      </>
   )
}