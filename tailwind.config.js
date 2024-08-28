module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
            'night-start' : '#000033',
            'night-end' : '#000080',
            'day-start' : '#87CEEB',
            'day-end' : '#A0E0FF',
        },
        keyframes: {
            wave: {
              '0%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
              '100%': { transform: 'translateY(0)' },
            },
        },
        animation: {
            wave: 'wave 5s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
