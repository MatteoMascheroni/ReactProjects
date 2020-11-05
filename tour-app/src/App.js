import React,{useState,useEffect} from "react";
import './App.css';
import Tour from "./Tour";

const url ="https://course-api.com/react-tours-project"

function App() {
  const [tours,setTours] = useState([]);
  const fetchTours = async() => {
    try {
      const response =  await fetch(url);
      const tours = await response.json();
      setTours(tours)
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTours();
  })
  
  return(
    <div>
      {tours.map((tour)=>(<Tour key={tour.id} {...tour}/>)) }
    </div>
  )
}

export default App;
