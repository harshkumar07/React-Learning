import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Filter from './Components/Filter'
import Cards from './Components/Cards'
import {apiUrl,filterData} from './data'
import Spinner from './Components/Spinner'

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState('');
  const [category,setCategory]= useState(filterData[0].title);

  const fetchData = async ()=>{
    setLoading(true);
    try{
      const res = await fetch(apiUrl);
      const output = await res.json();
      console.log(output.data);
      setCourses(output.data)
    }
    catch(error){
      toast.error("Error Occurred",error);
    }
    setLoading(false);
  }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div className='App'>
      <div> <Navbar/></div>
      <div> <Filter category={category} setCategory={setCategory} filterData={filterData}/> </div>
      <div>{loading ? <Spinner/>:<Cards courses={courses} category={category}/>}</div>
    </div>
  )
}

export default App
