import React, { useState } from 'react';
import P1 from './p1.png'
import P2 from './p2.png'
import P3 from './p3.png'

const CardSlider = () => {
    const cards = [
        { id: 1, image: P1, title: "CREATE", subhead: "custom products", description: "Easily add your designs to a wide range of products using our free tools." },
        { id: 2, image: P2, title: "SELL", subhead: "on your teams", description: "You choose the products, sale price, and where to sell." },
        { id: 3, image: P3, title: "WE HANDLE", subhead: "fulfilment", description: "Once an order is placed, we automatically handle all the printing and deliveries logistics." },
    ];

    return (
        <div className="my-8 w-screen">
            <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-500 via-zinc-300 to-zinc-100 py-8  mx-12 flex gap-7">
                {/* Card Slider */}
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="flex flex-col px-4"
                    >
                        <img src={card.image} alt="" className='w-44 m-auto' />
                        <div className="p-6 mt-5 bg-white shadow-lg rounded-lg text-center flex flex-col justify-between h-full">
                            <div>
                                <h2 className="text-2xl text-green-500 font-bold">{card.title}</h2>
                                <h3 className='text-2xl font-bold mb-4'>{card.subhead}</h3>
                            </div>
                            <p className="text-gray-700">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardSlider;
