export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    'flip-card',
    'flip-card-inner',
    'flip-card-front',
    'flip-card-back',
    'flipped',
    'perspective',
    'rotate-y-180',
    'transform-style-preserve-3d',
    'backface-hidden',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
