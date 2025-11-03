import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, User, Bookmark, Share2 } from 'lucide-react';

interface InspirationItem {
  id: number;
  image: string;
  designer: string;
  title: string;
  likes: number;
  category: string;
}

const inspirationItems: InspirationItem[] = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
    designer: "Meera P.",
    title: "Summer Linen Collection",
    likes: 234,
    category: "Casual",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    designer: "Arjun S.",
    title: "Modern Minimalist",
    likes: 456,
    category: "Minimal",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400&h=700&fit=crop",
    designer: "Priya K.",
    title: "Sustainable Fashion",
    likes: 189,
    category: "Eco",
  },
  {
    id: 4,
    image: "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=400&h=550&fit=crop",
    designer: "Rohan M.",
    title: "Wedding Couture",
    likes: 678,
    category: "Formal",
  },
  {
    id: 5,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=650&fit=crop",
    designer: "Zara L.",
    title: "Street Style",
    likes: 345,
    category: "Urban",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=400&h=480&fit=crop",
    designer: "Vikram T.",
    title: "Avant-Garde",
    likes: 567,
    category: "Bold",
  },
  {
    id: 7,
    image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400&h=620&fit=crop",
    designer: "Ananya R.",
    title: "Bohemian Vibes",
    likes: 423,
    category: "Boho",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=400&h=580&fit=crop",
    designer: "Kabir S.",
    title: "Classic Elegance",
    likes: 289,
    category: "Classic",
  },
];

const categories = ["All", "Casual", "Minimal", "Eco", "Formal", "Urban", "Bold", "Boho", "Classic"];

export default function Inspiration() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [likedItems, setLikedItems] = useState<Set<number>>(new Set());
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const filteredItems = selectedCategory === "All" 
    ? inspirationItems 
    : inspirationItems.filter(item => item.category === selectedCategory);

  const handleLike = (id: number) => {
    setLikedItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  return (
    <div className="min-h-screen pt-24 px-6 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Inspiration Feed</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Discover stunning designs from our community of independent designers
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === category
                  ? 'bg-accent text-white shadow-lg shadow-accent/30'
                  : 'bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="break-inside-avoid relative group"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
                {/* Image */}
                <motion.img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-between p-4"
                >
                  {/* Top Actions */}
                  <div className="flex justify-end gap-2">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Bookmark size={18} className="text-white" />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Share2 size={18} className="text-white" />
                    </motion.button>
                  </div>

                  {/* Bottom Info */}
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{item.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                          <User size={16} className="text-white" />
                        </div>
                        <span className="text-white text-sm">{item.designer}</span>
                      </div>
                      <span className="text-white/80 text-xs px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Like Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => handleLike(item.id)}
                  className={`absolute bottom-4 right-4 p-3 rounded-full backdrop-blur-sm transition-all ${
                    likedItems.has(item.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-700 hover:bg-white'
                  }`}
                >
                  <Heart
                    size={20}
                    fill={likedItems.has(item.id) ? 'currentColor' : 'none'}
                  />
                </motion.button>

                {/* Like Count */}
                <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full">
                  <span className="text-white text-sm font-medium">
                    {item.likes + (likedItems.has(item.id) ? 1 : 0)} likes
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-full font-semibold transition-colors shadow-lg hover:shadow-xl">
            Load More Inspiration
          </button>
        </motion.div>
      </div>
    </div>
  );
}
