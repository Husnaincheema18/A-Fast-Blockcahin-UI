import React from 'react';
import Button from './Button';

const Hero = () => {
  return (
    <div className='w-full h-[780px] grid grid-cols-2  lg:gap-80'>
    <div>
        <img src='Assets/left.png' alt='left' className='w-[92%] h-[75%]'/>
    </div>
    <div>
        <img src='Assets/right.png' alt='right' className='w-[100%] h-[98%]'/>
    </div>
    <div className='absolute w-[100%] h-[50%] text-center m-auto mt-40 place-self-center'>
    <img src='Assets/Blockchain.png' alt='Blockchain text pic' className='w-[36%] min-h-auto max-h-[23%] m-auto'/>
    <img src='Assets/scalableai.png' alt='scalableai' className='w-[23%] min-h-auto max-h-[23%] m-auto pt-6'/>
    <p className='w-[48%] text-milkwhite text-2xl font-light font-inter m-auto mt-14'>Bring blockchain to the people. Solana supports experiences for power users, new consumers, and everyone in between.</p>
    <div className='flex justify-evenly w-[30%] m-auto mt-12'>
    <Button bg='bg-purple hover:bg-lightpurple' text='CONNECT WALLET' />
    <Button border='border-white border-[1px]' text='READ DOCS'/>
    </div>
    </div>
    </div>
  )
}

export default Hero;