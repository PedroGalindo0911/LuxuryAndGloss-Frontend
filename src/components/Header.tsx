import React from 'react';
import carImage from '/images/car.png'; // Ruta de la imagen del carro
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';

const Header: React.FC = () => (
  <div className="bg-black text-white p-6 flex flex-col md:flex-row justify-between items-center">
    <div className="md:w-1/2 text-center md:text-left z-10 m-4">
      <h1 className="text-4xl font-bold mb-5 leading-tight">
        Realza el brillo con Luxury&Gloss
      </h1>
      <p className="text-lg mb-7">
        Nuestro equipo de expertos utiliza las técnicas más avanzadas y productos premium para transformar tu vehículo en una obra maestra digna de exhibición.
      </p>
      <a href="#contact" className="bg-red-500 text-white py-2 px-6 text-md rounded hover:bg-red-700 transition inline-flex items-center">
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
