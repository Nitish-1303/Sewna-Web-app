import { motion } from 'framer-motion';

export default function FooterCTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-br from-accent via-green-600 to-emerald-500">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-white mb-8"
        >
          Start your creative journey today.
        </motion.h2>

        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 182, 127, 0.6)' }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400 }}
          className="bg-accent text-white px-12 py-4 rounded-custom text-lg font-semibold hover:shadow-2xl transition-all"
        >
          Join SEWNA
        </motion.button>
      </div>
    </section>
  );
}
