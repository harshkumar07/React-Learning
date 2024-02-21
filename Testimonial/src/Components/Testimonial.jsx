import React, { useState } from 'react';
import Card from './Card';
import { FiChevronLeft , FiChevronRight} from 'react-icons/fi';

function Testimonial(props) {
    let reviews = props.reviews;
    const [index ,setIndex]= useState(0);

    function leftClickHandler(){
        if(index-1 <0){
            setIndex(reviews.length -1);
        }else{
            setIndex(index-1);
        }
    }
    function rightClickHandler(){
        if(index+1 >=reviews.length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }
    function surpriseClickHandler(){
       let randomIndex = Math.floor(Math.random()*reviews.length);
       setIndex(randomIndex);
    }

  return (
    <div className='w-[85vw] md:w-[700px] h-[80vh] bg-white flex flex-col justify-center items-center mt-5 px-5 rounded-md drop-shadow-lg ' >
        <Card key={reviews[index].id} review={reviews[index]}/>
        <div className='flex text-3xl mt-5 gap-3 text-violet-400 mx-auto font-bold  justify-center'>
               <button 
               onClick={leftClickHandler}
               className=' cursor-pointer hover:text-violet-500'><FiChevronLeft/></button>
    
               <button 
               onClick={rightClickHandler}
               className='cursor-pointer hover:text-violet-500'><FiChevronRight/></button>

            </div>
            <div className='my-3 py-2'>
               <button 
               onClick={surpriseClickHandler}
               className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-8 py-2 rounded-md font-bold text-sm text-white '>Surprise Me</button>
            </div>
    </div>
  )
}

export default Testimonial;
