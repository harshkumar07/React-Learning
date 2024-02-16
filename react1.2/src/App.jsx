import { useState } from 'react'
import data from './data'
import './App.css'
import Tours from './Components/Tours';

function App() {

  const [tours,setTours]=useState(data);

  function removeTour(id){
    const newTours = tours.filter((tour)=>(tour.id !== id));
    setTours(newTours);
  }

  if(tours.length==0){
    return <div className='refresh'>
      <h2>No Tours Left</h2>
      <button className='white-btn' onClick={()=>setTours(data)}>Refresh</button>
    </div>
  }
  return (
    <div>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  )
}

export default App;
