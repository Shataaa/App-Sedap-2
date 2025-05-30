import { useState } from "react";

export default function Slider({ slides }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center overflow-hidden mb-12">
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 1 }}
      />
      <div className="absolute inset-0 bg-opacity-60 backdrop-blur-sm" style={{ zIndex: 2 }} />
      <div className="relative z-10 w-full max-w-4xl text-center">
        <h1 className="text-white text-5xl md:text-7xl font-poppins-extrabold mb-6 drop-shadow-lg">
          {slides[currentSlide].title}
        </h1>
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded transition text-lg shadow-lg">
          {slides[currentSlide].buttonText}
        </button>
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200"
        style={{ zIndex: 10 }}
      >
        &#8592;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center shadow hover:bg-gray-200"
        style={{ zIndex: 10 }}
      >
        &#8594;
      </button>
    </div>
  );
}