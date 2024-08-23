import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4 fixed top-0 left-0 w-full z-50">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">Luxury&Gloss</div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
        <ul className={`flex-col md:flex-row md:flex justify-around text-white w-full md:w-auto absolute md:static bg-black md:bg-transparent transition-all duration-300 ease-in-out ${isOpen ? 'top-14 left-0 p-4 backdrop-blur-md bg-black/50' : 'top-[-400px]'} md:top-auto md:left-auto space-y-2 md:space-y-0 md:space-x-6`}>
          <li><a href="#header" className="object-contain transform transition hover:scale-125 block md:inline">Inicio</a></li>
          <li><a href="#about" className="object-contain transform transition hover:scale-125 block md:inline">Sobre Nosotros</a></li>
          <li><a href="#gallery" className="object-contain transform transition hover:scale-125 block md:inline">Galería</a></li>
          <li><a href="#contact" className="object-contain transform transition hover:scale-125 block md:inline">Contacto</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
