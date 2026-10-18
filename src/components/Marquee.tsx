import React from 'react';

export const Marquee: React.FC = () => {
  const row1Items = ['Trial Reply Fix', 'Support Backup'];
  const row2Items = [
    'For Software and SaaS companies',
    'Hyderabad',
    'Runs on your site and WhatsApp',
  ];

  // Repeat items to ensure seamless endless ribbon
  const repeatedRow1 = [...row1Items, ...row1Items, ...row1Items, ...row1Items, ...row1Items, ...row1Items];
  const repeatedRow2 = [...row2Items, ...row2Items, ...row2Items, ...row2Items, ...row2Items];

  return (
    <section
      aria-label="Core offerings summary"
      className="w-full overflow-hidden bg-[#071020] border-y border-white/10 py-6 select-none"
    >
      {/* Row 1: Big and bold in white, heading font */}
      <div className="w-full overflow-hidden mb-3">
        <div className="animate-marquee-left flex items-center gap-8 whitespace-nowrap">
          {repeatedRow1.map((item, idx) => (
            <React.Fragment key={`r1-${idx}`}>
              <span className="font-heading font-bold text-2xl sm:text-3xl text-white tracking-tight">
                {item}
              </span>
              <span className="w-2 h-2 rounded-full bg-[#8FD3FF] shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Row 2: Half size, body font, uppercase, wide spacing, off-white at 60% opacity */}
      <div className="w-full overflow-hidden">
        <div className="animate-marquee-right flex items-center gap-8 whitespace-nowrap">
          {repeatedRow2.map((item, idx) => (
            <React.Fragment key={`r2-${idx}`}>
              <span className="text-xs sm:text-sm uppercase tracking-widest text-white/60 font-semibold">
                {item}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#8FD3FF] shrink-0" />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
