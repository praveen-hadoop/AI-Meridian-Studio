import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareText, ShieldCheck } from 'lucide-react';

export const WhatChanges: React.FC = () => {
  const cards = [
    {
      title: 'Your trial queue stays empty because users get answers right away',
      problemLabel: 'The Trial Reply Fix',
      icon: MessageSquareText,
      description:
        'A WhatsApp chat bot on your site answers trial user questions about settings and plans, and takes their name and number. Your day has no unanswered trial queue. We write the answers with you, and you check them before they go live.',
      benefit: 'You never lose an active trial signup to a silent waiting queue.',
    },
    {
      title: 'Your queue never piles up when your support person is away',
      problemLabel: 'The Support Backup',
      icon: ShieldCheck,
      description:
        'When your support person is on leave or busy, the bot answers common questions and flags the urgent ones to you on WhatsApp. You stay informed without spending hours answering basic setup questions.',
      benefit: 'You get peace of mind during team leave and busy sprint days.',
    },
  ];

  return (
    <section id="what-changes" className="py-20 lg:py-28 bg-[#F2F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-[#0E1E3A]/60 mb-3">
            What changes for you
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#0E1E3A] tracking-tight leading-[1.15]">
            You stop losing trial users to slow replies.
          </h2>
        </div>

        {/* 24px rounded cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-[24px] p-8 sm:p-10 border border-[#0E1E3A]/8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  {/* Big icon in a rounded highlight tile */}
                  <div className="w-16 h-16 rounded-[20px] bg-[#8FD3FF] text-[#0E1E3A] flex items-center justify-center mb-7 shadow-xs">
                    <Icon className="w-8 h-8 stroke-[2.2]" />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#0E1E3A]/50 mb-2">
                    {card.problemLabel}
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-heading font-bold text-[#0E1E3A] tracking-tight leading-snug mb-5">
                    {card.title}
                  </h3>

                  <p className="text-[#0E1E3A]/80 leading-relaxed text-base mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-[#0E1E3A]/8">
                  <p className="text-sm font-semibold text-[#0E1E3A]">
                    {card.benefit}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
