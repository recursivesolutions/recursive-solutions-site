import { describe, it, expect } from 'vitest';
import { PORTFOLIO_APPS } from './portfolio';

describe('Portfolio Apps Data', () => {
  it('contains exactly 3 portfolio applications', () => {
    expect(PORTFOLIO_APPS).toHaveLength(3);
  });

  it('contains the SA Learner Driver Logbook with required features', () => {
    const logbook = PORTFOLIO_APPS.find((app) => app.id === 'sa-learner-logbook');
    expect(logbook).toBeDefined();
    expect(logbook?.title).toBe('SA Learner Driver Logbook');
    expect(logbook?.imageCount).toBeGreaterThan(0);

    const featureTitles = logbook?.features.map((f) => f.title) ?? [];
    expect(featureTitles).toContain('Live Drive Tracking');
    expect(featureTitles).toContain('Day & Night Auto-Categorization');
    expect(featureTitles).toContain('Supervisor Management');
    expect(featureTitles).toContain('Manual Log Entry');
  });

  it('contains the YouTube Playlist Manager with smart duplicate resolution', () => {
    const ytApp = PORTFOLIO_APPS.find((app) => app.id === 'youtube-playlist-manager');
    expect(ytApp).toBeDefined();
    expect(ytApp?.title).toBe('YouTube Playlist Manager');
    expect(ytApp?.description).toContain('YouTube');
    expect(ytApp?.imageCount).toBeGreaterThan(0);
  });

  it('contains the Lunar Calendar Companion with bilingual features', () => {
    const lunarApp = PORTFOLIO_APPS.find((app) => app.id === 'lunar-calendar-companion');
    expect(lunarApp).toBeDefined();
    expect(lunarApp?.title).toBe('Lunar Calendar Companion');
    expect(lunarApp?.imageCount).toBeGreaterThan(0);

    const featureTitles = lunarApp?.features.map((f) => f.title) ?? [];
    expect(featureTitles).toContain('Dual Calendar Grid');
    expect(featureTitles).toContain('Traditional Almanac (老黄历)');
    expect(featureTitles).toContain('Comprehensive Holiday Tracker');
    expect(featureTitles).toContain('Bilingual Localization');
  });
});
