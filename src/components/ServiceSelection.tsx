import React from 'react';

const services = [
  {
    title: 'Detallado Exterior',
    description:
      'Nuestro equipo de expertos limpiará, pulirá y protegerá meticulosamente el exterior de tu vehículo, dejándolo con un brillo digno de exhibición.',
  },
  {
    title: 'Detallado Interior',
    description:
      'Realizaremos una limpieza profunda y acondicionamiento del interior de tu vehículo, dejándolo con un aspecto fresco y renovado.',
  },
  {
    title: 'Corrección de Pintura',
    description:
      'Nuestras técnicas avanzadas de corrección de pintura pueden eliminar rayones, remolinos y oxidación, restaurando el brillo original de tu vehículo.',
  },
];

const ServicesSection: React.FC = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto text-center">
      <h2 className="text-4xl font-bold text-black mb-4">Nuestros Servicios</h2>
      <p className="text-lg text-gray-600 mb-12">
        Desde un simple lavado y encerado hasta un detallado interior y exterior completo, tenemos la experiencia para restaurar tu vehículo a su antigua gloria.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-stretch md:space-x-8 space-y-8 md:space-y-0">
        {services.map((service, index) => (
          <div key={index} className="w-full md:w-1/3 p-4 mx-auto">
            <h3 className="text-xl font-bold text-red-500 mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
