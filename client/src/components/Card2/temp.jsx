import React from 'react';
import Bg from './bg2.png';

function Temp() {
    return (
        <div
            className="mx-12 px-2 md:px-12 lg:px-12 flex justify-around gap-5 sm:gap-8 md:gap-12 lg:gap-14 items-center bg-cover bg-center  rounded-2xl transition transform hover:shadow-lg hover:scale-102 duration-500"
            style={{ backgroundImage: `url(${Bg})` }}
        > 
            <h1 className="text-green-900 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-justify py-10 ">
                Are you a large business looking for custom solutions?
            </h1>
            <button className='w-32  bg-stone-200 rounded-xl text-lg font-semibold px-3 py-2 transition transform hover:shadow-lg hover:-translate-y-1 duration-300'>
                Talk to sales
            </button>
        </div>
    );
}

export default Temp;
