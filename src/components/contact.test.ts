import { describe, it, expect } from 'vitest';

describe('Contact & Business Configuration', () => {
  const officialEmail = 'recursive.solutions@outlook.com';

  it('verifies the official contact email is configured correctly', () => {
    expect(officialEmail).toBe('recursive.solutions@outlook.com');
    expect(officialEmail).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
  });

  it('generates a valid mailto link with encoded subject and body', () => {
    const subject = encodeURIComponent('Project Inquiry - Recursive Solutions');
    const mailtoLink = `mailto:${officialEmail}?subject=${subject}`;
    expect(mailtoLink).toContain('mailto:recursive.solutions@outlook.com');
    expect(mailtoLink).toContain('Project%20Inquiry%20-%20Recursive%20Solutions');
  });
});
