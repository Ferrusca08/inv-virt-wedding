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
import RSVP from './components/RSVP';
import Footer from './components/Footer';

// Pages
import OurStoryPage from './pages/OurStoryPage';

function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Countdown />
      <Location />
      <Itinerary />
      <Hotels />
      <GiftRegistry />
      <DressCode />
      <RSVP />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
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
