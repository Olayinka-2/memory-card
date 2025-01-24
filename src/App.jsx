import GetGiphy from "./components/giphySearch";
import Header from "./components/header";
import { useState } from "react";


function App() {
  const [scoreCount, setScoreCount] = useState(0);
  return(
    <>
      <Header  score = {{scoreCount, setScoreCount}}/>
      <GetGiphy score = {{scoreCount, setScoreCount}}/>
    </>
  )
}

export default App;