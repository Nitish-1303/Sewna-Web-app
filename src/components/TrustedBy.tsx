import { motion } from 'framer-motion';

export default function TrustedBy() {
  const logos = ['VOGUE', 'ELLE', 'BAZAAR', 'GQ', 'COSMOPOLITAN'];

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
          We've helped hundreds of designers turn creativity into connection.
        </p>
        
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {logos.map((logo, i) => (
            <motion.div
              key={logo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.1 }}
              className="text-2xl font-bold text-gray-400 dark:text-gray-500 hover:text-accent dark:hover:text-accent transition-colors cursor-pointer relative group"
            >
              {logo}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-accent"
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
