import React from 'react'

function temp(props) {
  return (
    <div className='text-lg font-semibold border border-gray-400 rounded-full px-2 py-1 w-fit cursor-pointer transition transform duration-300 hover:bg-green-500 hover:text-white shadow-md'>
        {props.title}
    </div>
  )
}

export default temp