import React from 'react';

const Button = (props) => {
  return (
    <button
      className={`${props.bg} ${props.border} lg:py-3 py-2 lg:px-6 px-2 text-white font-Roboto font-medium text-sm leading-5 text-center rounded-full cursor-pointer transition ease-in-out duration-300 relative`}>{props.text}
    </button>
  );
};

export default Button;
