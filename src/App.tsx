import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import BackgroundMotion from './components/BackgroundMotion';
import Chatbot from './components/Chatbot';
import Home from './pages/Home';
import DiscoverDesigners from './pages/DiscoverDesigners';
import StyleQuiz from './pages/StyleQuiz';
import Inspiration from './pages/Inspiration';
import OutfitBuilder from './pages/OutfitBuilder';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 relative transition-colors duration-300">
        <BackgroundMotion />
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/discover" element={<DiscoverDesigners />} />
          <Route path="/style-quiz" element={<StyleQuiz />} />
          <Route path="/inspiration" element={<Inspiration />} />
          <Route path="/outfit-builder" element={<OutfitBuilder />} />
          {/* Add more routes as we build them */}
        </Routes>

        <Chatbot />
      </div>
    </BrowserRouter>
  );
}

export default App;
