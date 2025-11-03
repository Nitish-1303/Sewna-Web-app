import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Save, Download, Share2, Sparkles } from 'lucide-react';

type OutfitBase = 'dress' | 'suit' | 'saree' | 'jacket';
type ColorPalette = 'neutral' | 'vibrant' | 'pastel' | 'monochrome';
type FabricTexture = 'cotton' | 'silk' | 'linen' | 'denim' | 'velvet';

const outfitBases = [
  { id: 'dress', name: 'Dress', emoji: '👗' },
  { id: 'suit', name: 'Suit', emoji: '🤵' },
  { id: 'saree', name: 'Saree', emoji: '🥻' },
  { id: 'jacket', name: 'Jacket', emoji: '🧥' },
];

const colorPalettes = [
  { id: 'neutral', name: 'Neutral', colors: ['#F5F5DC', '#D2B48C', '#8B7355'] },
  { id: 'vibrant', name: 'Vibrant', colors: ['#FF6B6B', '#4ECDC4', '#FFE66D'] },
  { id: 'pastel', name: 'Pastel', colors: ['#FFB3BA', '#BAFFC9', '#BAE1FF'] },
  { id: 'monochrome', name: 'Monochrome', colors: ['#000000', '#808080', '#FFFFFF'] },
];

const fabricTextures = [
  { id: 'cotton', name: 'Cotton', pattern: 'dots' },
  { id: 'silk', name: 'Silk', pattern: 'shine' },
  { id: 'linen', name: 'Linen', pattern: 'lines' },
  { id: 'denim', name: 'Denim', pattern: 'diagonal' },
  { id: 'velvet', name: 'Velvet', pattern: 'soft' },
];

export default function OutfitBuilder() {
  const [step, setStep] = useState(1);
  const [selectedBase, setSelectedBase] = useState<OutfitBase | null>(null);
  const [selectedColor, setSelectedColor] = useState<ColorPalette | null>(null);
  const [selectedFabric, setSelectedFabric] = useState<FabricTexture | null>(null);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    const design = {
      base: selectedBase,
      color: selectedColor,
      fabric: selectedFabric,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem('sewna-outfit-design', JSON.stringify(design));
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const canProceed = () => {
    if (step === 1) return selectedBase !== null;
    if (step === 2) return selectedColor !== null;
    if (step === 3) return selectedFabric !== null;
    return true;
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-12 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-accent" size={32} />
            <h1 className="text-5xl font-bold">Outfit Builder</h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Create your dream look in 4 simple steps
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Builder Steps */}
          <div className="space-y-8">
            {/* Progress */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg">
              <div className="flex justify-between mb-4">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`flex-1 h-2 rounded-full mx-1 transition-colors ${
                      s <= step ? 'bg-accent' : 'bg-gray-200 dark:bg-gray-700'
                    }`}
                  />
                ))}
              </div>
              <p className="text-center text-sm text-gray-600 dark:text-gray-400">
                Step {step} of 4
              </p>
            </div>

            {/* Step Content */}
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold mb-6">Choose Your Base</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {outfitBases.map((base) => (
                      <motion.button
                        key={base.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedBase(base.id as OutfitBase)}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          selectedBase === base.id
                            ? 'border-accent bg-accent/10'
                            : 'border-gray-200 dark:border-gray-700 hover:border-accent/50'
                        }`}
                      >
                        <div className="text-5xl mb-2">{base.emoji}</div>
                        <div className="font-semibold">{base.name}</div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold mb-6">Pick Color Palette</h2>
                  <div className="space-y-4">
                    {colorPalettes.map((palette) => (
                      <motion.button
                        key={palette.id}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setSelectedColor(palette.id as ColorPalette)}
                        className={`w-full p-4 rounded-xl border-2 transition-all ${
                          selectedColor === palette.id
                            ? 'border-accent bg-accent/10'
                            : 'border-gray-200 dark:border-gray-700 hover:border-accent/50'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="font-semibold">{palette.name}</span>
                          <div className="flex gap-2">
                            {palette.colors.map((color, i) => (
                              <div
                                key={i}
                                className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-900"
                                style={{ backgroundColor: color }}
                              />
                            ))}
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold mb-6">Add Fabric Texture</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {fabricTextures.map((fabric) => (
                      <motion.button
                        key={fabric.id}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedFabric(fabric.id as FabricTexture)}
                        className={`p-6 rounded-xl border-2 transition-all ${
                          selectedFabric === fabric.id
                            ? 'border-accent bg-accent/10'
                            : 'border-gray-200 dark:border-gray-700 hover:border-accent/50'
                        }`}
                      >
                        <div className="font-semibold mb-2">{fabric.name}</div>
                        <div className="text-xs text-gray-500">{fabric.pattern}</div>
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
                >
                  <h2 className="text-2xl font-bold mb-6">Your Design Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Base:</span>
                      <span className="font-semibold capitalize">{selectedBase}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Color:</span>
                      <span className="font-semibold capitalize">{selectedColor}</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                      <span className="text-gray-600 dark:text-gray-400">Fabric:</span>
                      <span className="font-semibold capitalize">{selectedFabric}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex gap-3">
                    <button
                      onClick={handleSave}
                      className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold transition-colors"
                    >
                      <Save size={20} />
                      {saved ? 'Saved!' : 'Save Design'}
                    </button>
                    <button className="p-3 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-lg transition-colors">
                      <Share2 size={20} />
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex gap-4">
              {step > 1 && (
                <button
                  onClick={() => setStep(step - 1)}
                  className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 rounded-lg hover:border-accent transition-colors"
                >
                  Back
                </button>
              )}
              {step < 4 && (
                <button
                  onClick={() => setStep(step + 1)}
                  disabled={!canProceed()}
                  className="flex-1 bg-accent hover:bg-accent/90 text-white py-3 rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next Step
                </button>
              )}
            </div>
          </div>

          {/* Right: Live Preview */}
          <div className="lg:sticky lg:top-24 h-fit">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-bold mb-6 text-center">Live Preview</h3>
              <div className="aspect-[3/4] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-xl flex items-center justify-center relative overflow-hidden">
                {/* Model Silhouette */}
                <motion.div
                  key={`${selectedBase}-${selectedColor}-${selectedFabric}`}
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-9xl"
                >
                  {selectedBase ? outfitBases.find(b => b.id === selectedBase)?.emoji : '👤'}
                </motion.div>

                {/* Color Overlay */}
                {selectedColor && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(135deg, ${colorPalettes.find(p => p.id === selectedColor)?.colors.join(', ')})`,
                    }}
                  />
                )}
              </div>
              <p className="text-center text-sm text-gray-500 mt-4">
                {selectedBase ? 'Looking great!' : 'Select options to see preview'}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
