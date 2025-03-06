import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm your Heart Health Assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = {
      text: input,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const botResponse = {
        text: generateResponse(input),
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsLoading(false);
    }, 1000);
  };

  const generateResponse = (query: string): string => {
    // Simple response generation logic
    const responses = {
      heart: "The heart is a muscular organ that pumps blood throughout your body. It's about the size of your fist and beats about 100,000 times per day.",
      exercise: "Regular exercise is crucial for heart health. Aim for at least 150 minutes of moderate aerobic activity or 75 minutes of vigorous aerobic activity per week.",
      diet: "A heart-healthy diet includes plenty of fruits, vegetables, whole grains, lean proteins, and healthy fats. Limit saturated fats, trans fats, and sodium.",
      symptoms: "Common heart problem symptoms include chest pain, shortness of breath, irregular heartbeat, and fatigue. If you experience these, please consult a healthcare provider.",
      prevention: "Prevent heart disease by maintaining a healthy lifestyle: regular exercise, balanced diet, stress management, and regular check-ups.",
    };

    const query_lower = query.toLowerCase();
    for (const [key, value] of Object.entries(responses)) {
      if (query_lower.includes(key)) {
        return value;
      }
    }

    return "I'm here to help with heart health questions. Could you please be more specific about what you'd like to know?";
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="p-6 bg-gradient-to-r from-[#4D96FF] to-[#FF6B6B]">
        <h2 className="text-2xl font-bold text-white">Heart Health Assistant</h2>
        <p className="text-white/80">Ask me anything about heart health</p>
      </div>

      <div className="h-[500px] flex flex-col">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`flex items-start gap-3 ${message.isBot ? '' : 'flex-row-reverse'}`}
            >
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                message.isBot ? 'bg-[#4D96FF]' : 'bg-[#FF6B6B]'
              }`}>
                {message.isBot ? (
                  <Bot className="w-5 h-5 text-white" />
                ) : (
                  <User className="w-5 h-5 text-white" />
                )}
              </div>
              <div className={`flex-1 ${message.isBot ? 'pr-12' : 'pl-12'}`}>
                <div className={`rounded-2xl p-4 ${
                  message.isBot ? 'bg-gray-100' : 'bg-[#4D96FF] text-white'
                }`}>
                  {message.text}
                </div>
                <span className="text-xs text-gray-400 mt-1 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </motion.div>
          ))}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-gray-400"
            >
              <Bot className="w-5 h-5" />
              <span>Typing...</span>
            </motion.div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="flex-1 px-4 py-2 rounded-full border focus:outline-none focus:ring-2 focus:ring-[#4D96FF] focus:border-transparent"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#4D96FF] to-[#FF6B6B] text-white p-3 rounded-full hover:shadow-lg transition-shadow"
              disabled={!input.trim() || isLoading}
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Chatbot; 