import React from 'react';
import carImage from '/images/car.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => (
  <div className="bg-[#D4A373] text-white p-6 flex flex-col md:flex-row justify-between items-center mt-10">
    <div className="md:w-1/2 text-center md:text-left z-10 m-4">
      <h1 className="text-4xl font-bold mb-5 leading-tight animate-fadeIn">
      ¡Limpieza y brillo para tu auto y tus espacios favoritos!
      </h1>
      <p className="text-lg mb-7">
      ¡Transforma tu auto y tu hogar hoy mismo!
      </p>
      <a
        href="#contact"
        className="bg-white text-[#8B5E3C] py-2 px-6 text-md rounded hover:bg-gray-100 transition inline-flex items-center"
      >
        <FontAwesomeIcon icon={faCalendarCheck} className="mr-2" />
        Agenda tu Cita
      </a>
    </div>
    <div className="md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 relative">
      <img
        src={carImage}
        alt="Car"
        className="w-full max-w-xs md:max-w-lg lg:max-w-xl object-contain transform transition hover:scale-105 drop-shadow-[0_0_15px_rgba(255,255,255,0.8)]"
      />
    </div>
  </div>
);

export default Header;
