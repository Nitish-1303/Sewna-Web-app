import { motion } from 'framer-motion';

export default function BackgroundMotion() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-accent/5 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '10%', left: '10%' }}
      />

      {/* Blob 2 */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-accent/3 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 100, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '50%', right: '10%' }}
      />

      {/* Blob 3 */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-accent/4 blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -80, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '20%', left: '30%' }}
      />
    </div>
  );
}
