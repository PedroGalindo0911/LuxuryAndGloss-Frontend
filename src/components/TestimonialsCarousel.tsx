import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface Testimonial {
  text: string;
  author: string;
}

const testimonials: Testimonial[] = [
  { text: "Excelente servicio, mi auto quedó como nuevo.", author: "Oscar Cuellar" },
  { text: "Muy profesionales y atentos. Totalmente recomendado.", author: "Crista Vasquez" },
  { text: "El mejor detailing en la ciudad. No defraudan.", author: "Diego Montenegro" },
];

const TestimonialsCarousel: React.FC = () => {
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
    <div className="bg-white py-12">
      <div className="container mx-auto relative">
        <h2 className="text-3xl font-bold  text-center mb-8">Lo que dicen nuestros clientes</h2>
        <div className="flex justify-center items-center">
          <button
            onClick={prevTestimonial}
            className="absolute left-3 p-3 bg-gray-400 text-white rounded-full hover:bg-gray-700  transition-transform transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <div className="overflow-hidden w-full max-w-xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="min-w-full px-4">
                  <div className="bg-gray-100 p-6 rounded-lg shadow-md">
                    <p className="text-lg italic text-gray-700">"{testimonial.text}"</p>
                    <p className="mt-4 font-bold text-gray-900">- {testimonial.author}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={nextTestimonial}
            className="absolute right-3 p-3 bg-gray-400 text-white rounded-full hover:bg-gray-700 transition-transform transform hover:scale-105"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
