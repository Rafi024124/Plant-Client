import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import banner1 from "../assets/plant1.jpg";
import banner2 from "../assets/plant2.jpg";
import banner3 from "../assets/plant3.jpg";

const images = [banner2, banner3, banner1];

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <div className='max-w-7xl mx-auto mt-4 rounded-xl overflow-hidden shadow-lg relative'>
            <div className="relative w-full h-[28rem]">
                {images.map((imgSrc, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                            index === currentIndex ? 'opacity-100 z-20' : 'opacity-0 z-10'
                        }`}
                    >
                        <img
                            src={imgSrc}
                            alt={`banner-${index + 1}`}
                            className="w-full h-full object-cover brightness-90"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#7d9733]/60 via-[#a8b32f]/30 to-[#93a844]/60
 z-20" />
                        
                    </div>
                ))}

                {/* Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-40 bg-white/60 hover:bg-white text-green-800 p-2 rounded-full shadow-md"
                >
                    <ChevronLeft />
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-40 bg-white/60 hover:bg-white text-green-800 p-2 rounded-full shadow-md"
                >
                    <ChevronRight />
                </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-4 z-50 relative">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 rounded-full ${
                            currentIndex === index ? 'bg-[#7d9733]' : 'bg-[#a8b32f]'
                        } hover:bg-green-600 transition duration-300 shadow-md`}
                        aria-label={`Slide ${index + 1}`}
                    ></button>
                ))}
            </div>
        </div>
    );
};

export default Banner;
