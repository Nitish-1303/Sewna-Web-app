import { motion } from 'framer-motion';

const designers = [
  { name: 'Meera Patel', city: 'Mumbai', rating: 5, tags: ['Sustainable', 'Couture'], image: 'https://i.pravatar.cc/150?img=1' },
  { name: 'Arjun Singh', city: 'Delhi', rating: 5, tags: ['Modern', 'Minimalist'], image: 'https://i.pravatar.cc/150?img=2' },
  { name: 'Priya Sharma', city: 'Bangalore', rating: 5, tags: ['Traditional', 'Fusion'], image: 'https://i.pravatar.cc/150?img=3' },
  { name: 'Rohan Kumar', city: 'Chennai', rating: 5, tags: ['Avant-garde', 'Bold'], image: 'https://i.pravatar.cc/150?img=4' },
];

export default function DesignerCarousel() {
  return (
    <section id="discover" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold mb-12 text-center"
        >
          Meet Our Designers
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-6">
          {designers.map((designer, i) => (
            <motion.div
              key={designer.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ 
                y: -8, 
                boxShadow: '0px 12px 24px rgba(0, 182, 127, 0.2)',
                borderColor: '#00b67f'
              }}
              className="bg-white p-6 rounded-custom shadow-lg border-2 border-transparent transition-all cursor-pointer relative group"
            >
              <img
                src={designer.image}
                alt={designer.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
              />
              
              <h3 className="text-xl font-semibold text-center mb-1">{designer.name}</h3>
              <p className="text-gray-500 text-center text-sm mb-3">Based in {designer.city}</p>
              
              <div className="flex justify-center mb-3">
                {[...Array(designer.rating)].map((_, i) => (
                  <span key={i} className="text-accent">★</span>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {designer.tags.map(tag => (
                  <span key={tag} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Hover Detail */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-0 left-0 right-0 bg-accent text-white p-3 rounded-b-custom opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <p className="text-xs text-center">⭐ {designer.rating}.0 Rated Designer</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
