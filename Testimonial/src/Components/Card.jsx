import React from 'react';
import { FaQuoteLeft, FaQuoteRight  } from 'react-icons/fa';


function Card(props) {
    let review = props.review;
    // absolute top-[-7rem] z-[10]
    return (
        <div className='flex flex-col md:relative'>
            <div className=' mx-auto mt-6'>
                <img  
                className='w-[140px] h-[140px] aspect-square rounded-full z-[25]'
                src={review.image} alt={`${review.name}'s Profile`} />
            </div>

            <div className='text-center mt-5'>
                <p className='font-bold text-2xl  tracking-wider capitalize '>{review.name}</p>
                <p className='uppercase text-violet-300 text-sm'>{review.job}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-2' >
                <FaQuoteLeft/>
            </div>

            <div className='text-center text-slate-500 mt-2'>
                <p>{review.text}</p>
            </div>

            <div className='text-violet-400 mx-auto mt-2' > 
                <FaQuoteRight/>
            </div>

           
            
        </div>
    );
}

export default Card;
