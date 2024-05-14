import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary rounded-t-lg m-auto lg:mt-0 mt-64 pt-3 t left-0 right-0'>
      <div className='grid lg:grid-cols-2 grid-cols-1 lg:gap-72  gap-3 lg:w-[65%] w-[40%] h-[100%] m-auto'>
        <div className='pt-16'>
        <img src='Assets/minilogo.png' alt='Mini logo' className='size-8' />
        <p className='text-white text-sm font-light pt-6'>Managed by solana Foundation</p>
        <div className='py-6'>
        <img src='Assets/socialicons.png' alt='social Icon' className='w-auto lg:w-[206px] h-[30px] sm:h-auto' />
        <p className='text-oslogrey text-md font-light pt-5'>© 2024 Solana Foundation.All rights reserved.</p>
        </div>
        </div>
         <span>
            <div className='flex flex-1 justif-between m-auto pt-16'>
            <p className='text-white text-md font-extralight'>GET CONNECTED</p>
            <img src='Assets/langlogo.png' alt='English logo' className='w-[70px] h-[20px] ml-8' />
           </div>
           <p className='text-oslogrey text-md pt-3 '>Ecosystem</p>
           <p className='text-oslogrey text-md pt-4 '>Blog</p>
           <p className='text-oslogrey text-md pt-4 '>Newsletter</p>
           </span>
           </div>
         </div>
  )
}

export default Footer