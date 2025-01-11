import React from 'react';
import ContactForm from './components/ContactForm';
import Header from './components/Header';
import ServiceSelection from './components/ServiceSelection';
import Navbar from './components/Navbar';
import AboutUs from './components/AboutUs';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

const App: React.FC = () => {
    return (
        <div>
          <Navbar />
          <Header/>
          <ServiceSelection />
          <AboutUs />
          <FAQ />
          <ContactForm />
          
          <Footer />
        </div>
    );
}

export default App;
