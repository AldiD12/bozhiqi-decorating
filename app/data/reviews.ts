/**
 * Central source of truth for all review / trust signal numbers.
 * Update this file when scores or counts change — nowhere else needs touching.
 */
export const reviews = {
  checkatrade: {
    score: '9.78',
    outOf: '10',
    count: 55,
    url: 'https://www.checkatrade.com/trades/bozhiqi',
    /** e.g. "9.78/10 on Checkatrade from 55 reviews" */
    summary: '9.78/10 on Checkatrade from 55 reviews',
    /** e.g. "9.78/10 Checkatrade (55 reviews)" */
    short: '9.78/10 Checkatrade',
    /** e.g. "9.78/10 from 55 reviews" */
    badge: '9.78/10 from 55 reviews',
  },
  google: {
    score: '5.0',
    outOf: '5',
    /** Number of Google reviews surfaced in schema */
    count: 7,
    /** e.g. "★★★★★ 5.0 Google" */
    short: '★★★★★ 5.0 Google (7 reviews)',
  },
  yearsExperience: 15,
} as const;
