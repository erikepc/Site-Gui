import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Specialties from './components/Specialties';
import KneeAnimation from './components/KneeAnimation';
import Treatments from './components/Treatments';
import Testimonials from './components/Testimonials';
import Prevention from './components/Prevention';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <KneeAnimation />
      <Specialties />
      <Treatments />
      <Testimonials />
      <Prevention />
      <FAQ />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default App;