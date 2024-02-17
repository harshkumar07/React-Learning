import React, { useState } from 'react'
import {  toast } from 'react-toastify';

function Card(props) {

    const [logo,setLogo]= useState('🩶');
    let course =props.course;
    let likedCourses =props.likedCourses;
    let setLikedCourses =props.setLikedCourses;
    let description =`${course.description.substring(0,100)}..`

    function eventHandler(){
      if(likedCourses.includes(course.id)){
        setLikedCourses((prev)=>prev.filter((cid)=>(cid !== course.id)));
        toast.warning("Liked Removed");
        setLogo('🩶');
      }
      else{
        if(likedCourses.length === 0){
            setLikedCourses([course.id]);
        }
        else{
           setLikedCourses((prev)=>[...prev,course.id]);
        }
        toast.success("Liked Successfully");
        setLogo('❤️');
        
      }
    }
  return (
    <div className='card-container'>
      <div className='card-image'>
        <img className="image"src={course.image.url} alt={course.image.alt}/>
      </div>

      <div className='card-button'>
            <button className='button' onClick={eventHandler}>
            {logo}
            </button>
     </div>

      <div className='card-description'>
        <h4 className='card-title'>{course.title} </h4>
        <p className='card-data'>{description} </p>
    </div>
    </div>
    
  )
}

export default Card;  
