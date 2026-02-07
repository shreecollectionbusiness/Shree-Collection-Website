import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Location } from './components/Location';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link 
        href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Lato:wght@300;400;700&display=swap" 
        rel="stylesheet" 
      />
      
      <link rel="icon" href="public/favicon.ico" />

      <Navigation />
      <Hero />
      <Gallery />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}
