import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Luxury & Gloss. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
