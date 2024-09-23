import React from 'react'
import Logo from './logo.png'


// The middle section on Navbar
function temp2() {
    return (
        <div className='flex text-lg px-2 gap-6'>
            <div className='flex items-center'>
                <img src={Logo} alt="" className='w-10' />
                <h1 className='text-3xl font-bold text-green-500'>Printify</h1>
            </div>
            <div className='flex justify-center'>
                <span className="py-5 px-2  hover:bg-slate-100">
                    <a href="#catalog">Catalog</a>
                </span>
                <span className="py-5 px-2  hover:bg-slate-100">
                    <a href="#how">How It Works</a>
                </span>
                <span className="py-5 px-2  hover:bg-slate-100">
                    <a href="#price">Pricing</a>
                </span>
                <span className="py-5 px-2  hover:bg-slate-100">
                    <a href="#services">Services</a>
                </span>
                <span className="py-5 px-2  hover:bg-slate-100">
                    <a href="#use">Use-cases</a>
                </span>
                <span className="py-5 px-2  hover:bg-slate-100">
                    <a href="#blog">Blog</a>
                </span>
                <span className="py-5 px-2  hover:bg-slate-100">
                    <a href="#help">Need Help?</a>
                </span>
            </div>
        </div>
    )
}

export default temp2