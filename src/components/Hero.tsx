import React from 'react';
import { motion } from 'motion/react';
import { BookingButton, WhatsAppButton } from './Buttons';
import { PhoneChatDemo } from './PhoneChatDemo';

interface HeroProps {
  utmSource: string;
}

export const Hero: React.FC<HeroProps> = ({ utmSource }) => {
  const headlineWords = [
    'Your',
    'trial',
    'users',
    'sign',
    'up,',
    'wait',
    'for',
    'answers,',
    'and',
    'leave.',
  ];

  return (
    <section className="relative overflow-hidden bg-[#0E1E3A] text-white pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* Soft drifting highlight glow behind the hero */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.18, 0.28, 0.18],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="pointer-events-none absolute -top-32 left-1/4 w-[500px] h-[500px] rounded-full bg-[#8FD3FF] blur-[120px]"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Copy & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Pill */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#162a4d] border border-[#8FD3FF]/30 text-[#8FD3FF] text-xs sm:text-sm font-semibold tracking-wide mb-6"
            >
              For Software and SaaS companies in Hyderabad
            </motion.div>

            {/* Headline word-by-word reveal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.08] mb-6">
              {headlineWords.map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.45,
                    delay: 0.08 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-block mr-[0.26em]"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* One plain sentence under it */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mb-8"
            >
              We set up a WhatsApp bot on your site so every trial user gets an
              answer about your settings and plans, and leaves their name and
              number for your team.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.75 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <BookingButton />
              <WhatsAppButton
                section="hero"
                utmSource={utmSource}
                variant="dark"
              />
            </motion.div>

            {/* One small line under the buttons */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-xs sm:text-sm text-white/60 mt-4 font-normal"
            >
              Free 1:1 call. You leave with a plan to grow your SaaS with AI.
            </motion.p>
          </div>

          {/* Right Column: Phone Chat Simulator */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <motion.div
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="w-full"
            >
              <PhoneChatDemo />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
