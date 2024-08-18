import React from 'react';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import ServiceSelection from './components/ServiceSelection';
import Navbar from './components/Navbar';
import BeforeAfterGallery from './components/BeforeAfterGallery';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
          <Navbar />
          <Header/>
          <ServiceSelection />
          <BeforeAfterGallery />
          <AboutUs />
          <FAQ />
          <TestimonialsCarousel />
          <ContactForm />
          
          <Footer />
        </div>
    );
}

export default App;
