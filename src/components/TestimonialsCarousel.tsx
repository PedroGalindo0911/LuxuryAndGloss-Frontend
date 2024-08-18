// src/components/TestimonialsCarousel.tsx
import { useState } from "react";

const testimonials = [
  { text: "Excelente servicio, mi coche quedó como nuevo.", author: "Juan Pérez" },
  { text: "Muy profesionales y atentos. Totalmente recomendado.", author: "María López" },
  { text: "El mejor detailing en la ciudad. No defraudan.", author: "Carlos Fernández" },
];

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative bg-gray-800 p-8 rounded-lg shadow-lg overflow-hidden text-white">
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={prevTestimonial}
          className="p-2 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          &#9664;
        </button>
        <button
          onClick={nextTestimonial}
          className="p-2 bg-white text-gray-800 rounded-full shadow-md hover:bg-gray-200 transition-transform transform hover:scale-105"
        >
          &#9654;
        </button>
      </div>
      <div className="flex items-center justify-center h-48">
        <div
          className="transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full max-w-md px-4 py-6 bg-red-500 rounded-lg shadow-md mx-4"
            >
              <p className="text-lg italic">"{testimonial.text}"</p>
              <p className="mt-4 font-bold">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
