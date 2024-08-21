// src/components/ContactForm.tsx
import React from 'react';
import SubmitButton from './SubmitButton';


const ContactForm: React.FC = () => (
  <div className="bg-gray-100 p-6 rounded-md shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Información de Contacto</h2>
    <form>
      <input
        type="text"
        placeholder="Nombre"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="email"
        placeholder="Correo electrónico"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="tel"
        placeholder="Número de teléfono"
        className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </form>
    <SubmitButton/>
  </div>
);

export default ContactForm;
