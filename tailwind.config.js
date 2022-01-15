module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'round-pattern': "url('/src/assets/img/round-pattern.png')",
        'food-pattern': "url('/src/assets/img/food-pattern.png')",
      },
      colors: {
        'electric-violet-start': '#4776E6',
        'electric-violet-end': '#8E54E9',
        'gd-stripe-start': '#1FA2FF',
        'gd-stripe-middle': '#12D8FA',
        'gd-stripe-end': '#A6FFCB',
      },
    },
  },
  plugins: [],
};
