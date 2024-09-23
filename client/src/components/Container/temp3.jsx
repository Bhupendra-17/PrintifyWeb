import React, { useEffect, useRef, useState } from 'react';
import Image from './bg1.jpg';

// This is the third container
function Temp3() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing after the first scroll
        }
      });
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className='flex flex-col md:flex-row lg:flex-row items-center mx-12 bg-white shadow-lg p-4 pb-12'
    >
      <img src={Image} alt="" className='h-56 md:h-64 lg:h-64 rounded-lg self-center' />
      {/* Text block */}
      <div
        className={`flex flex-col text-justify mx-6 py-2 transition-transform duration-500 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-30 opacity-0'
        }`}
      >
        <h2 className='text-3xl font-bold px-4 text-gray-900 text-center py-4'>
          Easily add your design to a wide range of products
        </h2>
        <p className='text-gray-600 text-lg pb-6'>
          With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products.
        </p>
        <a href="#" className='text-extrabold text-lg text-green-500'>All Products 🡢</a>
      </div>
    </div>
  );
}

export default Temp3;
