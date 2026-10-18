import React from 'react';
import { motion } from 'motion/react';
import { LogoMark } from './Logo';
import { BookingButton, WhatsAppButton } from './Buttons';

interface FounderProps {
  utmSource: string;
}

export const Founder: React.FC<FounderProps> = ({ utmSource }) => {
  return (
    <section id="founder" className="py-20 lg:py-28 bg-[#F2F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[24px] p-8 sm:p-12 lg:p-16 border border-[#0E1E3A]/8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Logo mark, large, in a 4:5 rounded tile of the highlight colour */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-[320px] aspect-[4/5] rounded-[24px] bg-[#8FD3FF] flex flex-col items-center justify-center p-8 shadow-inner relative overflow-hidden group"
              >
                {/* Subtle geometric lines */}
                <div className="absolute inset-0 opacity-15 pointer-events-none">
                  <div className="w-full h-full border-2 border-[#0E1E3A] rounded-[20px] transform scale-90" />
                </div>

                <LogoMark size={140} inverted={false} />

                <div className="mt-8 text-center">
                  <span className="font-heading font-bold text-sm tracking-widest uppercase text-[#0E1E3A]">
                    Meridian Growth Studio
                  </span>
                </div>
              </motion.div>
            </div>

            {/* Founder details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-[#0E1E3A]/50 mb-3">
                Founder
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#0E1E3A] tracking-tight mb-2">
                Praveen
              </h2>

              <p className="text-base sm:text-lg font-medium text-[#0E1E3A]/70 mb-8">
                Founder, Meridian Growth Studio
              </p>

              {/* One plain line */}
              <p className="text-xl sm:text-2xl text-[#0E1E3A] font-medium leading-relaxed max-w-xl mb-10">
                We help Software and SaaS companies in Hyderabad reply to every
                trial user on time.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <BookingButton label="Book a free call with Praveen" />
                <WhatsAppButton
                  section="founder"
                  utmSource={utmSource}
                  variant="light"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
