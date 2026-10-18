/**
 * WhatsApp link generation with source and UTM attribution
 */

export type WhatsAppSection = 'hero' | 'calculator' | 'founder' | 'audit' | 'footer';

const SECTION_MESSAGES: Record<WhatsAppSection, string> = {
  hero: 'Hi Praveen, I saw your website (hero). I want to stop losing trial users. [src:hero]',
  calculator: 'Hi Praveen, I tried your trial cost calculator. Can we talk about my numbers? [src:calculator]',
  founder: 'Hi Praveen, I read about you on your website. [src:founder]',
  audit: 'Hi Praveen, I want a free audit of my trial replies. [src:audit]',
  footer: 'Hi Praveen, I found Meridian Growth Studio online. [src:footer]',
};

export const WHATSAPP_PHONE = '919703655250';
export const CAL_BOOKING_URL = 'https://cal.com/aa-kumar-yfev6u/trial-reply-audit';

/**
 * Extracts utm_source from query string or URLSearchParams.
 * Defaults to 'direct' if not provided or empty.
 */
export function getUtmSource(searchParams?: URLSearchParams | string | null): string {
  if (!searchParams) return 'direct';
  const params = typeof searchParams === 'string' ? new URLSearchParams(searchParams) : searchParams;
  const raw = params.get('utm_source');
  if (!raw) return 'direct';
  const clean = raw.trim().toLowerCase();
  return clean.length > 0 ? clean : 'direct';
}

/**
 * Builds the WhatsApp URL with pre-filled message and tracking tags.
 */
export function buildWhatsAppUrl(section: WhatsAppSection, utmSource: string = 'direct'): string {
  const baseMessage = SECTION_MESSAGES[section];
  const fullMessage = `${baseMessage} [via:${utmSource}]`;
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(fullMessage)}`;
}
