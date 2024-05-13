import React from 'react';
import { cardData } from '../Constants/index.js';

const Cards = () => {
  return (

    <div  className='w-full h-[864px] mt-20  relative'>
  
      <img src='Assets/cardsbg.png' alt='cardsbg' className='w-full h-full opacity-40'/>
      <img src='Assets/Arrow 1.png' alt='arrowtop' className='w-60 absolute top-20 lg:left-[29%]'/>
      <img src='Assets/Arrow 2.png' alt='arrowbottom' className=' w-48 absolute bottom-80 lg:right-[32%]'/>
  
     
      <div className='absolute top-20 bottom-96'>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 lg:w-[70%] w-[90%] lg:gap-x-12 md:gap-x-2 m-auto mt-10 mb-3'>
    {
        cardData.map((currentItem, index)=>{
  return <div className={`${currentItem.style} bg-primary rounded-3xl`} key={index}>
    <div className='flex'>
        <h1 className='text-white text-4xl  font-inter'> {currentItem.heading}</h1>
    </div>
    <p className='text-milkwhite text-left font-inter text-xl font-thin leading-relaxed pt-2'>{currentItem.text}</p>
      
    </div>
        })
    }
    </div>     
    </div>
    </div>
    
  )
}

export default Cards;