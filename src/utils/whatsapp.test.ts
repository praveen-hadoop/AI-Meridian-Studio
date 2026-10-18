import test from 'node:test';
import assert from 'node:assert/strict';
import { getUtmSource, buildWhatsAppUrl, WHATSAPP_PHONE } from './whatsapp.ts';

test('getUtmSource parses query strings and handles defaults', () => {
  assert.equal(getUtmSource('?utm_source=linkedin'), 'linkedin');
  assert.equal(getUtmSource('?utm_source=TWITTER'), 'twitter');
  assert.equal(getUtmSource('?foo=bar'), 'direct');
  assert.equal(getUtmSource(''), 'direct');
  assert.equal(getUtmSource(null), 'direct');
});

test('buildWhatsAppUrl includes correct message, src tag, and utm tag', () => {
  const heroUrl = buildWhatsAppUrl('hero', 'direct');
  assert.match(heroUrl, new RegExp(`^https://wa\\.me/${WHATSAPP_PHONE}\\?text=`));
  const decodedHero = decodeURIComponent(heroUrl);
  assert.match(decodedHero, /\[src:hero\]/);
  assert.match(decodedHero, /\[via:direct\]/);

  const calcUrl = buildWhatsAppUrl('calculator', 'linkedin');
  const decodedCalc = decodeURIComponent(calcUrl);
  assert.match(decodedCalc, /\[src:calculator\]/);
  assert.match(decodedCalc, /\[via:linkedin\]/);

  const founderUrl = buildWhatsAppUrl('founder', 'direct');
  const decodedFounder = decodeURIComponent(founderUrl);
  assert.match(decodedFounder, /\[src:founder\]/);

  const auditUrl = buildWhatsAppUrl('audit', 'newsletter');
  const decodedAudit = decodeURIComponent(auditUrl);
  assert.match(decodedAudit, /\[src:audit\]/);
  assert.match(decodedAudit, /\[via:newsletter\]/);

  const footerUrl = buildWhatsAppUrl('footer', 'direct');
  const decodedFooter = decodeURIComponent(footerUrl);
  assert.match(decodedFooter, /\[src:footer\]/);
});
