import './App.css';
import Homepage from './Pages/Javascript/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VenuePage from './Pages/Javascript/Venue';
import LodgePage from './Pages/Javascript/Lodge';
import { AnimatePresence } from 'framer-motion';
import Gallery from './Pages/Javascript/Gallery';
import Contact from './Pages/Javascript/Contact';
import Rentals from './Pages/Javascript/Rentals';
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import {useEffect, useState} from "react";
import SplashScreen from "./Components/SplashScreen";

function App() {

  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // Check if the user has visited before
    const hasVisitedBefore = localStorage.getItem('hasVisited');
    if (hasVisitedBefore) {
      setShowSplash(false);
    }
  }, []);

  const handleSplashFinish = () => {
    // Set localStorage item to remember the visit
    localStorage.setItem('hasVisited', 'true');
    setShowSplash(false);
  };

  return (
    <div className="app">
      {showSplash ? (
          <SplashScreen onFinish={handleSplashFinish} />
      ) : (
        <Router>
          <AnimatePresence mode="wait">
            <SpeedInsights />
            <Analytics />
            <Routes>
              <Route index element={<Homepage />} />
              <Route path="/venue" element={<VenuePage />} />
              <Route path="/lodge" element={<LodgePage />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/rentals" element={<Rentals />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </Router>
      )}
    </div>
  );
}

export default App;
