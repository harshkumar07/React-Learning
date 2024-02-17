import { useState } from 'react'
import './App.css'
import Products from '../Components/Products'
import NewProduct from '../Components/NewProduct'

function App() {
  //const [input, setInput] = ({})
  const [products,setProducts] =useState([
  {
    id:'1',
    title:'Nirma',
    amount :100,
    date: new Date(2023,1,2),
  },
  {
    id:'2',
    title:'Surf Excel',
    amount :100,
    date: new Date(2051,12,10),
  },
  {
    id:'3',
    title:'Tide',
    amount :100,
    date: new Date(2021,9,10),
  }
  ,{
    id:'4',
    title:'Maggie',
    amount :100,
    date: new Date(2021,3,1),
  },
]);


function printProductData (data){
  console.log('From App.js', data);
  const dateString = data.date;
  const [yearStr, monthStr, dayStr] = dateString.split('-');

  const year = parseInt(yearStr);
  const month = parseInt(monthStr);
  const day = parseInt(dayStr);

  //Create a new Date object  
  const dateObject = new Date(year, month, day);
  data.date=dateObject;
    setProducts(prevProducts => [...prevProducts, data]);
}
  return (
    <div className='App'>
      <NewProduct printProduct={printProductData}/>
     <Products items={products}/>
    </div>
  )
}

export default App
