import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ui/theme-toggle';
import AuthModal from './AuthModal';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [authModalOpen, setAuthModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md navbar-scrolled' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold">
            <span className="relative nav-link dark:text-white">
              SEWNA
            </span>
          </Link>

          <div className="hidden md:flex gap-8 items-center">
            <Link to="/discover" className="nav-link hover:text-accent transition-colors dark:text-gray-300">
              Discover Designers
            </Link>
            <Link to="/inspiration" className="nav-link hover:text-accent transition-colors dark:text-gray-300">
              Inspiration
            </Link>
            <Link to="/style-quiz" className="nav-link hover:text-accent transition-colors dark:text-gray-300">
              Style Quiz
            </Link>
            <button 
              onClick={() => setAuthModalOpen(true)}
              className="nav-link hover:text-accent transition-colors dark:text-gray-300"
            >
              Login
            </button>
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAuthModalOpen(true)}
              className="hidden md:block px-5 py-2 border-2 border-accent text-accent dark:text-accent rounded-custom hover:bg-accent hover:text-white transition-all duration-300"
            >
              Sign In
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setAuthModalOpen(true)}
              className="bg-accent text-white px-6 py-2 rounded-custom hover-glow ripple-effect btn-compress"
            >
              Sign Up
            </motion.button>
          </div>
        </div>
      </motion.nav>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  );
}
