import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, Sparkles } from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    value: string;
    emoji: string;
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    question: "What's your ideal weekend outfit?",
    options: [
      { text: "Minimalist basics", value: "minimal", emoji: "👔" },
      { text: "Bold statement pieces", value: "bold", emoji: "✨" },
      { text: "Comfortable & casual", value: "casual", emoji: "👟" },
      { text: "Elegant & refined", value: "elegant", emoji: "👗" },
    ],
  },
  {
    id: 2,
    question: "Which color palette speaks to you?",
    options: [
      { text: "Neutrals & earth tones", value: "neutral", emoji: "🤎" },
      { text: "Vibrant & colorful", value: "vibrant", emoji: "🌈" },
      { text: "Monochrome black & white", value: "mono", emoji: "⚫" },
      { text: "Pastels & soft hues", value: "pastel", emoji: "🌸" },
    ],
  },
  {
    id: 3,
    question: "What's your fashion inspiration?",
    options: [
      { text: "Runway & high fashion", value: "runway", emoji: "💃" },
      { text: "Street style & urban", value: "street", emoji: "🏙️" },
      { text: "Vintage & retro", value: "vintage", emoji: "📻" },
      { text: "Sustainable & eco", value: "sustainable", emoji: "🌿" },
    ],
  },
  {
    id: 4,
    question: "How do you want to feel in your clothes?",
    options: [
      { text: "Confident & powerful", value: "confident", emoji: "💪" },
      { text: "Comfortable & relaxed", value: "comfortable", emoji: "☁️" },
      { text: "Creative & unique", value: "creative", emoji: "🎨" },
      { text: "Sophisticated & polished", value: "sophisticated", emoji: "💎" },
    ],
  },
  {
    id: 5,
    question: "What's your go-to accessory?",
    options: [
      { text: "Statement jewelry", value: "jewelry", emoji: "💍" },
      { text: "Designer bag", value: "bag", emoji: "👜" },
      { text: "Stylish shoes", value: "shoes", emoji: "👠" },
      { text: "Minimal watch", value: "watch", emoji: "⌚" },
    ],
  },
];

const styleProfiles = {
  "Modern Minimalist": {
    description: "You appreciate clean lines, quality basics, and timeless pieces. Less is more in your wardrobe.",
    designers: ["Meera P.", "Arjun S.", "Priya K."],
    color: "from-gray-400 to-gray-600",
  },
  "Bold Trendsetter": {
    description: "You love making statements and aren't afraid to experiment with colors, patterns, and avant-garde designs.",
    designers: ["Rohan K.", "Zara M.", "Vikram T."],
    color: "from-purple-500 to-pink-500",
  },
  "Casual Comfort": {
    description: "Comfort is key, but you never compromise on style. You love effortless, wearable fashion.",
    designers: ["Ananya R.", "Kabir S.", "Neha D."],
    color: "from-blue-400 to-cyan-500",
  },
  "Elegant Classic": {
    description: "Timeless elegance defines your style. You gravitate toward sophisticated, refined pieces.",
    designers: ["Priya S.", "Aditya M.", "Kavya L."],
    color: "from-amber-500 to-orange-600",
  },
};

export default function StyleQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState<string>("");

  const handleAnswer = (value: string) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Calculate result
      const result = calculateStyle(newAnswers);
      setSelectedStyle(result);
      setShowResults(true);
    }
  };

  const calculateStyle = (answers: string[]): string => {
    // Simple logic - in real app, this would be more sophisticated
    const styles = Object.keys(styleProfiles);
    return styles[Math.floor(Math.random() * styles.length)];
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setAnswers(answers.slice(0, -1));
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setSelectedStyle("");
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen pt-24 px-6 flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-3xl w-full">
        <AnimatePresence mode="wait">
          {!showResults ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
            >
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="text-accent" size={24} />
                  <h1 className="text-3xl font-bold">Find Your Style DNA</h1>
                </div>
                <p className="text-gray-600 dark:text-gray-400">
                  Answer 5 quick questions to discover your fashion personality
                </p>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-2">
                  <span>Question {currentQuestion + 1} of {questions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-accent to-green-600"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>

              {/* Question */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentQuestion}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <h2 className="text-2xl font-semibold mb-6">
                    {questions[currentQuestion].question}
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {questions[currentQuestion].options.map((option, index) => (
                      <motion.button
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleAnswer(option.value)}
                        className="p-6 bg-gray-50 dark:bg-gray-700 hover:bg-accent/10 dark:hover:bg-accent/20 rounded-2xl border-2 border-transparent hover:border-accent transition-all text-left group"
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-4xl group-hover:scale-110 transition-transform">
                            {option.emoji}
                          </span>
                          <span className="text-lg font-medium">{option.text}</span>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="mt-8 flex justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentQuestion === 0}
                  className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 hover:border-accent disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={20} />
                  Back
                </button>
                <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center">
                  Press Enter or click to continue
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="results"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-12"
            >
              {/* Results */}
              <div className="text-center mb-8">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                  className="inline-block mb-6"
                >
                  <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${styleProfiles[selectedStyle as keyof typeof styleProfiles].color} flex items-center justify-center text-6xl`}>
                    ✨
                  </div>
                </motion.div>

                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-4xl font-bold mb-4"
                >
                  You're a {selectedStyle}!
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
                >
                  {styleProfiles[selectedStyle as keyof typeof styleProfiles].description}
                </motion.p>
              </div>

              {/* Designer Recommendations */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-semibold mb-4 text-center">
                  Perfect Designers for You
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {styleProfiles[selectedStyle as keyof typeof styleProfiles].designers.map((designer, index) => (
                    <motion.div
                      key={designer}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="p-6 bg-gray-50 dark:bg-gray-700 rounded-2xl text-center hover:shadow-lg transition-shadow"
                    >
                      <div className="w-16 h-16 bg-gradient-to-br from-accent to-green-600 rounded-full mx-auto mb-3" />
                      <h4 className="font-semibold">{designer}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Fashion Designer</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={handleRestart}
                  className="px-8 py-3 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-full font-semibold transition-colors"
                >
                  Retake Quiz
                </button>
                <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-colors flex items-center justify-center gap-2">
                  Browse Designers
                  <ChevronRight size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
