import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const inspirations = [
  {
    quote: '"Fashion is about dreaming and making other people dream." — Donatella Versace',
    texture: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=1200',
    cta: 'Find your match in Mumbai today',
  },
  {
    quote: '"Style is a way to say who you are without having to speak." — Rachel Zoe',
    texture: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=1200',
    cta: 'Discover designers in Delhi now',
  },
  {
    quote: '"Fashion is the armor to survive everyday life." — Bill Cunningham',
    texture: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=1200',
    cta: 'Connect with creators in Bangalore',
  },
  {
    quote: '"Elegance is elimination." — Cristóbal Balenciaga',
    texture: 'https://images.unsplash.com/photo-1618453292459-4f4e0c0c8e0e?w=1200',
    cta: 'Explore talent in Chennai today',
  },
];

export default function InspireMe() {
  const [current, setCurrent] = useState(0);

  const handleInspire = () => {
    const next = (current + 1) % inspirations.length;
    setCurrent(next);
  };

  return (
    <div className="fixed top-24 right-8 z-40">
      <motion.button
        onClick={handleInspire}
        whileHover={{ scale: 1.1, rotate: 180 }}
        whileTap={{ scale: 0.9 }}
        className="bg-white border-2 border-accent text-accent p-4 rounded-full shadow-lg hover:shadow-accent/50 transition-all"
        title="Get inspired!"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2v20M2 12h20M6 6l12 12M6 18L18 6" />
        </svg>
      </motion.button>

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.8 }}
          transition={{ duration: 0.5 }}
          className="absolute top-16 right-0 bg-white rounded-custom shadow-xl p-6 max-w-sm border-2 border-accent/20"
        >
          <div className="relative h-32 rounded-lg overflow-hidden mb-4">
            <img
              src={inspirations[current].texture}
              alt="Fabric texture"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </div>
          
          <p className="text-sm italic text-gray-700 mb-4">
            {inspirations[current].quote}
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-accent text-white py-2 rounded-lg text-sm font-semibold"
          >
            {inspirations[current].cta}
          </motion.button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
