/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useMemo } from 'react';
import { TopBar } from './components/TopBar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { WhatChanges } from './components/WhatChanges';
import { SampleBuilds } from './components/SampleBuilds';
import { Calculator } from './components/Calculator';
import { HowItWorks } from './components/HowItWorks';
import { Founder } from './components/Founder';
import { AuditPanel } from './components/AuditPanel';
import { Questions } from './components/Questions';
import { Closing } from './components/Closing';
import { StickyMobileBar } from './components/StickyMobileBar';
import { getUtmSource } from './utils/whatsapp';

export default function App() {
  const utmSource = useMemo(() => {
    if (typeof window !== 'undefined') {
      return getUtmSource(window.location.search);
    }
    return 'direct';
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[#F2F5FA] text-[#0E1E3A] font-body selection:bg-[#8FD3FF] selection:text-[#0E1E3A]">
      {/* 1. Top Bar */}
      <TopBar />

      <main className="flex-1">
        {/* 2. Hero */}
        <Hero utmSource={utmSource} />

        {/* 3. Marquee */}
        <Marquee />

        {/* 4. What Changes For You */}
        <WhatChanges />

        {/* 5. Sample Builds */}
        <SampleBuilds />

        {/* 6. Proof: Loss Calculator */}
        <Calculator utmSource={utmSource} />

        {/* 7. How It Works */}
        <HowItWorks />

        {/* 8. Founder */}
        <Founder utmSource={utmSource} />

        {/* 9. Free Audit Call */}
        <AuditPanel utmSource={utmSource} />

        {/* 10. Questions */}
        <Questions />

        {/* 11. Closing & Footer */}
        <Closing utmSource={utmSource} />
      </main>

      {/* Sticky Mobile Bar on Phone */}
      <StickyMobileBar utmSource={utmSource} />
    </div>
  );
}
