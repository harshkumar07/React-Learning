import React from 'react'
import { useState } from 'react'
import '../App.css'

function Card({id,image,info,price,name,removeTour}) {

    function readmoreHandler(){
        setReadmore(!readmore);
    }


    const [readmore,setReadmore]=useState(false);
    const description = readmore ? info :`${info.substring(0,200)}....`;

  return (
    <div className='card'>
        <img src={image} className='image'/>
        <div className='tour-info'>
            <div className='tour-details'>
               <h4 className='tour-price'>₹ {price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div className='description'>
                {description}
                <span className='read-more' onClick={readmoreHandler}>
                    {readmore? ` Show Less`:` Read More`}
                </span>
            </div>
            <div className='button'>
                <button className='button-red' onClick={()=>removeTour(id)}>
                    Not Interested
                </button>
            </div>
        </div>
        
      
    </div>
  )
}

export default Card
