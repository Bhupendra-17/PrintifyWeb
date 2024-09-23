import React from 'react';
import Logo from './logo.png';

const socialLinks = [
    { href: "#", icon: "fa-brands fa-facebook" },
    { href: "#", icon: "fa-brands fa-instagram" },
    { href: "#", icon: "fa-brands fa-linkedin" },
    { href: "#", icon: "fa-brands fa-square-x-twitter" },
    { href: "#", icon: "fa-brands fa-youtube" },
    { href: "#", icon: "fa-brands fa-tiktok", isRound: true },
    { href: "#", icon: "fa-brands fa-reddit-alien", isRound: true },
];

const temp = () => {
    return (
        <div className='w-full px-6 flex flex-col md:flex-row lg:flex-row py-4 justify-around gap-5 bg-white'>
            <div>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='md:mx-3 sm:mx-2 flex gap-2 sm:gap-3 md:gap-4 lg:gap-4 text-3xl md:text-4xl lg:text-4xl text-green-500 items-center'>
                {socialLinks.map(({ href, icon, isRound }, index) => (
                    <a
                        key={index}
                        href={href}
                        className={`transition transform hover:scale-105 hover:shadow-xl duration-300 ${isRound ? 'text-white bg-green-500 rounded-full text-xl lg:text-2xl md:text-2xl pt-1 md:pt-1 lg:py-1 sm:pt-1.5 w-9 h-9 text-center' : ''}`}
                    >
                        <i className={icon}></i>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default temp;
