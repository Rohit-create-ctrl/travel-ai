import { motion } from 'framer-motion';
import { MapPin, Lightbulb, Zap } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: MapPin,
      title: 'AI Travel Guide',
      description:
        'Discover personalized travel recommendations powered by advanced AI. Get custom itineraries, hidden gems, and local insights tailored to your preferences.',
      gradient: 'from-cyan-500 to-blue-600',
      shadowColor: 'shadow-cyan-500/30',
    },
    {
      icon: Lightbulb,
      title: 'Customer Feedback',
      description:
        'Receive intelligent suggestions based on your interests, past experiences, and current trends. Our AI learns and adapts to provide you with the best options.',
      gradient: 'from-blue-500 to-purple-600',
      shadowColor: 'shadow-blue-500/30',
      buttonText: 'Open Feedback Portal',
    },
    {
      icon: Zap,
      title: 'Health Guide',
      description:
        'Get personalized medicine suggestions and health advice based on your current condition. Our AI acts as a reliable health guide to ensure you stay healthy.',
      gradient: 'from-purple-500 to-pink-600',
      shadowColor: 'shadow-purple-500/30',
      buttonText: 'Open Health Portal',
    },
  ];

  return (
    <section
      id="features"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-gray-800"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of intelligent exploration with our cutting-edge AI capabilities
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl rounded-3xl ${feature.shadowColor}"></div>

              <div className="relative h-full bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 transition-all duration-300 group-hover:border-gray-600/50 group-hover:shadow-2xl">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 shadow-lg ${feature.shadowColor}`}
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </motion.div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-400 leading-relaxed mb-6">
                  {feature.description}
                </p>

                {feature.buttonText && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-5 py-2 mb-2 bg-gradient-to-r ${feature.gradient} rounded-full text-white text-sm font-medium shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    {feature.buttonText}
                  </motion.button>
                )}

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '100%' }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
                  className={`h-1 bg-gradient-to-r ${feature.gradient} rounded-full mt-6`}
                />

                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-20 transition-opacity">
                  <feature.icon className="w-32 h-32 text-white" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-medium shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-shadow"
          >
            Explore All Features
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
