import React from 'react'
import Card from './Card'

function Tours({tours,removeTour}) {
  
    function RenderTours(){
        return tours.map((tour)=>(
            <Card key={tour.id} {...tour} removeTour={removeTour}/>
        ));
    }
  return (
    <div className='container'>
      <div><h2 className='title'>Plan With Harsh </h2></div>
      <div className='cards'>{RenderTours()}</div>
    </div>
  )
}

export default Tours
