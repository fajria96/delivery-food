import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxShadowOuter } from "react-icons/rx";

function Banner() {
  const slides = [
    {
      url: "https://images.pexels.com/photos/359993/pexels-photo-359993.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/2323398/pexels-photo-2323398.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/2323391/pexels-photo-2323391.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260&dpr=1",
    },
    {
      url: "https://images.pexels.com/photos/3687447/pexels-photo-3687447.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260&dpr=1",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className="max-w-[1400px] h-[700px] m-auto relative group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full h-full bg-center bg-cover duration-500"
      >
        <button>hello</button>
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactLeft onClick={prevSlide} size={30} />
      </div>
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
        <BsChevronCompactRight onClick={nextSlide} size={30} />
      </div>
      <div className="flex top-4 justify-center py-2">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className="text-2xl cursor-pointer"
          >
            <RxShadowOuter />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Banner;
