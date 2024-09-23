import React, { useEffect, useRef } from 'react';
import Big from './big.png';
import Etsy from './etsy.png';
import Shopify from './shopify.png';
import Wix from './wix.png';
import Logo from './logo.png';

function Box() {
    const boxRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('scale-100', 'opacity-100');
                        entry.target.classList.remove('scale-0', 'opacity-0');
                    }
                });
            },
            { threshold: 0.5 } // Adjust the threshold based on when you want the animation to start
        );

        boxRefs.current.forEach((box) => {
            if (box) observer.observe(box);
        });

        return () => {
            if (boxRefs.current) {
                boxRefs.current.forEach((box) => observer.unobserve(box));
            }
        };
    }, []);

    return (
        <div>
            <div className="backdrop:blur-md bg-neutral-300/30 flex flex-col  gap-6 px-4 py-6 text-center">
            <h1 className="text-4xl px-2 text-gray-900 font-bold">Connect your store</h1>
            <p className="text-lg text-gray-700 px-3 py-1">
            Printify easily integrates with major e-commerce platforms and marketplaces.
            </p>
        </div>
            <div className="flex justify-center items-center backdrop:blur-md bg-neutral-400/15  relative h-[70vh] p-5">
                <div className="relative w-full h-full max-w-5xl">
                    {/* Wix */}
                    <div ref={(el) => (boxRefs.current[0] = el)} className="bg-white rounded-xl  p-2 sm:p-3 md:p-4 w-fit absolute top-[13%] left-[10%] sm:left-[12%] md:left-[15%] lg:left-[23%] shadow-lg transition-transform transform scale-0 opacity-0 hover:scale-105 duration-500">
                        <img src={Wix} alt="Wix" className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-16 lg:h-16" />
                    </div>
                    {/* Etsy */}
                    <div ref={(el) => (boxRefs.current[1] = el)} className="bg-white rounded-xl  p-2 sm:p-3 md:p-4 w-fit absolute top-[10%] left-[45%] sm:left-[50%] md:left-[55%] lg:left-[60%] shadow-lg transition-transform transform scale-0 opacity-0 hover:scale-105 duration-500 delay-100">
                        <img src={Etsy} alt="Etsy" className="w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 lg:w-24 lg:h-24" />
                    </div>
                    {/* Logo */}
                    <div ref={(el) => (boxRefs.current[2] = el)} className="bg-white rounded-xl  p-2 sm:p-3 md:p-4 w-fit absolute top-[35%] left-[30%] sm:left-[35%] md:left-[35%] lg:left-[40%] shadow-lg transition-transform transform scale-0 opacity-0 hover:scale-105 duration-500 delay-200">
                        <img src={Logo} alt="Logo" className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-18 lg:h-18" />
                    </div>
                    {/* Shopify */}
                    <div ref={(el) => (boxRefs.current[3] = el)} className="bg-white rounded-xl  p-2 sm:p-3 md:p-4 w-fit absolute top-[35%] left-[60%] sm:left-[65%] md:left-[70%] lg:left-[75%] shadow-lg transition-transform transform scale-0 opacity-0 hover:scale-105 duration-500 delay-300">
                        <img src={Shopify} alt="Shopify" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </div>
                    {/* And More */}
                    <div ref={(el) => (boxRefs.current[4] = el)} className="bg-white rounded-xl  p-2 sm:p-3 md:p-4 w-fit absolute top-[62%] left-[40%] sm:left-[45%] md:left-[50%] lg:left-[55%] shadow-lg transition-transform transform scale-0 opacity-0 hover:scale-105 duration-500 delay-400">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-16 lg:h-16 text-lg sm:text-xl md:text-xl lg:text-xl font-bold text-center">
                            And More
                        </div>
                    </div>
                    {/* Big */}
                    <div ref={(el) => (boxRefs.current[5] = el)} className="bg-white rounded-xl  p-2 sm:p-3 md:p-4 w-fit absolute top-[60%] left-[10%] sm:left-[12%] md:left-[15%] lg:left-[18%] shadow-lg transition-transform transform scale-0 opacity-0 hover:scale-105 duration-500 delay-500">
                        <img src={Big} alt="Big" className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
