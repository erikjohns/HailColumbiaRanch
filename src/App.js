import './App.css';
import Homepage from './Pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import VenuePage from './Pages/Venue';
import LodgePage from './Pages/Lodge';
import { AnimatePresence } from 'framer-motion';

function App() {

  return (
    <div className="app">
      <Router>
        <AnimatePresence mode="wait">
          <Routes>
            <Route index element={<Homepage />} />
            <Route path="/venue" element={<VenuePage />} />
            <Route path="/lodge" element={<LodgePage />} />
          </Routes>
        </AnimatePresence>
      </Router>
    </div>
  );
}

export default App;
