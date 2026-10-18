import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, MessageCircle, AlertCircle } from 'lucide-react';

interface BuildRowData {
  image: string;
  imageAlt: string;
  badge: {
    title: string;
    subtitle: string;
    icon: React.ReactNode;
  };
  title: string;
  whatYouGet: string;
  whatChangesForYou: string;
  reverse: boolean;
}

export const SampleBuilds: React.FC = () => {
  const rows: BuildRowData[] = [
    {
      image: '/work-1.jpg',
      imageAlt: 'Small SaaS team at desks in a bright Hyderabad office with a member glancing at phone',
      badge: {
        title: 'Trial reply sent',
        subtitle: 'Domain setup answered • Name & number captured',
        icon: <MessageCircle className="w-4 h-4 text-[#8FD3FF]" />,
      },
      title: 'The Trial Reply Fix',
      whatYouGet:
        'A WhatsApp chat bot on your site that answers trial user questions about settings and plans, and takes their name and number.',
      whatChangesForYou:
        'Your day has no unanswered trial queue. Your trial users get answers while they are active in your product instead of leaving before your team wakes up.',
      reverse: false,
    },
    {
      image: '/work-2.jpg',
      imageAlt: 'SaaS founder between meetings in a modern Hyderabad tech office corridor glancing at phone',
      badge: {
        title: 'Urgent issue flagged',
        subtitle: 'Webhook alert forwarded to founder on WhatsApp',
        icon: <AlertCircle className="w-4 h-4 text-[#8FD3FF]" />,
      },
      title: 'The Support Backup',
      whatYouGet:
        'When your support person is on leave or busy, the bot answers common questions and flags urgent issues directly to your WhatsApp.',
      whatChangesForYou:
        'Your support queue never piles up. Common questions resolve themselves, and you only receive notifications when an issue needs your eyes.',
      reverse: true,
    },
    {
      image: '/work-3.jpg',
      imageAlt: 'Support team member relaxed at desk with coffee and phone beside laptop',
      badge: {
        title: 'Answers approved',
        subtitle: 'All replies reviewed before going live',
        icon: <CheckCircle2 className="w-4 h-4 text-[#8FD3FF]" />,
      },
      title: 'Written and checked with you',
      whatYouGet:
        'We write every reply together with you based on your exact docs, and you check every answer before it goes live on your site.',
      whatChangesForYou:
        'You never worry about inaccurate messages or made-up details. Your bot speaks in your exact voice with answers you have verified yourself.',
      reverse: false,
    },
  ];

  return (
    <section id="sample-builds" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-widest font-bold text-[#0E1E3A]/60 mb-3">
            Sample builds
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#0E1E3A] tracking-tight leading-[1.15]">
            See what we set up for your SaaS.
          </h2>
        </div>

        <div className="space-y-24 lg:space-y-32">
          {rows.map((row, idx) => (
            <div
              key={idx}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center ${
                row.reverse ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Photo with soft wipe reveal & floating badge */}
              <div
                className={`lg:col-span-6 relative ${
                  row.reverse ? 'lg:order-2' : 'lg:order-1'
                }`}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-[24px] overflow-hidden shadow-lg border border-[#0E1E3A]/10 bg-slate-100 aspect-[3/2]"
                >
                  <img
                    src={row.image}
                    alt={row.imageAlt}
                    width={900}
                    height={600}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </motion.div>

                {/* Overlapping small coded chat bubble / notification badge */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="absolute -bottom-5 -right-2 sm:right-6 bg-[#0E1E3A] text-white p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/10 max-w-[280px] sm:max-w-[320px] z-10"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#162a4d] flex items-center justify-center shrink-0 mt-0.5">
                      {row.badge.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-heading font-bold text-xs sm:text-sm text-white truncate">
                        {row.badge.title}
                      </p>
                      <p className="text-[11px] text-white/70 leading-tight mt-0.5">
                        {row.badge.subtitle}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Text content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`lg:col-span-6 flex flex-col justify-center ${
                  row.reverse ? 'lg:order-1' : 'lg:order-2'
                }`}
              >
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[#8FD3FF]" />
                  <span className="text-xs uppercase font-bold tracking-wider text-[#0E1E3A]/60">
                    Sample build
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-[#0E1E3A] tracking-tight mb-8">
                  {row.title}
                </h3>

                <div className="space-y-6">
                  {/* Exactly headed "What you get" */}
                  <div className="bg-[#F2F5FA] rounded-[20px] p-6 border border-[#0E1E3A]/6">
                    <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0E1E3A] mb-2">
                      What you get
                    </h4>
                    <p className="text-[#0E1E3A]/80 leading-relaxed text-sm sm:text-base">
                      {row.whatYouGet}
                    </p>
                  </div>

                  {/* Exactly headed "What changes for you" */}
                  <div className="bg-[#F2F5FA] rounded-[20px] p-6 border border-[#0E1E3A]/6">
                    <h4 className="text-sm font-heading font-bold uppercase tracking-wider text-[#0E1E3A] mb-2">
                      What changes for you
                    </h4>
                    <p className="text-[#0E1E3A]/80 leading-relaxed text-sm sm:text-base">
                      {row.whatChangesForYou}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
