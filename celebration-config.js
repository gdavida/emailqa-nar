/**
 * Celebration Config
 * 
 * Customize the celebration graphics here!
 * Swap unicorns for holidays, add new images, change confetti colors, etc.
 */

const CELEBRATION_CONFIG = {
  // Unicorn images - one will be randomly selected
  // Add more URLs to the array, or swap them out for holidays!
  unicorns: [
    'images/unicorn1.png',
    'images/unicorn2.png',
    'images/unicorn3.png',
    'images/unicorn4.png',
    'images/unicorn5.png',
    'images/unicorn6.png',
    'images/unicorn7.png',
    'images/unicorn8.png',
    'images/unicorn9.png',
  ],

  // Seasonal unicorns - MIXED IN with the regular ones during their date range.
  // Dates are 'MM-DD' and inclusive. Outside the range they simply aren't used.
  seasonal: [
    {
      name: 'fall',
      start: '09-01',
      end: '11-30',
      images: [
        'images/fall/fall1.png',
        'images/fall/fall2.png',
        'images/fall/fall3.png',
        'images/fall/fall4.png',
      ],
    },
    {
      name: 'christmas',
      start: '12-01',
      end: '12-31',
      images: [
        'images/christmas/christmas1.png',
        'images/christmas/christmas2.png',
        'images/christmas/christmas3.png',
        'images/christmas/christmas4.png',
        'images/christmas/christmas5.png',
        'images/christmas/christmas6.png',
        'images/christmas/christmas7.png',
        'images/christmas/christmas8.png',
        'images/christmas/christmas9.png',
        'images/christmas/christmas10.png',
        'images/christmas/christmas11.png',
      ],
    },
    {
      name: 'newyear',
      start: '12-26',
      end: '01-02', // wraps past New Year
      images: [
        'images/newyear/newyear1.png',
      ],
    },
  ],

  // Confetti colors - bright pastels that work on light and dark modes
  confettiColors: [
    '#818cf8', // indigo
    '#4ade80', // green
    '#fbbf24', // amber
    '#f472b6', // pink
    '#60a5fa', // blue
    '#a78bfa', // purple
    '#fb7185', // rose
    '#34d399', // emerald
    '#facc15', // yellow
    '#c084fc', // violet
  ],

  // Number of confetti pieces
  confettiCount: 150,

  // Messages - one will be randomly selected
  // Use {name} for the person's first name
  messages: [
    { title: '✨ Nice work, {name}! ✨', style: 'rainbow' },
    { title: '💅 Nailed it, {name}!', style: 'rainbow' },
    { title: '⭐ Rainbow star for {name}!', style: 'rainbow' },
    { title: '⭐ Gold star for {name}!', style: 'gold' },
    { title: '👑 You\'re a QA queen!', style: 'rainbow' },
    { title: '💫 You\'re a star, {name}!', style: 'rainbow' },
    { title: '🦄 Legendary QA work, {name}!', style: 'rainbow' },
    { title: '🔥 You\'re on fire, {name}!', style: 'rainbow' },
    { title: '👏 Bravo, {name}!', style: 'rainbow' },
    { title: '🎸 Thanks {name}! You\'re a Rockstar!', style: 'rainbow' },
    { title: '🥇 Top-tier work, {name}!', style: 'gold' },
  ],

  subtitle: 'QA submitted successfully!',
  fallbackName: 'QA Hero',

  /* ========================================
   * HOLIDAY PRESETS
   * Uncomment a preset to use it, or create your own!
   * ======================================== */

  // // Halloween 🎃
  // unicorns: ['https://your-ghost-url.png', 'https://your-pumpkin-url.png'],
  // confettiColors: ['#ff6b00', '#8b00ff', '#000000', '#ffff00'],
  // messages: [{ title: '🎃 Spooky QA, {name}! 👻', style: 'rainbow' }],

  // // Christmas 🎄
  // unicorns: ['https://your-reindeer-url.png', 'https://your-santa-url.png'],
  // confettiColors: ['#ff0000', '#00ff00', '#ffffff', '#ffd700'],
  // messages: [{ title: '🎄 Ho ho ho, {name}! 🎅', style: 'rainbow' }],
};

// Mix any in-season unicorns into the regular pool (based on today's date)
(function () {
  const now = new Date();
  const today = String(now.getMonth() + 1).padStart(2, '0') + '-' + String(now.getDate()).padStart(2, '0');
  (CELEBRATION_CONFIG.seasonal || []).forEach(function (season) {
    const inSeason = season.start <= season.end
      ? today >= season.start && today <= season.end
      : today >= season.start || today <= season.end; // wraps past New Year
    if (inSeason) CELEBRATION_CONFIG.unicorns = CELEBRATION_CONFIG.unicorns.concat(season.images);
  });
})();
