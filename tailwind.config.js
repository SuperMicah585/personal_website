/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        redhat: ['"Cinzel"', 'sans-serif'], // Custom font family
        termina: ['Termina', 'sans-serif'],
        moret: ['Moret', 'serif'],
      },
      transitionDuration: {
        '2000': '2000ms',
      },
      colors: {
        'smoke-gray': '#1B1B1B',
        'jet': '#000401',
      },
      maxHeight: {
        '600': '600px',
      },
      fontWeight: {
        1400: '1400', // Custom font weight
      },
    },
  },
  plugins: [],
};
