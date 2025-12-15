import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import ContactSection from './components/ContactSection';
import NewsletterSection from './components/NewsletterSection';

function App() {
  return (
    <div className="app">
      <Navbar />
      <CartDrawer />
      <Hero />
      <ProductGrid />
      <NewsletterSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
