import { motion } from 'framer-motion';

const testimonials = [
  { quote: 'SEWNA gave me a platform to express my art.', author: 'Meera', role: 'Designer' },
  { quote: 'I finally got the outfit I imagined.', author: 'Ananya', role: 'Customer' },
  { quote: 'The collaboration process was seamless and inspiring.', author: 'Rahul', role: 'Designer' },
];

export default function Testimonials() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-16 text-center"
        >
          What People Say
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-white p-8 rounded-custom shadow-lg text-center"
            >
              <p className="text-lg italic mb-6 text-gray-700">"{testimonial.quote}"</p>
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
