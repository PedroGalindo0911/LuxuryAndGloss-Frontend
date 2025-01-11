import { useState } from 'react';

const faqs = [
  {
    question: "¿Cuánto tiempo toma el servicio?",
    answer: "El tiempo depende del tipo de servicio, pero generalmente toma entre 2 y 4 horas.",
  },
  {
    question: "¿Qué productos utilizan?",
    answer: "Utilizamos productos de alta calidad de marcas reconocidas en el sector del detailing.",
  },
  {
    question: "¿Qué incluye la promoción de Abrillantado Cerámico de Pintura?",
    answer: "La promoción de Abrillantado Cerámico de Pintura incluye un brillo profundo y duradero, protección hidrofóbica contra agua y suciedad, y una protección prolongada de la pintura de tu vehículo.",
  },
  {
    question: "¿Qué tipos de espacios puedo limpiar con el servicio de limpieza?",
    answer: "Nuestro servicio de limpieza es ideal para: salas, colchones, alfombras y sillones de automóviles. ¡Eliminamos manchas, ácaros y malos olores de raíz!",
  },
  {
    question: "¿Cómo puedo reservar una cita para el servicio de limpieza o el abrillantado cerámico?",
    answer: "Puedes reservar tu cita de manera fácil y rápida escribiéndonos por DM o contactándonos al 📞 3025-6446. ¡No pierdas tiempo y agenda tu cita hoy mismo!",
  },
  {
    question: "¿El servicio de abrillantado cerámico es adecuado para cualquier tipo de vehículo?",
    answer: "Sí, el servicio de abrillantado cerámico es adecuado para todos los tipos de vehículos, desde autos hasta camionetas y SUV. ¡Tu vehículo lucirá espectacular y protegido!",
  },
  {
    question: "¿Cuánto tiempo toma realizar el servicio de abrillantado cerámico?",
    answer: "El servicio de abrillantado cerámico toma aproximadamente entre 2 y 3 horas, dependiendo del tamaño de tu vehículo. ¡En poco tiempo tu auto tendrá un brillo espectacular!",
  },
  {
    question: "¿Puedo obtener un descuento si contrato varios servicios?",
    answer: "Sí, ofrecemos descuentos si contratas más de un servicio. Si contratas dos o tres servicios de limpieza para tu hogar o vehículo, los precios por servicio se reducen. ¡Aprovecha nuestras ofertas!",
  },
  {
    question: "¿Puedo agendar una cita para el servicio de limpieza y el abrillantado cerámico al mismo tiempo?",
    answer: "Claro que sí, puedes agendar ambos servicios en el mismo día para aprovechar al máximo tu tiempo. Solo debes contactarnos al 📞 3025-6446 o enviarnos un mensaje directo para coordinar tu cita.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-[#8B572A] text-center mb-8">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-4 py-2 bg-gray-100 shadow-md rounded-md flex justify-between items-center hover:bg-gray-200 transition-colors duration-300"
              >
                <span className="font-semibold text-[#8B572A]">{faq.question}</span>
                <span className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                  &#9660;
                </span>
              </button>
              {openIndex === index && (
                <div className="px-4 py-2 bg-gray-100 rounded-md">
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
