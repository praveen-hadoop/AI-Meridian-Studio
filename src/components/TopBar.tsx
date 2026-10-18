import React from 'react';
import { Logo } from './Logo';
import { CAL_BOOKING_URL } from '../utils/whatsapp';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const TopBar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-[#0E1E3A]/90 border-b border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <Logo inverted={true} />
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-white/80">
          <a
            href="#what-changes"
            className="hover:text-white transition-colors py-1"
          >
            What changes
          </a>
          <a
            href="#sample-builds"
            className="hover:text-white transition-colors py-1"
          >
            Sample builds
          </a>
          <a
            href="#calculator"
            className="hover:text-white transition-colors py-1"
          >
            Cost of unanswered trials
          </a>
          <a
            href="#how-it-works"
            className="hover:text-white transition-colors py-1"
          >
            How it works
          </a>
          <a
            href="#questions"
            className="hover:text-white transition-colors py-1"
          >
            Questions
          </a>
        </nav>

        {/* Top bar pill button */}
        <div className="flex items-center gap-3">
          <motion.a
            href={CAL_BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -1, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#8FD3FF] text-[#0E1E3A] font-heading font-bold text-xs sm:text-sm shadow-sm hover:bg-[#b2e5ff] transition-colors"
          >
            <span>Free audit call</span>
            <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
          </motion.a>
        </div>
      </div>
    </header>
  );
};
