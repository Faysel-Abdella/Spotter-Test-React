// src/App.jsx
import React from 'react';
import Header from './components/Header';
import PopularDestinations from './components/PopularDestinations';
import WorldMap from './components/WorldMap';
import Footer from './components/Footer';
const App = () => {
  return (
    <div>
      <Header />
      <div className="mx-24 mb-6 mt-32">
        <PopularDestinations />
      </div>
      <WorldMap />
      <Footer />
    </div>
  );
};

export default App;
