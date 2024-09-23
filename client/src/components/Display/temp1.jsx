import React, { useEffect, useState, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  
import U1 from './u1.jpg';
import U2 from './u2.png';

const FeedbackCarousel = () => {
  const feedbacks = [
    { id: 1, image: U1, title: "Robert A. Voltaire", subhead: "", description: "Printify has been an incredible service for us musicians unable to keep large amount of inventory - now we can create designs previously too expensive to print without having to have 1,000 shirts in our jam space. Thanks Printify!" },
    { id: 2, image: U2, title: "Quinten Barney", subhead: "Etsy Merchant", description: "We chose Printify because of their offerings as well as their incredibly low prices. After several years, we've come to find that their customer service is also top notch, and their platform just keeps getting better and better." },
    { id: 3, image: U2, title: "Nikki", subhead: "", description: "Printify has been a amazing partner to work with as we grow our business, from the range of merch we can make for our customers to working with our Customer Service team (Hi Martin!) it's truly made the whole process a breeze." },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  // Use IntersectionObserver to detect when the carousel is in the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect the observer after the first time it's visible
        }
      },
      { threshold: 0.2 } // When 10% of the component is visible
    );

    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }

    return () => {
      if (carouselRef.current) {
        observer.unobserve(carouselRef.current);
      }
    };
  }, []);

  // Slick Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, // Default for small screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1124, // For large screens
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768, // For medium screens
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480, // For small screens
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div
      ref={carouselRef}
      className={`bg-gray-100 py-10 transition-transform  duration-[1000ms] ease-out ${
        isVisible ? 'transform -translate-y-10 opacity-100' : 'transform translate-y-10 opacity-0'
      }`}
    >
      <Slider {...settings}>
        {feedbacks.map((feedback) => (
          <div key={feedback.id} className="p-4 transition transform hover:translate-y-1 hover:cursor-pointer hover:shadow-lg duration-300">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center h-full flex flex-col justify-between">
              <div className="flex flex-col items-center mb-4">
                <img src={feedback.image} alt={feedback.title} className="w-16 h-16 rounded-full mb-2" />
                <h2 className="text-xl font-bold text-green-600">{feedback.title}</h2>
                {feedback.subhead && <h3 className="text-lg text-gray-500">{feedback.subhead}</h3>}
                <p className="text-yellow-500 mt-2">⭐⭐⭐⭐⭐</p>
              </div>
              <p className="text-gray-700">{feedback.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeedbackCarousel;
