import React from 'react';
import { motion } from 'motion/react';
import { CalendarCheck, FileSpreadsheet, Rocket } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '1',
      title: 'Book your free audit call',
      description:
        'Pick a time on our calendar that works for you. We review how trial signups currently ask questions and where they drop off without getting an answer.',
      icon: CalendarCheck,
    },
    {
      num: '2',
      title: 'Get your plan',
      description:
        'You leave with a clear roadmap of the settings and plan questions to automate, how urgent flags get routed, and an exact price for your business.',
      icon: FileSpreadsheet,
    },
    {
      num: '3',
      title: 'We set it up on your site and WhatsApp',
      description:
        'We write every answer with you, you approve each one before launch, and we connect the bot to your site and WhatsApp.',
      icon: Rocket,
    },
  ];

  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-[#0E1E3A]/60 mb-3">
            How it works
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#0E1E3A] tracking-tight leading-[1.15]">
            How we get you up and running.
          </h2>
        </div>

        {/* Steps container with animated connector line */}
        <div className="relative">
          {/* Highlight line joined between steps on desktop */}
          <div className="hidden lg:block absolute top-12 left-16 right-16 h-1 bg-slate-100 z-0 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="h-full bg-[#8FD3FF] origin-left"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.2 }}
                  className="bg-[#F2F5FA] rounded-[24px] p-8 sm:p-10 border border-[#0E1E3A]/6 flex flex-col justify-between"
                >
                  <div>
                    {/* Step number badge & icon */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="w-14 h-14 rounded-2xl bg-[#0E1E3A] text-white flex items-center justify-center font-heading font-bold text-xl shadow-md">
                        {step.num}
                      </div>
                      <div className="w-12 h-12 rounded-xl bg-white border border-[#0E1E3A]/10 flex items-center justify-center text-[#0E1E3A]">
                        <Icon className="w-6 h-6 stroke-[2]" />
                      </div>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-[#0E1E3A] tracking-tight mb-4 leading-snug">
                      {step.title}
                    </h3>

                    <p className="text-[#0E1E3A]/80 leading-relaxed text-sm sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
