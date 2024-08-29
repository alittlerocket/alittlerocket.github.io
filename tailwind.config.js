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
        backgroundImage: {
            'cloud-image': "url('/public/assets/images/cloud.png')",
        },
        keyframes: {
            wave: {
              '0%': { marginTop: '0px' },
              '50%': { marginTop: '-5px' },
              '100%': { marginTop: '0px' },
            },
            moveCloud: {
                '0%': { backgroundPosition: '0 0' },
                '100%': { backgroundPosition: '-5440px 0'},
            },
        },
        animation: {
            wave: 'wave 5s cubic-bezier(0.42, 0, 0.58, 1) infinite',
            moveCloud: 'moveCloud 300s linear infinite',
        },
        width: {
            '105p': '105%',
        },
        inset: {
            '-30': '-30px',
        },
      },
    },
    plugins: [],
  }
