/**
 * Pure calculator functions for Meridian Growth Studio
 */

export interface CalculatorInputs {
  trialSignupsPerMonth: number;
  leaveWithoutReplyPercent: number;
  planPriceMonthlyInr: number;
}

export interface CalculatorResults {
  lostTrialsPerMonth: number;
  monthlyRevenueLostInr: number;
  annualRevenueLostInr: number;
}

export function calculateTrialLoss(inputs: CalculatorInputs): CalculatorResults {
  const { trialSignupsPerMonth, leaveWithoutReplyPercent, planPriceMonthlyInr } = inputs;
  const safeSignups = Math.max(0, trialSignupsPerMonth);
  const safePercent = Math.min(100, Math.max(0, leaveWithoutReplyPercent));
  const safePrice = Math.max(0, planPriceMonthlyInr);

  const lostTrialsPerMonth = Math.round(safeSignups * (safePercent / 100));
  const monthlyRevenueLostInr = lostTrialsPerMonth * safePrice;
  const annualRevenueLostInr = monthlyRevenueLostInr * 12;

  return {
    lostTrialsPerMonth,
    monthlyRevenueLostInr,
    annualRevenueLostInr,
  };
}

/**
 * Formats a number into Indian Rupee style (e.g. ₹3,50,000)
 */
export function formatInr(amount: number): string {
  const rounded = Math.round(amount);
  return '₹' + new Intl.NumberFormat('en-IN').format(rounded);
}
