import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Question {
  id: number;
  question: string;
  options: {
    label: string;
    image: string;
    style: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: 'What describes your ideal outfit?',
    options: [
      { label: 'Flowing & Free', image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400', style: 'bohemian' },
      { label: 'Clean & Simple', image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400', style: 'minimalist' },
      { label: 'Bold & Edgy', image: 'https://images.unsplash.com/photo-1558769132-cb1aea1c8347?w=400', style: 'streetwear' },
      { label: 'Elegant & Timeless', image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?w=400', style: 'classic' },
    ],
  },
  {
    id: 2,
    question: 'Pick your color palette',
    options: [
      { label: 'Earth Tones', image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400', style: 'bohemian' },
      { label: 'Monochrome', image: 'https://images.unsplash.com/photo-1558769132-92e717d613cd?w=400', style: 'minimalist' },
      { label: 'Neon & Dark', image: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400', style: 'streetwear' },
      { label: 'Neutrals & Pastels', image: 'https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?w=400', style: 'classic' },
    ],
  },
  {
    id: 3,
    question: 'Choose your fabric feel',
    options: [
      { label: 'Soft & Natural', image: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=400', style: 'bohemian' },
      { label: 'Structured & Crisp', image: 'https://images.unsplash.com/photo-1618453292459-4f4e0c0c8e0e?w=400', style: 'minimalist' },
      { label: 'Tech & Performance', image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400', style: 'streetwear' },
      { label: 'Luxe & Smooth', image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400', style: 'classic' },
    ],
  },
];

const styleResults = {
  bohemian: {
    name: 'Bohemian Soul',
    description: 'You love free-flowing fabrics, earthy tones, and pieces that tell a story.',
    designers: ['Meera Patel', 'Priya Sharma'],
    gradient: 'from-amber-400 to-orange-600',
  },
  minimalist: {
    name: 'Minimalist Maven',
    description: 'Clean lines, neutral palettes, and timeless pieces define your style.',
    designers: ['Arjun Singh'],
    gradient: 'from-gray-400 to-gray-700',
  },
  streetwear: {
    name: 'Streetwear Luxe',
    description: 'Bold, edgy, and unapologetically you. Fashion is your statement.',
    designers: ['Rohan Kumar'],
    gradient: 'from-purple-500 to-pink-600',
  },
  classic: {
    name: 'Classic Elegance',
    description: 'Timeless sophistication and refined taste guide your wardrobe choices.',
    designers: ['Meera Patel', 'Arjun Singh'],
    gradient: 'from-blue-400 to-indigo-600',
  },
};

export default function StyleQuiz() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (style: string) => {
    const newAnswers = [...answers, style];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const getResult = () => {
    const styleCounts = answers.reduce((acc, style) => {
      acc[style] = (acc[style] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const topStyle = Object.entries(styleCounts).sort((a, b) => b[1] - a[1])[0][0];
    return styleResults[topStyle as keyof typeof styleResults];
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  const saveStyle = () => {
    const result = getResult();
    localStorage.setItem('sewna-style-dna', JSON.stringify(result));
    alert('Style DNA saved! We\'ll use this to personalize your experience.');
  };

  if (!isOpen) {
    return (
      <motion.button
        id="quiz"
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-8 right-8 bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:shadow-accent/50 transition-all z-50"
      >
        ✨ Discover Your Style DNA
      </motion.button>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-custom max-w-4xl w-full max-h-[90vh] overflow-y-auto p-8"
        >
          {!showResult ? (
            <>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold">Discover Your Style DNA</h2>
                <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-black text-2xl">
                  ×
                </button>
              </div>

              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  {questions.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 flex-1 rounded-full transition-all ${
                        idx <= currentQuestion ? 'bg-accent' : 'bg-gray-200'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Question {currentQuestion + 1} of {questions.length}
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <h3 className="text-2xl font-semibold mb-6">{questions[currentQuestion].question}</h3>

                  <div className="grid grid-cols-2 gap-4">
                    {questions[currentQuestion].options.map((option, idx) => (
                      <motion.button
                        key={idx}
                        onClick={() => handleAnswer(option.style)}
                        whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(0, 182, 127, 0.3)' }}
                        whileTap={{ scale: 0.95 }}
                        className="relative overflow-hidden rounded-custom group"
                      >
                        <img
                          src={option.image}
                          alt={option.label}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-4">
                          <span className="text-white font-semibold text-lg">{option.label}</span>
                        </div>
                        <div className="absolute inset-0 border-4 border-transparent group-hover:border-accent transition-all rounded-custom" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </>
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center"
            >
              <div className={`bg-gradient-to-r ${getResult().gradient} text-white p-12 rounded-custom mb-6`}>
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-4xl font-bold mb-4"
                >
                  Your Style DNA: {getResult().name}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl"
                >
                  {getResult().description}
                </motion.p>
              </div>

              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Designers Perfect for You:</h3>
                <div className="flex gap-4 justify-center">
                  {getResult().designers.map((designer, idx) => (
                    <motion.div
                      key={designer}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                      className="bg-gray-100 px-6 py-3 rounded-full"
                    >
                      {designer}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={saveStyle}
                  className="bg-accent text-white px-8 py-3 rounded-custom"
                >
                  Save My Style DNA
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={resetQuiz}
                  className="border-2 border-secondary px-8 py-3 rounded-custom"
                >
                  Retake Quiz
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsOpen(false)}
                  className="border-2 border-gray-300 px-8 py-3 rounded-custom"
                >
                  Close
                </motion.button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
