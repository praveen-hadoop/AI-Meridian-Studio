import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateTrialLoss, formatInr } from './calculator.ts';

test('calculateTrialLoss computes loss correctly for standard example', () => {
  const result = calculateTrialLoss({
    trialSignupsPerMonth: 200,
    leaveWithoutReplyPercent: 35,
    planPriceMonthlyInr: 5000,
  });

  // 200 * 0.35 = 70 lost trials
  assert.equal(result.lostTrialsPerMonth, 70);
  // 70 * 5000 = 350,000 INR
  assert.equal(result.monthlyRevenueLostInr, 350000);
  // 350,000 * 12 = 4,200,000 INR
  assert.equal(result.annualRevenueLostInr, 4200000);
});

test('calculateTrialLoss handles zero and boundary cases safely', () => {
  const zeroResult = calculateTrialLoss({
    trialSignupsPerMonth: 0,
    leaveWithoutReplyPercent: 50,
    planPriceMonthlyInr: 1000,
  });
  assert.equal(zeroResult.lostTrialsPerMonth, 0);
  assert.equal(zeroResult.monthlyRevenueLostInr, 0);
  assert.equal(zeroResult.annualRevenueLostInr, 0);

  const edgeResult = calculateTrialLoss({
    trialSignupsPerMonth: 100,
    leaveWithoutReplyPercent: 100,
    planPriceMonthlyInr: 1000,
  });
  assert.equal(edgeResult.lostTrialsPerMonth, 100);
  assert.equal(edgeResult.monthlyRevenueLostInr, 100000);
  assert.equal(edgeResult.annualRevenueLostInr, 1200000);
});

test('formatInr formats Indian currency with comma grouping', () => {
  assert.equal(formatInr(350000), '₹3,50,000');
  assert.equal(formatInr(4200000), '₹42,00,000');
  assert.equal(formatInr(0), '₹0');
});
