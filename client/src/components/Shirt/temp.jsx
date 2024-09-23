import React, { useState, useEffect } from 'react';
import Shirt from './tshirt.png';
import Des1 from './des1.png';
import Des2 from './des2.png';
import Des4 from './des4.png';

function Temp() {
  const images = [Des1, Des2, Des4];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically switch images at an interval (3 seconds)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='flex flex-col items-center mt-5'>
      {/* Shirt Image */}
      <div className='relative'>
        <img src={Shirt} alt="shirt" className='w-[350px]' />
        
        {/* Overlay Slider */}
        <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center'>
          {images.map((image, index) => (
            <div
              key={index}
              className={`absolute w-40 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              <img src={image} alt={`design-${index + 1}`} className='w-[200px]' />
            </div>
          ))}
        </div>
      </div>

      {/* Dots to indicate current slide */}
      <div className='mt-4 flex space-x-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default Temp;
