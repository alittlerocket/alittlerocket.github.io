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
            'nc1' : "url('/public/assets/images/nc1.png')",
        },
        keyframes: {
            wave: {
                '0%': { marginTop: '0px' },
                '50%': { marginTop: '-5px' },
                '100%': { marginTop: '0px' },
            },
            waveTransform: {
                '0%': { transform: 'translateY(0)' },
                '50%': { transform: 'translateY(-10px)' },
                '100%': { transform: 'translateY(0)' },
            },
            moveCloud: {
                '0%': { backgroundPosition: '0 0' },
                '100%': { backgroundPosition: '-5440px 0'},
            },
        },
        animation: {
            wave: 'wave 5s cubic-bezier(0.42, 0, 0.58, 1) infinite',
            waveTransform: 'waveTransform 5s ease-in-out infinite',
            moveCloud: 'moveCloud 300s linear infinite',
        },
        inset: {
            '-30': '-30px',
        },
      },
    },
    plugins: [],
  }
