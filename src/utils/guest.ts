import { invitationConfig } from '../config/invitation';

/**
 * Sanitizes input string to prevent XSS / HTML injection
 * Removes HTML tags, control characters, and limits string length.
 */
export function sanitizeText(input: string, maxLength: number = 60): string {
  if (!input) return '';
  
  // Strip HTML tags
  let cleaned = input.replace(/<[^>]*>/g, '');
  
  // Strip common dangerous script/protocol prefixes
  cleaned = cleaned.replace(/javascript:/gi, '').replace(/data:/gi, '');
  
  // Collapse whitespace
  cleaned = cleaned.replace(/\s+/g, ' ').trim();
  
  // Limit length
  if (cleaned.length > maxLength) {
    cleaned = cleaned.slice(0, maxLength).trim();
  }
  
  return cleaned;
}

/**
 * Safely extracts and decodes the guest name from the URL query parameter `tenkhach`.
 * Returns the sanitized decoded guest name or the default guest name if not present or invalid.
 */
export function getGuestName(): string {
  try {
    if (typeof window === 'undefined') {
      return invitationConfig.defaultGuestName;
    }

    const params = new URLSearchParams(window.location.search);
    const rawGuest = params.get('tenkhach') || params.get('guest');

    if (!rawGuest) {
      return invitationConfig.defaultGuestName;
    }

    // Replace plus signs with spaces and decode URI component
    const decoded = decodeURIComponent(rawGuest.replace(/\+/g, ' ')).trim();
    const sanitized = sanitizeText(decoded, 40);

    if (!sanitized) {
      return invitationConfig.defaultGuestName;
    }

    return sanitized;
  } catch (err) {
    console.error('Error decoding tenkhach parameter:', err);
    return invitationConfig.defaultGuestName;
  }
}

/**
 * Generates an example personalized URL for sharing
 */
export function createPersonalizedUrl(guestName: string): string {
  if (typeof window === 'undefined') {
    return `/?tenkhach=${encodeURIComponent(guestName)}`;
  }
  const url = new URL(window.location.href);
  url.searchParams.set('tenkhach', guestName);
  return url.toString();
}
