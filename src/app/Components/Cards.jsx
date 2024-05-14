import React from 'react';
import { cardData } from '../Constants/index.js';

const Cards = () => {
  return (

    <div  className='w-full h-[900px] relative'>
  
      <img src='Assets/cardsbg.png' alt='cardsbg' className='w-full h-full opacity-40'/>
      <img src='Assets/Arrow 1.png' alt='arrowtop' className='w-60 absolute top-20 lg:left-[29%]'/>
      <img src='Assets/Arrow 2.png' alt='arrowbottom' className=' w-48 absolute bottom-80 lg:right-[32%]'/>
  
     
      <div className='absolute top-20'>
      <div className='grid lg:grid-cols-3 md:grid-cols-1 lg:w-[70%] w-[90%] gap-12 m-auto mt-10'>
    {
        cardData.map((currentItem, index)=>{
  return <div className={`${currentItem.style} bg-primary rounded-3xl`} key={index}>
    <div className='flex flex-1'>
        <img src={currentItem.url} alt={currentItem.id}/>
        <h1 className='text-milkwhite text-4xl font-inter pl-5'> {currentItem.heading}</h1>
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