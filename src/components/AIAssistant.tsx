import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Sparkles, MapPin, BookOpen, Cpu } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
}

const AIAssistant = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your AI-powered Omniscient Voyager assistant. How can I help you explore today?",
      isUser: false,
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const suggestions = [
    { icon: MapPin, text: 'Plan a trip to Tokyo', color: 'cyan' },
    { icon: BookOpen, text: 'Learn about quantum physics', color: 'blue' },
    { icon: Cpu, text: 'Explain AI technology', color: 'purple' },
  ];

  const getAIResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('trip') || lowerMessage.includes('travel') || lowerMessage.includes('tokyo')) {
      return "I'd love to help you plan your trip to Tokyo! Here are some highlights: Visit the historic Senso-ji Temple, explore the vibrant Shibuya district, enjoy the view from Tokyo Skytree, and don't miss the delicious street food in Harajuku. The best time to visit is during spring (March-May) for cherry blossoms or autumn (September-November) for pleasant weather. Would you like specific recommendations for hotels or restaurants?";
    }

    if (lowerMessage.includes('quantum') || lowerMessage.includes('physics')) {
      return "Quantum physics is fascinating! It's the study of matter and energy at the smallest scales. Key concepts include wave-particle duality, superposition (particles existing in multiple states), and quantum entanglement. These principles have led to technologies like quantum computers, which can solve certain problems exponentially faster than classical computers. What aspect interests you most?";
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence')) {
      return "AI (Artificial Intelligence) refers to machines that can perform tasks requiring human intelligence. Modern AI uses neural networks inspired by the human brain, learning from vast amounts of data. Applications include natural language processing (like me!), computer vision, autonomous vehicles, and medical diagnosis. AI is rapidly evolving and transforming industries worldwide. What would you like to know more about?";
    }

    return "That's an interesting question! As your AI assistant, I can help you with travel planning, learning new topics, exploring technology, and much more. Could you tell me more about what you'd like to discover?";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      isUser: true,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const aiResponse: Message = {
        id: messages.length + 2,
        text: getAIResponse(input),
        isUser: false,
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleSuggestionClick = (suggestionText: string) => {
    setInput(suggestionText);
  };

  return (
    <section
      id="ai-assistant"
      className="relative min-h-screen py-20 px-4 sm:px-6 lg:px-8 bg-gray-900"
    >
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-4">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-400 text-sm font-medium">AI-Powered Chat</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Your Intelligent Assistant
          </h2>
          <p className="text-xl text-gray-400">
            Ask me anything about travel, technology, or knowledge
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gray-800/50 backdrop-blur-xl border border-gray-700/50 rounded-3xl shadow-2xl overflow-hidden"
        >
          <div className="h-[500px] overflow-y-auto p-6 space-y-4 scrollbar-thin scrollbar-thumb-cyan-500/50 scrollbar-track-gray-800/50">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] px-6 py-4 rounded-2xl ${
                    message.isUser
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white'
                      : 'bg-gray-700/50 border border-gray-600/50 text-gray-200'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}

            {isTyping && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                <div className="bg-gray-700/50 border border-gray-600/50 px-6 py-4 rounded-2xl">
                  <div className="flex space-x-2">
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.2 }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 0.6, repeat: Infinity, delay: 0.4 }}
                      className="w-2 h-2 bg-cyan-400 rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {messages.length === 1 && (
            <div className="px-6 pb-4">
              <p className="text-sm text-gray-400 mb-3">Try asking about:</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {suggestions.map((suggestion, index) => (
                  <motion.button
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleSuggestionClick(suggestion.text)}
                    className={`flex items-center space-x-2 px-4 py-3 bg-${suggestion.color}-500/10 border border-${suggestion.color}-500/30 rounded-xl hover:bg-${suggestion.color}-500/20 transition-colors text-left`}
                  >
                    <suggestion.icon className={`w-5 h-5 text-${suggestion.color}-400`} />
                    <span className="text-sm text-gray-300">{suggestion.text}</span>
                  </motion.button>
                ))}
              </div>
            </div>
          )}

          <div className="p-6 border-t border-gray-700/50">
            <div className="flex space-x-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-6 py-4 bg-gray-700/50 border border-gray-600/50 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSend}
                disabled={!input.trim()}
                className="px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AIAssistant;
