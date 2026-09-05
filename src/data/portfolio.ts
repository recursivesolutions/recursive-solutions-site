import { PortfolioApp } from '../types';

export const PORTFOLIO_APPS: PortfolioApp[] = [
  {
    id: 'sa-learner-logbook',
    title: 'SA Learner Driver Logbook',
    tagline: 'Smart, effortless driving hour tracking and management.',
    description: 'A smart, effortless logbook to track, manage, and back up driving hours for South Australian Learner Drivers.',
    features: [
      { title: 'Live Drive Tracking', description: 'Automatically record driving sessions with a one-tap start, pause, and stop timer.' },
      { title: 'Day & Night Auto-Categorization', description: 'Seamlessly tracks and separates daytime and nighttime driving minutes to help you meet your specific SA logbook requirements.' },
      { title: 'Supervisor Management', description: 'Create and manage profiles for your driving instructors and parents, and easily assign them to individual driving sessions.' },
      { title: 'Manual Log Entry', description: 'Quickly backdate and add previous drives using an intuitive date, time, and duration picker.' },
      { title: 'Cloud Auto-Backup', description: 'Keep your records secure with automatic, seamless syncing to Google Drive every time you finish a drive.' },
      { title: 'CSV Export & Import', description: 'Export your entire driving history to a local CSV file for easy printing, spreadsheet viewing, or transferring between devices.' },
      { title: 'Offline-First & Secure', description: 'All data is stored locally on your device for fast, private access anywhere—no constant internet connection required.' }
    ],
    imageCount: 3
  },
  {
    id: 'youtube-playlist-manager',
    title: 'YouTube Playlist Manager',
    tagline: 'Organize and declutter your video collections.',
    description: 'A dedicated YouTube playlist manager. Supports organizing, decluttering, and managing your YouTube playlists with smart duplicate resolution.',
    features: [
      { title: 'Playlist Organization', description: 'Easily organize and structure your saved videos and playlists.' },
      { title: 'Smart Duplicate Resolution', description: 'Automatically detect and resolve duplicate videos across your playlists.' },
      { title: 'Decluttering Tools', description: 'Quickly remove unwanted or unavailable videos to keep your collections clean.' }
    ],
    imageCount: 3
  },
  {
    id: 'lunar-calendar-companion',
    title: 'Lunar Calendar Companion',
    tagline: 'Traditional Chinese lunar dates and almanac insights.',
    description: 'Seamlessly track traditional Chinese lunar dates, intricate almanac insights, and official statutory holidays in one elegant, bilingual calendar companion.',
    features: [
      { title: 'Dual Calendar Grid', description: 'An interactive monthly view displaying standard Gregorian dates alongside their accurate Chinese Lunar date equivalents.' },
      { title: 'Traditional Almanac (老黄历)', description: 'Daily insights into auspicious (宜) and inauspicious (忌) activities based on traditional Chinese calendar wisdom.' },
      { title: 'Comprehensive Holiday Tracker', description: 'A dedicated screen categorized into Popular Traditional Festivals, the 24 Solar Terms (二十四节气), and official Statutory Holidays (法定假日).' },
      { title: 'Bilingual Localization', description: 'A seamless toggle in the settings to switch the entire application interface, including holiday names and solar terms, between Simplified Chinese and English.' },
      { title: 'Dynamic Font Scaling', description: 'Full support for Android\'s system font size preferences, plus a custom in-app slider to manually scale the text size (0.8x to 1.5x) for perfect accessibility and readability without breaking the layout.' },
      { title: 'Modern Material 3 Design', description: 'A clean, edge-to-edge Android user interface built with Jetpack Compose, featuring smooth navigation and responsive typography constraints.' }
    ],
    imageCount: 4
  }
];
