const AboutUs = () => {
  return (
    <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8B572A] text-center mb-8">Sobre Nosotros</h2>
        <div className="max-w-full sm:max-w-3xl mx-auto text-gray-600">
          <p className="text-base sm:text-lg mb-6 text-justify">
            En <span className="font-semibold">Luxury&Gloss</span>, nos especializamos en el cuidado y restauración de autos y espacios. Nuestro equipo combina pasión, experiencia y los mejores productos del mercado para garantizar resultados sobresalientes.
          </p>
          <p className="text-base sm:text-lg mb-6 text-justify">
            Más que un servicio, ofrecemos una experiencia personalizada, adaptada a las necesidades específicas de cada cliente. Porque sabemos que cada detalle cuenta, estamos aquí para transformar tus espacios y vehículos en algo único.
          </p>
          <p className="text-base sm:text-lg font-semibold text-justify">
            ¡Déjanos cuidar de lo que más te importa!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
