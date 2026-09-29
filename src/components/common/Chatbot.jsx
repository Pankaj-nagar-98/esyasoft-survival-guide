import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, Sparkles, ChevronRight, HelpCircle } from 'lucide-react';
import { queryKnowledgeBase, MASTER_FAQS } from '../../data/chatbotKb';

const QUICK_PROMPTS = [
  "What time do sessions start?",
  "Wi-Fi password & rooms?",
  "What should I wear?",
  "Mess timings & food?",
  "Remote meter commands?",
  "UX & Tech stack?",
  "Potential roles after training?",
  "Prabhu's attendance rule?"
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello, Batch 2026 Engineer. I am your Esyasoft Master Onboarding Assistant. Ask me anything from our 39 Master FAQs (schedule, Zoho, dress code, Wi-Fi, accommodation, remote meter commands, tech stack, or career roles).",
      points: []
    }
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputMessage).trim();
    if (!query) return;

    // Add user message
    const userMsg = { id: Date.now(), sender: 'user', text: query };
    setMessages(prev => [...prev, userMsg]);
    if (!textToSend) setInputMessage('');

    // Generate grounded response from Master Onboarding Knowledge Base
    setTimeout(() => {
      const match = queryKnowledgeBase(query);

      if (match) {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: match.qNum ? `${match.qNum}: ${match.title}` : match.title,
            points: match.reply
          }
        ]);
      } else {
        setMessages(prev => [
          ...prev,
          {
            id: Date.now() + 1,
            sender: 'bot',
            text: "Esyasoft Master Onboarding Operations Assistant",
            points: [
              "Ask any of the 39 Master Onboarding questions directly (e.g., 'What time do sessions start?', 'What should I wear?', 'Wi-Fi password', 'BLP intervals', or 'Potential roles').",
              "You can also query by question number, such as 'Q1', 'Q7', 'Q21', or 'Q38'.",
              "Prabhu's directive: 'If you forgot to check in check out you won't get salary!' (Ensure 09:00 AM check-in and 06:30 PM checkout).",
              "Feel free to ask about mess timings, accommodation amenities, laptops, or remote meter commands."
            ]
          }
        ]);
      }
    }, 300);
  };

  // Listen for Cmd+K / Ctrl+K keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {/* Floating Toggle Button (Ask Esya - Matches user screenshot) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#11182c]/95 hover:bg-[#16203a] text-white border border-slate-700/80 shadow-2xl backdrop-blur-md transition-all transform hover:scale-105 active:scale-95 cursor-pointer ring-1 ring-white/10"
          aria-label="Ask Esya AI Assistant"
        >
          <div className="w-8 h-8 rounded-full bg-[#8cb83a] hover:bg-[#7ba333] text-slate-950 flex items-center justify-center font-black shadow-md flex-shrink-0 transition-colors">
            <Sparkles className="w-4 h-4 fill-slate-950 text-slate-950" />
          </div>
          <div className="text-left hidden sm:block pr-1">
            <div className="text-[10px] text-slate-400 font-medium leading-none">Need a clearer view?</div>
            <div className="text-xs font-bold text-white leading-tight">Ask Esya</div>
          </div>
          <div className="hidden md:flex items-center justify-center px-1.5 py-0.5 rounded bg-slate-800/90 border border-slate-700 text-[10px] font-mono text-slate-400">
            ⌘K
          </div>
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-emerald-200 dark:border-slate-800 w-[92vw] sm:w-96 max-h-[580px] h-[85vh] flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-800 to-teal-800 text-white flex items-center justify-between flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center border border-emerald-400">
                <Bot className="w-4 h-4 text-emerald-100" />
              </div>
              <div>
                <h4 className="text-xs font-bold leading-tight flex items-center gap-1.5">
                  <span>Esyasoft AI Guide</span>
                  <span className="text-[9px] px-1.5 py-0.2 rounded-full bg-emerald-500/40 text-emerald-200 font-mono">v2026</span>
                </h4>
                <p className="text-[10px] text-emerald-200/90">Grounded Operations Assistant</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-emerald-200 hover:text-white hover:bg-emerald-700 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Prompts Bar */}
          <div className="p-2 bg-emerald-50/70 dark:bg-slate-900 border-b border-emerald-100 dark:border-slate-800 overflow-x-auto flex items-center gap-1.5 scrollbar-none flex-shrink-0">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="whitespace-nowrap px-2.5 py-1 rounded-full text-[10px] font-semibold bg-white dark:bg-slate-800 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-slate-700 hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors cursor-pointer"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Messages Body */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3.5 bg-slate-50/50 dark:bg-slate-950/60">
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-emerald-200 dark:border-emerald-800">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}

                <div
                  className={`max-w-[82%] p-3 rounded-2xl text-xs leading-relaxed space-y-1.5 ${
                    m.sender === 'user'
                      ? 'bg-emerald-600 text-white rounded-br-none shadow-xs'
                      : 'bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-100 border border-emerald-100 dark:border-slate-800 rounded-bl-none shadow-xs'
                  }`}
                >
                  <p className="font-semibold">{m.text}</p>
                  {m.points && m.points.length > 0 && (
                    <ul className="space-y-1 pt-1 border-t border-slate-100 dark:border-slate-800 mt-1">
                      {m.points.map((pt, i) => (
                        <li key={i} className="flex items-start gap-1.5 text-[11px] text-slate-700 dark:text-slate-300">
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {m.sender === 'user' && (
                  <div className="w-6 h-6 rounded-full bg-slate-800 dark:bg-emerald-700 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Footer */}
          <div className="p-3 bg-white dark:bg-slate-900 border-t border-emerald-100 dark:border-slate-800 flex items-center gap-2 flex-shrink-0">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about schedule, Zoho, food, sports..."
              className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-emerald-200 dark:border-slate-700 text-xs text-slate-800 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white dark:focus:bg-slate-800 transition-all"
            />
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </div>
  );
}
