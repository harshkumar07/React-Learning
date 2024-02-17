import React from 'react'

function Filter({filterData,category,setCategory}) {

  function FilterHandler(title){
    setCategory(title);
  }

  return (
    <div className='filter'>
      {filterData.map((data)=>(
       <button
       className={`filter-button ${category === data.title ? 'active' : 'not-active'}`}
       key={data.id}
       onClick={() => FilterHandler(data.title)}
     >
       {data.title}
     </button>
      ))}
    </div>
  )
}

export default Filter
