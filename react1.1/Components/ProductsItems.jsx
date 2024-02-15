import React,{useState} from 'react';
import Date from './Date';

function ProductsItems(props) {

    const [title,setTitle]= useState(props.title);

    function clickHandler(){
        setTitle('Popcorn')
        console.log("Clicked");
    }
    const monthNames = ['December','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November' ];
    

    const year = props.date.getFullYear();
    const monthIndex = props.date.getMonth(); 
    const month = monthNames[monthIndex]; 
    const day = ('0' + props.date.getDate()).slice(-2); 
  return (
    <div className='ProductsItems'>
      <Date year={year} month={month} day={day}/>
      <h3>{title}</h3>
      <button onClick={clickHandler}>Add to cart</button>
    </div>
  )
}

export default ProductsItems;
