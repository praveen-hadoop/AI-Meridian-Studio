import React from 'react';
import { motion } from 'motion/react';
import { MessageSquare, ArrowUpRight } from 'lucide-react';
import { CAL_BOOKING_URL, buildWhatsAppUrl, WhatsAppSection } from '../utils/whatsapp';

interface BookingButtonProps {
  label?: string;
  className?: string;
  size?: 'default' | 'sm';
}

export const BookingButton: React.FC<BookingButtonProps> = ({
  label = 'Book a free audit call',
  className = '',
  size = 'default',
}) => {
  const sizeClasses =
    size === 'sm'
      ? 'px-4 py-2 text-sm font-semibold'
      : 'px-6 py-3.5 text-base font-bold';

  return (
    <motion.a
      href={CAL_BOOKING_URL}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#8FD3FF] text-[#0E1E3A] font-heading shadow-sm hover:bg-[#b0e2ff] transition-colors text-center cursor-pointer ${sizeClasses} ${className}`}
    >
      <span>{label}</span>
      <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
    </motion.a>
  );
};

interface WhatsAppButtonProps {
  section: WhatsAppSection;
  utmSource?: string;
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'default' | 'sm';
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  section,
  utmSource = 'direct',
  variant = 'light',
  className = '',
  size = 'default',
}) => {
  const url = buildWhatsAppUrl(section, utmSource);
  const sizeClasses =
    size === 'sm'
      ? 'px-4 py-2 text-sm font-semibold'
      : 'px-5 py-3.5 text-base font-semibold';

  const variantClasses =
    variant === 'dark'
      ? 'border border-[#8FD3FF]/40 text-white hover:bg-white/10 hover:border-[#8FD3FF]'
      : 'bg-white text-[#0E1E3A] border border-[#0E1E3A]/15 shadow-sm hover:bg-[#F2F5FA] hover:border-[#0E1E3A]/30';

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-heading transition-all cursor-pointer text-center ${variantClasses} ${sizeClasses} ${className}`}
    >
      <MessageSquare className="w-4 h-4 stroke-[2.2] text-[#8FD3FF]" />
      <span>Message on WhatsApp</span>
    </motion.a>
  );
};
