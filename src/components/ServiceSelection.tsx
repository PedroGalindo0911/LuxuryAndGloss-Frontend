import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCar } from '@fortawesome/free-solid-svg-icons';

const ServicesSection: React.FC = () => {
  const [activeService, setActiveService] = useState<string | null>(null);


  const spaceServices = [
    {
      title: 'Limpieza profunda de alfombras',
      description: 'Eliminamos manchas, ácaros y suciedad, dejando tus alfombras como nuevas.',
    },
    {
      title: 'Restauración de colchones',
      description: 'Limpieza profunda y desinfección para un descanso higiénico y cómodo.',
    },
    {
      title: 'Mantenimiento y limpieza de sofás',
      description: 'Deja tus muebles con un aspecto fresco y renovado.',
    },
    {
      title: 'Sanitización de espacios interiores',
      description: 'Eliminamos bacterias y virus para garantizar un ambiente saludable.',
    },
  ];

  const carServices = [
    {
      title: 'Detallado exterior',
      description: 'Brilla tu automóvil con limpieza, pulido y protección premium.',
    },
    {
      title: 'Detallado interior',
      description: 'Acondicionamos y renovamos cada rincón del interior de tu vehículo.',
    },
    {
      title: 'Corrección de pintura',
      description: 'Reparamos rayones y restauramos el color original de tu coche.',
    },
    {
      title: 'Protección de cerámica',
      description: 'Cubrimos tu coche con una capa resistente para mayor brillo y durabilidad.',
    },
  ];

  return (
    <section className="py-16 bg-white sm:m-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8B572A] mb-4">Nuestros Servicios</h2>
        <p className="text-lg text-gray-600 mb-12">
          Soluciones profesionales tanto para tu hogar como para tu vehículo. ¡Elige el tipo de servicio que necesitas!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-stretch space-y-6 sm:space-y-0 sm:space-x-8">
          {/* Card: Servicios de Espacios */}
          <div
            className="w-full sm:w-1/3 bg-white text-[#8B5E3C] rounded-lg p-6 shadow-lg hover:shadow-xl transition cursor-pointer"
            onClick={() => activeService === 'spaces' ? setActiveService(null) : setActiveService('spaces')}
          >
            <FontAwesomeIcon icon={faHome} size="3x" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Servicio de Espacios</h3>
            <p>Limpieza y restauración para salas, colchones, alfombras y más.</p>
          </div>

          {/* Card: Servicios de Automóviles */}
          <div
            className="w-full sm:w-1/3 bg-white text-[#8B5E3C] rounded-lg p-6 shadow-lg hover:shadow-xl transition cursor-pointer"
            onClick={() => activeService === 'cars' ? setActiveService(null) : setActiveService('cars')}
          >
            <FontAwesomeIcon icon={faCar} size="3x" className="mb-4" />
            <h3 className="text-2xl font-bold mb-2">Servicio de Automóvil</h3>
            <p>Transforma tu vehículo con nuestro detallado profesional.</p>
          </div>
        </div>

        {/* Desplegable: Servicios de Espacios */}
        {activeService === 'spaces' && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {spaceServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-[#D4A373] font-bold text-lg text-center">{service.title}</h4>
                <p className="text-gray-600 text-center mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Desplegable: Servicios de Automóviles */}
        {activeService === 'cars' && (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {carServices.map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 p-4 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <h4 className="text-[#D4A373] font-bold text-lg text-center">{service.title}</h4>
                <p className="text-gray-600 text-center mt-2">{service.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;
