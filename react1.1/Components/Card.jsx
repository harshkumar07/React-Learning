import React from 'react'
import '../src/App.css'

function Card(props) {
  return (
    <div className='Card'>
        {props.children}
    </div>
  )
}

export default Card
