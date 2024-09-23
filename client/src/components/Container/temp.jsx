import React from 'react'
import Button from './temp2.jsx'

function temp() {
    const enlist = [
        { id: 1, item: '100% Free to use' },
        { id: 2, item: '900+ High-Quality Products' },
        { id: 3, item: 'Largest global print network' }
      ];
    return (
        <div className='lg:ml-12'>
            <h2 className='text-4xl lg:text-[44px] lg:font-extrabold font-semibold text-gray-900 mb-18'>
                Create and sell custom products
            </h2>
            <ul className='p-3 mb-3  w-fit'>
                {
                    enlist.map((item) => (
                        <li key={item.id} className='flex gap-2 mb-3 font-bold text-gray-600'>
                            <p className=' text-green-500'>✓</p>
                            {item.item}
                        </li>
                    ))
                }
            </ul>
            <div className='flex gap-3 mb-3'>
                <Button title="Start for free" />
                <Button title="How it works" />
            </div>
            <h2 className='font-semibold text-green-600'>Trusted by over 8M sellers around the world</h2>
        </div>
    )
}

export default temp