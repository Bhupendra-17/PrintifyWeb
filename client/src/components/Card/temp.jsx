import React from 'react'
import Profits from './profits.svg'
import Robust from './robust-scaling.svg'
import Best from './best-selection.svg'

function temp() {
    const items = [
        { id: 1, title: 'Higher Profits', desc: 'We offer some of the lowest prices in the industry because print providers continuously compete to win your business.', image: Profits },
        { id: 2, title: 'Robust Scaling', desc: 'Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.', image: Robust },
        { id: 3, title: 'Best Selection', desc: 'With 900+ products and top quality brands, you can choose the best products for your business.', image: Best },

    ]
    return (
        <div className='w-screen  mt-16'>
            <div className='mx-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 py-2 hover:cursor-pointer'>
                {items.map((item) => (
                    <div key={item.id}
                        className='border border-gray-400 rounded-xl flex flex-col justify-center p-4 text-center shadow-green-300 shadow-md 
                transition transform hover:-translate-y-3 duration-300 hover:shadow-green-500'>
                        <img src={item.image} alt=""
                            className='rounded-full h-36 w-36 m-auto' />
                        <h1 className='font-bold text-3xl py-3'>{item.title}</h1>
                        <p className='text-lg text-gray-700 font-semibold'>{item.desc}</p>
                    </div>
                ))
                }
            </div>
        </div >
    )
}

export default temp