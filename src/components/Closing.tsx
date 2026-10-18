import React from 'react';
import { Logo } from './Logo';
import { BookingButton, WhatsAppButton } from './Buttons';

interface ClosingProps {
  utmSource: string;
}

export const Closing: React.FC<ClosingProps> = ({ utmSource }) => {
  return (
    <>
      {/* Closing section with place.jpg under a dark colour layer */}
      <section className="relative overflow-hidden bg-[#071020] text-white py-24 lg:py-36">
        {/* Background Image: place.jpg */}
        <div className="absolute inset-0 z-0">
          <img
            src="/place.jpg"
            alt="Inside a modern tech office in Hyderabad"
            width={900}
            height={600}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-25 filter brightness-75 contrast-110"
          />
          {/* Dark color overlay layer */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#071020] via-[#0E1E3A]/85 to-[#071020]" />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-tight leading-[1.12] mb-8">
            Stop losing your trial signups to silent queues.
          </h2>

          <p className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed mb-10">
            Book your free audit call. You leave with an actionable plan to automate
            trial answers on WhatsApp for your SaaS.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full sm:w-auto">
            <BookingButton />
            <WhatsAppButton
              section="footer"
              utmSource={utmSource}
              variant="dark"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#071020] border-t border-white/10 text-white/70 py-12 pb-24 md:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Logo inverted={true} />

            {/* City */}
            <div className="text-sm font-medium text-white/80">
              Hyderabad
            </div>

            {/* WhatsApp CTA */}
            <div>
              <WhatsAppButton
                section="footer"
                utmSource={utmSource}
                variant="dark"
                size="sm"
              />
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/5 text-center text-xs text-white/40">
            <p>
              Meridian Growth Studio • WhatsApp chat automation for Software and
              SaaS companies
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};
