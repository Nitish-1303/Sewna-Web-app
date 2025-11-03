import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundMotion from './components/BackgroundMotion';
import Home from './pages/Home';
import DiscoverDesigners from './pages/DiscoverDesigners';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
        <BackgroundMotion />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<DiscoverDesigners />} />
          {/* Add more routes as we build them */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
