import { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';

// Styles
import './App.css';
import './responsive.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Location from './components/Location';
import Itinerary from './components/Itinerary';
import DressCode from './components/DressCode';
import GiftRegistry from './components/GiftRegistry';
import Hotels from './components/Hotels';
import Transport from './components/Transport';
import RSVP from './components/RSVP';
import Footer from './components/Footer';
import EnvelopeIntro from './components/EnvelopeIntro';

// Pages
import OurStoryPage from './pages/OurStoryPage';

import lagunaImg from './assets/laguna.jpeg';
import pedidaImg from './assets/Beso en puente.jpeg';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <img src={lagunaImg} alt="Separador Laguna" style={{ width: '100%', height: 'auto', display: 'block' }} />
      <Location />
      <Itinerary />
      <Hotels />
      <Transport />
      <img src={pedidaImg} alt="Separador Pedida" style={{ width: '100%', height: 'auto', display: 'block' }} />
      <GiftRegistry />
      <DressCode />
      <RSVP />
      <Footer />
    </>
  );
}

function App() {
  // Check if the URL has a personalized ?id= param
  const hasId = new URLSearchParams(window.location.search).has('id');
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  return (
    <Router>
      <div className="app">
        {/* Show envelope intro only for personalized links, until the user opens it */}
        {hasId && !envelopeOpened && (
          <EnvelopeIntro onOpen={() => setEnvelopeOpened(true)} />
        )}

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/nuestra-historia" element={<OurStoryPage />} />
          </Routes>
        </motion.main>
      </div>
    </Router>
  )
}

export default App

