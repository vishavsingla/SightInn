import React, { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <section className="slider flex justify-center items-center relative">
      <FaArrowAltCircleLeft
        className="left-arrow absolute top-1/2 left-4 text-3xl text-black cursor-pointer select-none"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="right-arrow absolute top-1/2 right-4 text-3xl text-black cursor-pointer select-none"
        onClick={nextSlide}
      />
      {slides.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img
                src={slide.image}
                alt="travel image"
                className="image w-80 h-48 rounded-lg"
              />
            )}
          </div>
        );
      })}
    </section>
  );
};

export default ImageSlider;
