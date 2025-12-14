import { motion } from 'framer-motion';

// Styles
import './App.css';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Countdown from './components/Countdown';
import Location from './components/Location';
import Itinerary from './components/Itinerary';
import DressCode from './components/DressCode';
import RSVP from './components/RSVP';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-container">
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        <Hero />
        <Countdown />
        <Location />
        <Itinerary />
        <DressCode />
        <RSVP />
        <Footer />
      </motion.main>
    </div>
  )
}

export default App
