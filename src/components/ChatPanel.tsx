import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Smile } from 'lucide-react';
import { useAppStore } from '../lib/store';

const messages = [
  { id: 1, sender: 'Sarah', text: 'Hey! Are you going to the new café downtown?', time: '10:30 AM' },
  { id: 2, sender: 'You', text: 'Yes! I heard they have amazing pastries', time: '10:32 AM' },
  { id: 3, sender: 'Sarah', text: 'Perfect! Let\'s meet there at 2?', time: '10:33 AM' },
  { id: 4, sender: 'You', text: 'Sounds good! See you then 😊', time: '10:35 AM' },
];

export default function ChatPanel() {
  const { showChat, setShowChat } = useAppStore();
  const [message, setMessage] = React.useState('');

  return (
    <AnimatePresence>
      {showChat && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={() => setShowChat(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-4 right-4 w-96 h-[600px] bg-purple-900 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="flex items-center justify-between p-4 border-b border-purple-800">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=40&h=40&q=80"
                    alt="Sarah"
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 rounded-full border-2 border-purple-900"></span>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Sarah Anderson</h3>
                  <p className="text-sm text-purple-300">Online</p>
                </div>
              </div>
              <button
                onClick={() => setShowChat(false)}
                className="p-2 hover:bg-purple-800 rounded-full transition-colors"
              >
                <X className="h-5 w-5 text-purple-300" />
              </button>
            </div>

            <div className="p-4 h-[calc(100%-8rem)] overflow-y-auto space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[70%] rounded-2xl px-4 py-2 ${
                      msg.sender === 'You'
                        ? 'bg-purple-600 text-white'
                        : 'bg-purple-800 text-purple-100'
                    }`}
                  >
                    <p>{msg.text}</p>
                    <p className="text-xs mt-1 opacity-70">{msg.time}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-purple-900 border-t border-purple-800">
              <div className="flex items-center space-x-2">
                <button className="p-2 hover:bg-purple-800 rounded-full transition-colors">
                  <Smile className="h-5 w-5 text-purple-300" />
                </button>
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 bg-purple-800 text-white placeholder-purple-400 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button className="p-2 bg-purple-600 hover:bg-purple-500 rounded-full transition-colors">
                  <Send className="h-5 w-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}