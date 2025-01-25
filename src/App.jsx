import GetGiphy from "./components/giphySearch";
import Header from "./components/header";
import Footer from "./components/footer";
import { useState } from "react";


function App() {
  const [scoreCount, setScoreCount] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [clickedBoxes, setClickedBoxes] = useState([]);
  return(
    <>
      <Header  score = {{scoreCount, setScoreCount, bestScore}}/>
      <GetGiphy score = {{scoreCount, setScoreCount, clickedBoxes, setClickedBoxes, bestScore, setBestScore}}/>
      <Footer />
    </>
  )
}

export default App;