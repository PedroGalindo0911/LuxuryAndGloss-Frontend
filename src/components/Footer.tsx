// src/components/Footer.tsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Pure Shine Detailing. Todos los derechos reservados.
        </p>
        <div className="mt-4">
          <a href="#facebook" className="text-gray-400 hover:text-white mx-2">Facebook</a>
          <a href="#twitter" className="text-gray-400 hover:text-white mx-2">Twitter</a>
          <a href="#instagram" className="text-gray-400 hover:text-white mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
