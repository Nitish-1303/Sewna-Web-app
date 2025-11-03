import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function MetricsSection() {
  const metrics = [
    { value: 10000, suffix: '+', label: 'Designs Created' },
    { value: 25, suffix: '+', label: 'Countries' },
    { value: 98, suffix: '%', label: 'Satisfaction' },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              delay: i * 0.2,
              opacity: { repeat: Infinity, duration: 3, delay: i * 0.5 }
            }}
            whileHover={{ 
              y: -8, 
              boxShadow: '0px 12px 24px rgba(0, 0, 0, 0.15)' 
            }}
            animate={{ 
              opacity: [1, 0.95, 1] 
            }}
            className="bg-white dark:bg-gray-800 p-8 rounded-custom shadow-lg text-center hover-glow"
          >
            <h3 className="text-5xl font-bold text-accent mb-2">
              <Counter target={metric.value} suffix={metric.suffix} />
            </h3>
            <p className="text-gray-600">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
