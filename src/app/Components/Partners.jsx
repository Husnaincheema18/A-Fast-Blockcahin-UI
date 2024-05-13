import React from 'react';
import { Icons } from '../Constants/index.js';

const Partners = () => {
  return (
    <div className='w-[90%] lg:w-[100%] mt-24'>
        <p className='text-softblue text-lg uppercase font-inter text-center mb-6'>Powering tools and integrations from companies all around the world</p>
        <div className='grid grid-cols-4 lg:grid-cols-7 lg:w-[63%] gap-9 place-items-center m-auto'>
        {
            Icons.map((currentItem, index) => {
                return <div key={index}><img src={currentItem.url} alt={currentItem.id} /></div>
            })
        }
        </div>
    </div>
  )
}

export default Partners;