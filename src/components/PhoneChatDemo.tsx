import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CheckCheck, Send } from 'lucide-react';

type TabType = 'trial' | 'support';

interface Message {
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

const CONVERSATIONS: Record<TabType, Message[]> = {
  trial: [
    {
      sender: 'user',
      text: 'Can I connect my custom domain on your Starter plan?',
      time: '10:14 AM',
    },
    {
      sender: 'bot',
      text: 'Yes, custom domains work on every plan under Settings > Domains.',
      time: '10:14 AM',
    },
    {
      sender: 'user',
      text: 'Does it come with automatic SSL?',
      time: '10:15 AM',
    },
    {
      sender: 'bot',
      text: 'Automatic SSL is included. What is your name and WhatsApp number so we can send the setup guide?',
      time: '10:15 AM',
    },
    {
      sender: 'user',
      text: 'Aditya, 98765 43210',
      time: '10:16 AM',
    },
    {
      sender: 'bot',
      text: 'Saved Aditya. The guide is on its way to your WhatsApp.',
      time: '10:16 AM',
    },
  ],
  support: [
    {
      sender: 'user',
      text: 'Our webhook stopped sending events, need urgent help',
      time: '02:30 PM',
    },
    {
      sender: 'bot',
      text: 'Our server status is healthy right now. What endpoint URL are you sending to?',
      time: '02:30 PM',
    },
    {
      sender: 'user',
      text: 'https://api.acme.co/webhook',
      time: '02:31 PM',
    },
    {
      sender: 'bot',
      text: 'I have logged this and flagged it as urgent directly to your team on WhatsApp. Someone is reviewing it right now.',
      time: '02:31 PM',
    },
  ],
};

export const PhoneChatDemo: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('trial');
  const [visibleCount, setVisibleCount] = useState<number>(1);
  const userInteracted = useRef(false);

  // Auto-switch tabs if user hasn't clicked
  useEffect(() => {
    const timer = setInterval(() => {
      if (!userInteracted.current) {
        setActiveTab((prev) => (prev === 'trial' ? 'support' : 'trial'));
      }
    }, 9000);
    return () => clearInterval(timer);
  }, []);

  // Reveal messages progressively
  useEffect(() => {
    setVisibleCount(1);
    const messages = CONVERSATIONS[activeTab];
    let count = 1;
    const interval = setInterval(() => {
      count++;
      if (count <= messages.length) {
        setVisibleCount(count);
      } else {
        clearInterval(interval);
      }
    }, 1400);

    return () => clearInterval(interval);
  }, [activeTab]);

  const handleTabClick = (tab: TabType) => {
    userInteracted.current = true;
    setActiveTab(tab);
  };

  const messages = CONVERSATIONS[activeTab];

  return (
    <div className="w-full max-w-[380px] mx-auto flex flex-col items-center">
      {/* Tabs */}
      <div className="flex items-center gap-2 p-1.5 rounded-full bg-[#162a4d] border border-white/10 mb-4 w-full max-w-[340px]">
        <button
          onClick={() => handleTabClick('trial')}
          className={`flex-1 py-2 px-3 text-xs font-heading font-bold rounded-full transition-all cursor-pointer ${
            activeTab === 'trial'
              ? 'bg-[#8FD3FF] text-[#0E1E3A] shadow-sm'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Trial Reply Fix
        </button>
        <button
          onClick={() => handleTabClick('support')}
          className={`flex-1 py-2 px-3 text-xs font-heading font-bold rounded-full transition-all cursor-pointer ${
            activeTab === 'support'
              ? 'bg-[#8FD3FF] text-[#0E1E3A] shadow-sm'
              : 'text-white/70 hover:text-white'
          }`}
        >
          Support Backup
        </button>
      </div>

      {/* Phone Shell */}
      <div className="w-full bg-[#071020] rounded-[38px] p-3 shadow-2xl border-4 border-slate-700/60 relative overflow-hidden">
        {/* Phone Speaker & Camera Pill */}
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 flex items-center justify-end pr-3">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-800" />
        </div>

        {/* Screen */}
        <div className="w-full bg-[#0b141a] rounded-[28px] overflow-hidden flex flex-col h-[470px] relative font-sans text-white text-xs">
          {/* WhatsApp Header */}
          <div className="bg-[#1f2c34] pt-7 pb-2.5 px-3 flex items-center gap-2.5 border-b border-white/5">
            <div className="w-8 h-8 rounded-full bg-[#8FD3FF] text-[#0E1E3A] font-heading font-bold flex items-center justify-center text-xs">
              M
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-white truncate text-sm">
                {activeTab === 'trial' ? 'Your Trial Bot' : 'Support Backup Bot'}
              </p>
              <p className="text-[10px] text-[#25d366] font-medium flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#25d366] inline-block animate-pulse"></span>
                Online
              </p>
            </div>
          </div>

          {/* Chat Background & Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[#0b141a] bg-opacity-95 flex flex-col justify-end">
            <AnimatePresence mode="popLayout">
              {messages.slice(0, visibleCount).map((msg, idx) => {
                const isUser = msg.sender === 'user';
                return (
                  <motion.div
                    key={`${activeTab}-${idx}`}
                    initial={{ opacity: 0, y: 10, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.28, ease: 'easeOut' }}
                    className={`flex flex-col max-w-[84%] ${
                      isUser ? 'self-end items-end' : 'self-start items-start'
                    }`}
                  >
                    <div
                      className={`rounded-2xl px-3 py-2 text-xs leading-relaxed shadow-sm ${
                        isUser
                          ? 'bg-[#005c4b] text-white rounded-tr-none'
                          : 'bg-[#202c33] text-slate-100 rounded-tl-none border border-white/5'
                      }`}
                    >
                      <p>{msg.text}</p>
                      <div
                        className={`flex items-center gap-1 justify-end mt-1 text-[9px] ${
                          isUser ? 'text-white/60' : 'text-slate-400'
                        }`}
                      >
                        <span>{msg.time}</span>
                        {isUser && <CheckCheck className="w-3 h-3 text-[#53bdeb]" />}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Chat Input Bar */}
          <div className="bg-[#1f2c34] p-2 flex items-center gap-2 border-t border-white/5">
            <div className="flex-1 bg-[#2a3942] rounded-full px-3 py-1.5 text-[11px] text-slate-400">
              Type your reply...
            </div>
            <div className="w-7 h-7 rounded-full bg-[#00a884] flex items-center justify-center text-white">
              <Send className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Caption */}
      <p className="text-white/50 text-xs mt-3 font-medium tracking-wide">
        Example chat
      </p>
    </div>
  );
};
