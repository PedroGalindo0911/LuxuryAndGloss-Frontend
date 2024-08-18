// src/components/ServiceSelection.tsx
import React from 'react';

const ServiceSelection: React.FC = () => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Selecciona el Servicio</h2>
    <select className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500">
      <option value="basic">Detallado Básico</option>
      <option value="premium">Detallado Premium</option>
      <option value="interior">Limpieza Interior</option>
    </select>
  </div>
);

export default ServiceSelection;
