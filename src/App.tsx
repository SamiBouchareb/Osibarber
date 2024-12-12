import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { InfoSection } from './components/InfoSection';
import { AboutSection } from './components/AboutSection';
import { ReviewCarousel } from './components/ReviewCarousel';
import { InstagramFeed } from './components/InstagramFeed';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceSection } from './components/ServiceSection/ServiceSection';
import { HallOfFame } from './components/HallOfFame/HallOfFame';
import { SalonGallery } from './components/SalonGallery/SalonGallery';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <InfoSection />
        <AboutSection />
        <ReviewCarousel />
        <ServiceSection />
        <HallOfFame />
        <SalonGallery />
        <InstagramFeed />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;