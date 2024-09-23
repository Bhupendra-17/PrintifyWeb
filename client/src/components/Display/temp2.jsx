import React, { useEffect, useRef, useState } from 'react';
import Temp1 from './temp1';

function Temp2() {
  const [isVisible, setIsVisible] = useState(false);
  const paragraphRef = useRef(null);

  // This effect will trigger the slide-in animation on first scroll into view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the animation is triggered
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the paragraph is visible
    );

    if (paragraphRef.current) {
      observer.observe(paragraphRef.current);
    }

    return () => {
      if (paragraphRef.current) {
        observer.unobserve(paragraphRef.current);
      }
    };
  }, []);

  return (
    <div>
      <div className="backdrop:blur-md bg-neutral-300/30 flex flex-col sm:flex-col md:flex-col lg:flex-row gap-6 justify-around px-4 py-20 md:text-center">
        <h1 className="max-w-80 text-3xl px-2 text-gray-900 font-bold">Trusted by over 8M+ sellers around the world</h1>
        
        {/* Apply the slide-in effect */}
        <p
          ref={paragraphRef}
          className={`max-w-96 text-lg text-gray-700 px-3 py-1 transform transition-transform duration-1000 ease-out ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-1000'
          }`}
        >
          Whether you are just getting started or run an enterprise-level e-commerce business, we do everything we can to ensure a positive merchant experience.
        </p>
      </div>

      {/* Temp1 Component */}
      <Temp1 />
    </div>
  );
}

export default Temp2;
