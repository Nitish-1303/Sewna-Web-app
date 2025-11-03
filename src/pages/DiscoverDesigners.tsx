import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Star, Heart, MessageCircle, Filter, Search } from 'lucide-react';

interface Designer {
  id: number;
  name: string;
  location: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  portfolio: string[];
  tags: string[];
  price: string;
}

const designers: Designer[] = [
  {
    id: 1,
    name: "Meera Patel",
    location: "Mumbai, India",
    specialty: "Sustainable Couture",
    rating: 4.9,
    reviews: 127,
    image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    portfolio: [
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    ],
    tags: ["Eco-Friendly", "Traditional", "Bridal"],
    price: "$$$",
  },
  {
    id: 2,
    name: "Arjun Sharma",
    location: "Delhi, India",
    specialty: "Modern Minimalist",
    rating: 4.8,
    reviews: 98,
    image: "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    portfolio: [
      "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    ],
    tags: ["Minimal", "Contemporary", "Casual"],
    price: "$$",
  },
  {
    id: 3,
    name: "Priya Singh",
    location: "Bangalore, India",
    specialty: "Fusion Fashion",
    rating: 5.0,
    reviews: 156,
    image: "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    portfolio: [
      "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    ],
    tags: ["Fusion", "Indo-Western", "Party Wear"],
    price: "$$$",
  },
  {
    id: 4,
    name: "Rohan Kumar",
    location: "Chennai, India",
    specialty: "Avant-Garde",
    rating: 4.7,
    reviews: 89,
    image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    portfolio: [
      "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    ],
    tags: ["Bold", "Experimental", "Runway"],
    price: "$$$$",
  },
  {
    id: 5,
    name: "Zara Malik",
    location: "Jaipur, India",
    specialty: "Traditional Crafts",
    rating: 4.9,
    reviews: 143,
    image: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    portfolio: [
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      "https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    ],
    tags: ["Handcrafted", "Ethnic", "Artisan"],
    price: "$$$",
  },
  {
    id: 6,
    name: "Vikram Thakur",
    location: "Kolkata, India",
    specialty: "Street Style",
    rating: 4.6,
    reviews: 76,
    image: "https://images.pexels.com/photos/7679454/pexels-photo-7679454.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
    portfolio: [
      "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    ],
    tags: ["Urban", "Streetwear", "Edgy"],
    price: "$$",
  },
];

export default function DiscoverDesigners() {
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const toggleFavorite = (id: number) => {
    setFavorites(prev => {
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
          className="mb-12"
        >
          <h1 className="text-5xl font-bold mb-4">Discover Designers</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Browse and connect with talented independent designers
          </p>
        </motion.div>

        {/* Search & Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search designers by name, style, or location..."
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>
          <button className="flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full transition-colors">
            <Filter size={20} />
            Filters
          </button>
        </motion.div>

        {/* Designer Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {designers.map((designer, index) => (
            <motion.div
              key={designer.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(designer.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Main Image */}
              <div className="relative h-64 overflow-hidden">
                <motion.img
                  src={designer.image}
                  alt={designer.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Favorite Button */}
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => toggleFavorite(designer.id)}
                  className={`absolute top-4 right-4 p-2 rounded-full backdrop-blur-sm transition-all ${
                    favorites.has(designer.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-700'
                  }`}
                >
                  <Heart
                    size={20}
                    fill={favorites.has(designer.id) ? 'currentColor' : 'none'}
                  />
                </motion.button>

                {/* Portfolio Preview */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: hoveredCard === designer.id ? 1 : 0, y: hoveredCard === designer.id ? 0 : 20 }}
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent"
                >
                  <div className="flex gap-2">
                    {designer.portfolio.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`Portfolio ${i + 1}`}
                        className="w-16 h-20 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{designer.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      <MapPin size={14} />
                      {designer.location}
                    </p>
                  </div>
                  <span className="text-accent font-semibold">{designer.price}</span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-3">{designer.specialty}</p>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{designer.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({designer.reviews} reviews)</span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {designer.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <button className="flex-1 bg-accent hover:bg-accent/90 text-white py-2 rounded-full font-semibold transition-colors">
                    View Profile
                  </button>
                  <button className="p-2 border-2 border-accent text-accent hover:bg-accent hover:text-white rounded-full transition-colors">
                    <MessageCircle size={20} />
                  </button>
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
            Load More Designers
          </button>
        </motion.div>
      </div>
    </div>
  );
}
