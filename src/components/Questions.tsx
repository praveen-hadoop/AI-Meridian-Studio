import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const Questions: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'Who is this for?',
      answer:
        'We help Software and SaaS companies in Hyderabad that want to stop losing trial users to slow replies and unanswered questions.',
    },
    {
      question: 'What does it cost?',
      answer:
        'It depends on your business. You get a custom plan and a clear price for your business on the free audit call.',
    },
    {
      question: 'What do we set up for you?',
      answer:
        'We set up two systems. First, The Trial Reply Fix: a WhatsApp chat bot on your site that answers trial user questions about settings and plans and takes their name and number, so your day has no unanswered trial queue. We write the answers with you, and you check them before they go live. Second, The Support Backup: when your support person is on leave or busy, the bot answers common questions and flags the urgent ones to you, so your queue never piles up.',
    },
    {
      question: 'How do you start?',
      answer:
        'Book your free audit call on our calendar or message Praveen on WhatsApp. We walk through your current trial replies and give you a plan to grow your SaaS with AI.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="questions" className="py-20 lg:py-28 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center sm:text-left">
          <p className="text-xs uppercase tracking-widest font-bold text-[#0E1E3A]/60 mb-3">
            Questions
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#0E1E3A] tracking-tight leading-[1.15]">
            Everything you need to know.
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-[20px] bg-[#F2F5FA] border border-[#0E1E3A]/8 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer hover:bg-slate-100/70 transition-colors"
                >
                  <span className="font-heading font-bold text-lg sm:text-xl text-[#0E1E3A] pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#0E1E3A]/10 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#8FD3FF] text-[#0E1E3A]' : 'text-[#0E1E3A]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-1 text-[#0E1E3A]/80 leading-relaxed text-base border-t border-[#0E1E3A]/6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
