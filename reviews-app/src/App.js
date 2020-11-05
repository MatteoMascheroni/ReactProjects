import './App.css';
import React,{useState} from "react";
import Rev from "./Review";
import reviews from "./data";

function App() {
  const [rev,setRev] = useState(reviews[0]);

  const onNextView = (id) => {
    if (id === reviews.length){
      setRev(reviews[0])
    }
    else{
    setRev(reviews[id])
    }
  }

  const onPrevView = (id) => {
    if (id === 1){
      setRev(reviews[reviews.length-1])
    }
    else{
      setRev(reviews[id-2])
    }
  }
  
  return (
    <main>
      <h3>Our Revies</h3>
      <Rev {...rev} onNext = {onNextView} onPrev = {onPrevView}/>
    </main>
  );
}

export default App;
