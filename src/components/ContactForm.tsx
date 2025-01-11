import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const ContactSection = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = "Nuevo mensaje de cliente";
    const whatsappNumber = "50230256446";
    const whatsappMessage = encodeURIComponent(message);
    const url = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center items-center md:items-start">
        {/* Información de contacto */}
        <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-left">
          <h2 className="text-3xl text-[#8B5E3C] font-bold mb-4">Contáctanos</h2>
          <p className="text-gray-600 mb-4">
            Contáctenos hoy para programar una cita u obtener más información sobre nuestros servicios.
          </p>
          <ul className="text-gray-700">
            <li className="flex justify-center md:justify-start items-center mb-2">
              <span className="text-[#8B5E3C] mr-2">
                <FontAwesomeIcon icon={faPhone} />
              </span>
              (502) 3025-6446
            </li>
            <li className="flex justify-center md:justify-start items-center mb-2">
              <span className="text-[#8B5E3C] mr-2">
                <FontAwesomeIcon icon={faInstagram as any} />
              </span>
              @luxury_gloss.gt
            </li>
            <li className="flex justify-center md:justify-start items-center">
              <span className="text-[#8B5E3C] mr-2">
                <FontAwesomeIcon icon={faFacebook as any} />
              </span>
              Luxury & Gloss
            </li>
          </ul>
        </div>

        {/* Formulario de contacto */}
        <div className="md:w-1/3 my-4 bg-[#D4A373] p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl text-white font-bold mb-3">Programe una cita</h2>
          <p className="text-white mb-3">
            Complete el formulario para agendar su cita.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="name">
                Nombre
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                type="text"
                id="name"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="phone">
                Teléfono
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                type="text"
                id="phone"
                required
              />
            </div>
            <div className="mb-3">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-200"
                id="message"
                rows={2}
                required
              ></textarea>
            </div>
            <button
              className="w-full bg-[#8B5E3C] text-white py-2 rounded-md font-bold hover:bg-[#6A4E2D] transition duration-300"
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
