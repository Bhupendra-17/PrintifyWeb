// CardSlider.js
import React, { useState } from 'react';
import P1 from './p1.png'
import P2 from './p2.png'
import P3 from './p3.png'


// For mobile layout
const CardSlider = () => {
    const cards = [
        { id: 1, image: P1, title: "CREATE", subhead: "custom products", description: "Easily add your designs to a wide range of products using our free tools." },
        { id: 2, image: P2, title: "SELL", subhead: " on your teams", description: "You choose the products, sale price, and where to sell." },
        { id: 3, image: P3, title: "WE HANDLE ", subhead: " fulfilment", description: "Once an order is placed, we automatically handle all the printing and deliveries logistics." },
    
  ];

    const [currentIndex, setCurrentIndex] = useState(0);

    // Circular Navigation Logic
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    };

    return (
        <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-500 via-zinc-300 to-zinc-100 py-8 relative mx-12">
            {/* Card Slider */}
            <div className="overflow-hidden">
                <div
                    className="flex transition-transform ease-in-out duration-500"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="w-full flex-shrink-0 px-4"
                        >
                            <img src={card.image} alt="" className='w-44 m-auto' />
                            <div className="p-6 bg-white shadow-lg rounded-lg text-center">
                                <h2 className="text-2xl text-green-500 font-bold">{card.title}</h2>
                                <h3 className='text-2xl font-bold mb-4'>{card.subhead}</h3>
                                <p className="relative w-fit text-gray-700">{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Left Arrow */}
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-stone-200 px-3 py-2 rounded-full hover:bg-gray-600"
                onClick={prevSlide}
            >
                <i className="fas fa-chevron-left fa-lg"></i>
            </button>

            {/* Right Arrow */}
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-stone-200 px-3 py-2 rounded-full hover:bg-gray-600"
                onClick={nextSlide}
            >
                <i className="fas fa-chevron-right fa-lg"></i>
            </button>
        </div>
    );
};

export default CardSlider;
