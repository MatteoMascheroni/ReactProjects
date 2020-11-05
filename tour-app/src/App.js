import React,{useState,useEffect} from "react";
import './App.css';
import Tour from "./Tour";
import Loading from "./Loading";

const url ="https://course-api.com/react-tours-project"

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours,setTours] = useState([]);

  const fetchTours = async() => {
    try {
      const response =  await fetch(url);
      const tours = await response.json();
      setIsLoading(false)
      setTours(tours)

    } catch (error){
      console.log(error)
    }
  }

  const onRemove = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  useEffect(() => {
    fetchTours();
  },[]);

  if(isLoading) {
    return( 
    <main>
     <Loading/>
    </main>)
  }  
  if(tours.length === 0) {
    return(
    <main>
     <div>
       No tours left
       <button onClick={() => fetchTours()}>Refresh</button>
     </div>
    </main>)
  }
  return(
    <div>
      {tours.map((tour)=>(<Tour key={tour.id} {...tour} onDelete={onRemove}/>)) }
    </div>
  )
}

export default App;
