// src/components/BeforeAfterGallery.tsx
import React from 'react';

const BeforeAfterGallery = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Galería de Antes y Después</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="path/to/before-image.jpg" alt="Antes" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">Antes</span>
            </div>
          </div>
          <div className="relative w-full max-w-md overflow-hidden rounded-lg shadow-lg bg-white">
            <img src="path/to/after-image.jpg" alt="Después" className="w-full h-auto" />
            <div className="absolute inset-0 bg-black opacity-50 flex items-center justify-center">
              <span className="text-white text-xl font-semibold">Después</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterGallery;
