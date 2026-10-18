import React from 'react';
import { motion } from 'motion/react';
import { BookingButton, WhatsAppButton } from './Buttons';
import { Check } from 'lucide-react';

interface AuditPanelProps {
  utmSource: string;
}

export const AuditPanel: React.FC<AuditPanelProps> = ({ utmSource }) => {
  const deliverables = [
    {
      title: 'Where you lose trial users today',
      description:
        'We pinpoint the exact friction points where trial signups drop off before reaching their setup milestone.',
    },
    {
      title: 'What to automate first',
      description:
        'You see which settings and plan questions make sense to answer immediately on WhatsApp so your team saves time.',
    },
    {
      title: 'A clear price for your business',
      description:
        'You receive a straightforward implementation scope and fixed setup cost tailored to your current volume.',
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#F2F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0E1E3A] text-white rounded-[24px] p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle background glow */}
          <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-[#8FD3FF]/15 blur-[100px] pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-[#8FD3FF] mb-4">
              Free audit call
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white tracking-tight leading-[1.12] mb-6">
              Get your AI growth plan in a free 1:1 call
            </h2>

            <p className="text-lg text-white/80 leading-relaxed mb-10 max-w-2xl">
              Talk directly with Praveen to audit your trial user onboarding
              and review your WhatsApp chat bot options.
            </p>

            {/* The three things you leave with */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {deliverables.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="bg-[#162a4d] rounded-2xl p-6 border border-white/5 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-8 h-8 rounded-full bg-[#8FD3FF] text-[#0E1E3A] flex items-center justify-center mb-4 font-bold">
                      <Check className="w-4 h-4 stroke-[3]" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white mb-2 leading-snug">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-white/70 leading-relaxed mt-2">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <BookingButton />
              <WhatsAppButton
                section="audit"
                utmSource={utmSource}
                variant="dark"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
