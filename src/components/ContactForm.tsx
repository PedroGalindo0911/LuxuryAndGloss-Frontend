import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center md:items-start">
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600 mb-4">
          Contáctenos hoy para programar una cita u obtener más información sobre nuestros servicios.
          </p>
          <ul className="text-gray-700">
            <li className="flex justify-center md:justify-start items-center mb-2">
              <span className="text-red-500 mr-2">
                <FontAwesomeIcon icon={faLocationDot} />
              </span>
              17 avenida, 4-23, Colonia el Despertar, zona 18
            </li>
            <li className="flex justify-center md:justify-start items-center mb-2">
              <span className="text-red-600 mr-2">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              (502) 555-5555
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <span className="text-red-600 mr-2">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              info@luxury&gloss.com
            </li>
          </ul>
        </div>


        <div className="md:w-1/3 my-4 bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl text-red-500 font-bold mb-3">Programe una cita</h2>
          <p className="text-gray-600 mb-3">
            Complete el formulario para agendar su cita.
          </p>
          <form>
            <div className="mb-3">
              <label className="block text-red-500 text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                type="text"
                id="name"
              />
            </div>
            <div className="mb-3">
              <label className="block text-red-500 text-sm font-bold mb-2" htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                type="email"
                id="email"
              />
            </div>
            <div className="mb-3">
              <label className="block text-red-500 text-sm font-bold mb-2" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                type="text"
                id="phone"
              />
            </div>
            <div className="mb-3">
              <label className="block text-red-500 text-sm font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                id="message"
                rows={2}
              ></textarea>
            </div>
            <button
              className="w-full bg-red-500 text-white py-2 rounded-md font-bold hover:bg-red-600 transition duration-300"
              type="submit"
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
