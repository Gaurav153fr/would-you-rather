import React from 'react';
import './loader.css'; // Import the CSS file

const Loader = ({ duration }:{duration:string}) => {
  const loaderStyle = {
    animation: `loadAnimation ${duration}s linear forwards`
  };

  return (
    <div className='h-80 w-20 max-md:h-10 max-md:w-full max-md:m-auto max-md:my-2 mx-4  rounded-3xl border-8 border-white overflow-hidden flex z-5'>
      <div className='w-full h-full bg-red-400 self-end' style={loaderStyle}></div>
    </div>
  );
}

export default Loader;
