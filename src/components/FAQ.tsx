// src/components/FAQs.tsx
import React, { useState } from 'react';

const faqs = [
  {
    question: "¿Cuánto tiempo toma el servicio?",
    answer: "El tiempo depende del tipo de servicio, pero generalmente toma entre 2 y 4 horas.",
  },
  {
    question: "¿Qué productos utilizan?",
    answer: "Utilizamos productos de alta calidad de marcas reconocidas en el sector del detailing.",
  },
  // Añade más preguntas y respuestas según sea necesario
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 bg-white shadow-md rounded-md flex justify-between items-center hover:bg-gray-200 transition-colors duration-300"
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  &#9660;
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 bg-gray-50 rounded-md">
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
