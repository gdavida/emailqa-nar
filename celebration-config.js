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
    'https://i.ibb.co/S41ykVf1/unicorn1.png',
    'https://i.ibb.co/3XPXYQY/unicorn2.png',
    'https://i.ibb.co/9m8T0QRn/unicorn3.png',
    'https://i.ibb.co/XZ8pwm5C/unicorn4.png',
    'https://i.ibb.co/ycdYHLjB/unicorn5.png',
    'https://i.ibb.co/q3prX5sy/unicorn6.png',
    'https://i.ibb.co/s9gpp3pP/unicorn7.png',
    'https://i.ibb.co/vCM5P8sP/unicorn8.png',
    'https://i.ibb.co/nqrysktR/unicorn9.png',
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
