import React from 'react'
import '../App.css'

function Spinner() {
  return (
    <div className='loader-icon'>
        <span className="loader"></span>
        <div className='loading'>Loading...</div>
    </div>
  )
}

export default Spinner
