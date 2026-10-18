import React, { useState } from 'react';
import { motion } from 'motion/react';
import { calculateTrialLoss, formatInr } from '../utils/calculator';
import { BookingButton, WhatsAppButton } from './Buttons';
import { TrendingDown, HelpCircle } from 'lucide-react';

interface CalculatorProps {
  utmSource: string;
}

export const Calculator: React.FC<CalculatorProps> = ({ utmSource }) => {
  const [signups, setSignups] = useState<number>(200);
  const [leaveShare, setLeaveShare] = useState<number>(35);
  const [planPrice, setPlanPrice] = useState<number>(5000);

  const results = calculateTrialLoss({
    trialSignupsPerMonth: signups,
    leaveWithoutReplyPercent: leaveShare,
    planPriceMonthlyInr: planPrice,
  });

  return (
    <section id="calculator" className="py-20 lg:py-28 bg-[#F2F5FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-xs uppercase tracking-widest font-bold text-[#0E1E3A]/60 mb-3">
            Proof
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-[#0E1E3A] tracking-tight leading-[1.15]">
            What unanswered trial users cost you
          </h2>
        </div>

        {/* 24px rounded card layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sliders Panel */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-8 sm:p-10 border border-[#0E1E3A]/8 shadow-sm">
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#0E1E3A]/8">
              <span className="text-sm font-heading font-bold uppercase tracking-wider text-[#0E1E3A]">
                Your numbers
              </span>
              <span className="text-xs text-[#0E1E3A]/60">
                Move sliders to adjust
              </span>
            </div>

            <div className="space-y-8">
              {/* Slider 1: Trial signups a month */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="slider-signups"
                    className="text-sm sm:text-base font-semibold text-[#0E1E3A]"
                  >
                    Trial signups a month
                  </label>
                  <span className="font-heading font-bold text-lg text-[#0E1E3A] bg-[#F2F5FA] px-3 py-1 rounded-lg">
                    {signups.toLocaleString('en-IN')}
                  </span>
                </div>
                <input
                  id="slider-signups"
                  type="range"
                  min="20"
                  max="1000"
                  step="10"
                  value={signups}
                  onChange={(e) => setSignups(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1E3A]"
                />
                <div className="flex justify-between text-xs text-[#0E1E3A]/50 mt-1.5 font-medium">
                  <span>20</span>
                  <span>500</span>
                  <span>1,000</span>
                </div>
              </div>

              {/* Slider 2: Share who leave without getting a reply */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="slider-leaveshare"
                    className="text-sm sm:text-base font-semibold text-[#0E1E3A]"
                  >
                    Share who leave without getting a reply
                  </label>
                  <span className="font-heading font-bold text-lg text-[#0E1E3A] bg-[#F2F5FA] px-3 py-1 rounded-lg">
                    {leaveShare}%
                  </span>
                </div>
                <input
                  id="slider-leaveshare"
                  type="range"
                  min="5"
                  max="80"
                  step="5"
                  value={leaveShare}
                  onChange={(e) => setLeaveShare(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1E3A]"
                />
                <div className="flex justify-between text-xs text-[#0E1E3A]/50 mt-1.5 font-medium">
                  <span>5%</span>
                  <span>40%</span>
                  <span>80%</span>
                </div>
              </div>

              {/* Slider 3: Your plan price per month in Indian rupees (₹) */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label
                    htmlFor="slider-price"
                    className="text-sm sm:text-base font-semibold text-[#0E1E3A]"
                  >
                    Your plan price per month
                  </label>
                  <span className="font-heading font-bold text-lg text-[#0E1E3A] bg-[#F2F5FA] px-3 py-1 rounded-lg">
                    {formatInr(planPrice)}
                  </span>
                </div>
                <input
                  id="slider-price"
                  type="range"
                  min="1000"
                  max="30000"
                  step="500"
                  value={planPrice}
                  onChange={(e) => setPlanPrice(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0E1E3A]"
                />
                <div className="flex justify-between text-xs text-[#0E1E3A]/50 mt-1.5 font-medium">
                  <span>₹1,000</span>
                  <span>₹15,000</span>
                  <span>₹30,000</span>
                </div>
              </div>
            </div>
          </div>

          {/* Results Card */}
          <div className="lg:col-span-5 bg-[#0E1E3A] text-white rounded-[24px] p-8 sm:p-10 shadow-lg flex flex-col justify-between border border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-6 text-[#8FD3FF]">
                <TrendingDown className="w-5 h-5 stroke-[2.5]" />
                <span className="text-xs uppercase font-bold tracking-wider">
                  Estimated subscription revenue lost
                </span>
              </div>

              <div className="space-y-6">
                {/* Monthly Loss */}
                <div className="p-6 rounded-2xl bg-[#162a4d] border border-white/5">
                  <p className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-1">
                    Revenue lost a month
                  </p>
                  <motion.div
                    key={results.monthlyRevenueLostInr}
                    initial={{ opacity: 0.7, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-3xl sm:text-4xl font-heading font-bold text-[#8FD3FF] tracking-tight"
                  >
                    {formatInr(results.monthlyRevenueLostInr)}
                  </motion.div>
                  <p className="text-xs text-white/50 mt-1">
                    About {results.lostTrialsPerMonth} unanswered signups leaving
                    each month
                  </p>
                </div>

                {/* Annual Loss */}
                <div className="p-6 rounded-2xl bg-[#162a4d] border border-white/5">
                  <p className="text-xs uppercase tracking-wider text-white/60 font-semibold mb-1">
                    Revenue lost a year
                  </p>
                  <motion.div
                    key={results.annualRevenueLostInr}
                    initial={{ opacity: 0.7, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-3xl sm:text-4xl font-heading font-bold text-white tracking-tight"
                  >
                    {formatInr(results.annualRevenueLostInr)}
                  </motion.div>
                  <p className="text-xs text-white/50 mt-1">
                    Compounded over 12 months of unanswered trial signups
                  </p>
                </div>
              </div>

              {/* Exact required line: "Your estimate. We go through it on the free audit call." */}
              <div className="flex items-start gap-2.5 mt-6 pt-6 border-t border-white/10">
                <HelpCircle className="w-4 h-4 text-[#8FD3FF] shrink-0 mt-0.5" />
                <p className="text-xs text-white/70 leading-relaxed">
                  Your estimate. We go through it on the free audit call.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-8">
              <BookingButton />
              <WhatsAppButton
                section="calculator"
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
