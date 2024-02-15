import React from 'react'

function Date(props) {
  return (
    <div className='Date'>
           <h2>{props.day}</h2>
           <p>{props.month}</p> 
           <p>{props.year}</p>
    </div>
  )
}

export default Date
