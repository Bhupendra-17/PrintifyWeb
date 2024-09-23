import React, { useEffect, useRef, useState } from 'react';
import Img from './img.png';

function Temp() {
    const [animate, setAnimate] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setAnimate(true);
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
        <div className='relative'>
            <div
                ref={ref}
                className={`bg-gradient-to-r from-sky-950 to-emerald-800 rounded-2xl mx-4 sm:mx-10 md:mx-20 lg:mx-32 text-stone-100 p-8 min-h-screen transition-transform duration-1000 ${animate ? 'translate-x-0' : '-translate-x-full'}`}
            >
                <h2 className='text-3xl max-w-56 font-bold py-2 px-1'>Make Money, Risk-Free</h2>
                <p className='text-lg max-w-64 mb-16'>You pay for fulfillment only when you make a sale</p>
                <div className='flex flex-col gap-6 bg-neutral-900 w-fit rounded-2xl p-4 font-semibold text-lg md:text-xl lg:text-xl'>
                    <div className='flex justify-between gap-6'>
                        <p>You sell a T-Shirt </p> <p>$30</p>
                    </div>
                    <div className='flex justify-between gap-6'>
                        <p>You pay for its production </p> <p>$12</p>
                    </div>
                    <hr className='mx-2 text-green-800' />
                    <div className='flex justify-between gap-6 text-green-500'>
                        <p>Your Profit </p> <p>$18</p>
                    </div>
                    <button className='px-4 py-2 text-xl font-semibold bg-green-500 text-white w-fit rounded-xl transition transform hover:text-black hover:bg-white duration-300'>
                        Start selling
                    </button>
                </div>
            </div>
            <div className='absolute lg:flex hidden top-[20%] left-[60%] h-[70%]'>
                <img src={Img} alt="" className='rounded-2xl' />
            </div>
        </div>
    );
}

export default Temp;
