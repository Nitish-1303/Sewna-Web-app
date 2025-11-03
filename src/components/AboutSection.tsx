import { motion } from 'framer-motion';

export default function AboutSection() {
  const values = [
    {
      icon: '✨',
      title: 'Creativity First',
      description: 'We believe every design tells a story. Our platform empowers designers to express their unique artistic vision.',
    },
    {
      icon: '🤝',
      title: 'Human Connection',
      description: 'Fashion is personal. We connect people through meaningful collaborations, not transactions.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Future',
      description: 'Supporting independent designers means supporting sustainable, ethical, and conscious fashion.',
    },
    {
      icon: '🎨',
      title: 'Craftsmanship',
      description: 'Every piece is crafted with care, attention to detail, and a commitment to quality over quantity.',
    },
  ];

  const stats = [
    { number: '500+', label: 'Independent Designers' },
    { number: '25+', label: 'Countries Worldwide' },
    { number: '10K+', label: 'Custom Designs Created' },
    { number: '98%', label: 'Customer Satisfaction' },
  ];

  return (
    <section id="about" className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-accent">SEWNA</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're reimagining fashion by connecting creative minds with people who value originality, 
            craftsmanship, and personal expression.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                SEWNA was born from a simple observation: talented fashion designers were struggling 
                to find clients, while people seeking custom outfits couldn't find the right creators.
              </p>
              <p>
                We saw an opportunity to bridge this gap—not with another marketplace, but with a 
                platform that celebrates the human connection between designer and client.
              </p>
              <p>
                Today, SEWNA is home to hundreds of independent designers from around the world, 
                each bringing their unique perspective, cultural heritage, and creative vision to 
                people who appreciate truly custom fashion.
              </p>
              <p className="text-accent font-semibold italic">
                "Like opening a sketchbook — personal, detailed, and quietly confident."
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="relative h-[400px] rounded-custom overflow-hidden shadow-2xl bg-gradient-to-br from-accent/20 via-purple-500/10 to-pink-500/10"
          >
            <img
              src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Designer working on custom fashion"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          </motion.div>
        </div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-accent text-white p-12 rounded-custom mb-20 text-center"
        >
          <h3 className="text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-xl leading-relaxed max-w-4xl mx-auto">
            To empower independent fashion designers by connecting them with clients who value 
            creativity, craftsmanship, and personal expression—creating a more sustainable, 
            ethical, and human-centered fashion industry.
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            What We Stand For
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0px 12px 24px rgba(0, 182, 127, 0.2)' 
                }}
                className="bg-white p-6 rounded-custom shadow-lg text-center hover-glow"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-semibold mb-3">{value.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-900 text-white p-12 rounded-custom"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <div className="mt-20">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-6"
          >
            Built by Creators, for Creators
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Our team combines expertise in fashion, technology, and design to create a platform 
            that truly understands the needs of both designers and clients. We're passionate about 
            supporting independent creators and making custom fashion accessible to everyone.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-accent text-white px-8 py-4 rounded-custom text-lg font-semibold hover-glow ripple-effect btn-compress"
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
