import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { CAL_BOOKING_URL, buildWhatsAppUrl } from '../utils/whatsapp';

interface StickyMobileBarProps {
  utmSource: string;
}

export const StickyMobileBar: React.FC<StickyMobileBarProps> = ({ utmSource }) => {
  const whatsappUrl = buildWhatsAppUrl('footer', utmSource);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-3 bg-[#0E1E3A]/95 backdrop-blur-md border-t border-white/10 md:hidden">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        {/* Main button */}
        <motion.a
          href={CAL_BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.98 }}
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-3 px-4 rounded-full bg-[#8FD3FF] text-[#0E1E3A] font-heading font-bold text-sm shadow-md"
        >
          <span>Book a free audit call</span>
          <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
        </motion.a>

        {/* Small WhatsApp icon button */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileTap={{ scale: 0.95 }}
          aria-label="Message on WhatsApp"
          className="w-12 h-12 rounded-full bg-[#162a4d] border border-[#8FD3FF]/40 text-[#8FD3FF] flex items-center justify-center shrink-0 shadow-md hover:bg-[#8FD3FF] hover:text-[#0E1E3A] transition-colors"
        >
          <MessageSquare className="w-5 h-5 stroke-[2.2]" />
        </motion.a>
      </div>
    </div>
  );
};
