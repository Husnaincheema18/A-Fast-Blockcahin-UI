import React from 'react';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className={`w-full h-[90px] flex justify-center bg-primary absolute top-0 left-0 right-0 m-auto`}>
     <div className={`flex justify-between lg:w-[66%] sm:w-[100%] h-[52px] bg-primary m-auto mt-[19px]`}>
     <img src={`Assets/logo.png`} alt={`logo`} className={`w-auto h-[20px] lg:w-[181px] lg:h-[27px] relative top-3`}/>
     <Button bg='bg-purple hover:bg-lightpurple' text={`CONNECT WALLET`}/>
     </div>
    </nav>
  );
};

export default Navbar;
