import { useState } from 'react'
import './App.css'
import Item from '../Components/Item'
import Products from '../Components/Products'
import ProductForm from '../Components/ProductForm'
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
