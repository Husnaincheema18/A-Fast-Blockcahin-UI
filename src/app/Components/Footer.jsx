import React from 'react'

const Footer = () => {
  return (
    <div className='bg-primary w-full h-64 rounded-t-lg mt-0 mb-0 top-0'>
      <div className='grid grid-cols-2 gap-64 lg:w-[65%] w-[80%] m-auto'>
        <div className='pt-16'>
        <img src='Assets/minilogo.png' alt='Mini logo' className='lg:w-6 lg:h-5' />
        <p className='text-white text-xs font-light pt-5'>Managed by solana Foundation</p>
        <div className='py-5 sm:py-1'>
        <img src='Assets/socialicons.png' alt='social Icon' className='w-[206px] sm:w-auto h-[30px] sm:h-auto' />
        <p className='text-oslogrey text-xs font-light pt-3'>© 2024 Solana Foundation.All rights reserved.</p>
        </div>
        </div>
         <span>
            <div className='flex justif-between m-auto pt-16'>
            <p className='text-white text-sm font-extralight'>GET CONNECTED</p>
            <img src="Assets/langlogo.png" alt="English logo" className='w-[70px] h-[20px] ml-8' />
           </div>
           <p className='text-oslogrey text-xs pt-3 pl-8 sm:pr-0 md:pl-0'>Ecosystem</p>
           <p className='text-oslogrey text-xs pt-4 pl-8 sm:pr-0 md:pl-0'>Blog</p>
           <p className='text-oslogrey text-xs pt-4 pl-8 sm:pr-0 md:pl-0'>Newsletter</p>
           </span>
           </div>
         </div>
  )
}

export default Footer