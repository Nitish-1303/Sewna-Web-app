import { motion } from 'framer-motion';
import { Button } from './ui/button';

export default function MockupHero() {
  return (
    <section className="min-h-screen flex items-center pt-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-black dark:text-white leading-tight">
            Your Style.<br />
            Your Story.<br />
            Designed Just for You.
          </h1>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg">
            Connect with independent designers and create something truly yours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="outline"
              size="lg"
              onClick={() => (window as any).navigateTo?.('signin')}
              className="border-2 border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300"
            >
              I'm a Designer
            </Button>
            
            <Button
              size="lg"
              onClick={() => (window as any).navigateTo?.('signin')}
              className="bg-accent hover:bg-accent/90 text-white shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all duration-300"
            >
              I Need a Designer
            </Button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative"
        >
          <div className="relative rounded-custom overflow-hidden shadow-2xl aspect-[4/5] bg-gradient-to-br from-accent/20 via-purple-500/10 to-pink-500/10">
            {/* Fashion Designer Image */}
            <img
              src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=600&h=750&fit=crop"
              alt="Fashion Designer at Work"
              className="absolute inset-0 w-full h-full object-cover"
              onError={(e) => {
                // Fallback to gradient background if image fails
                e.currentTarget.style.display = 'none';
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-accent/30 to-transparent pointer-events-none" />
            
            {/* Decorative Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={{ 
                  scale: [1, 1.05, 1],
                  rotate: [0, 2, -2, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut'
                }}
                className="text-8xl opacity-20"
              >
                ✂️
              </motion.div>
            </div>
            
            {/* Optional Text Overlay */}
            <div className="absolute bottom-8 left-8 right-8">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="text-white font-medium text-lg drop-shadow-lg"
              >
                Crafting unique designs with passion
              </motion.p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
