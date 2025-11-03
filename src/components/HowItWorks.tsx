import { motion } from 'framer-motion';

const steps = [
  { title: 'Create your profile', desc: 'Tell us about your style and vision' },
  { title: 'Connect with a designer', desc: 'Browse and choose your perfect match' },
  { title: 'Collaborate on ideas', desc: 'Work together to bring your vision to life' },
  { title: 'Approve your final design', desc: 'Review and finalize every detail' },
  { title: 'Wear your creation', desc: 'Receive and showcase your unique piece' },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-20 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          How It Works
        </motion.h2>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30 hidden md:block" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative flex gap-6 mb-12 last:mb-0"
            >
              <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold">
                {i + 1}
              </div>
              
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
