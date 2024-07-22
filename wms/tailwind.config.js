module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'landing-page': "url('./src/assets/homepageBackground.png')",
      },

      // colors: {
      //   placeholderColor: '#7BA5C9',
      // },
    },
  },

  plugins: [
    // function({ addUtilities }) {
    //   addUtilities({
    //     '.placeholder-center': {
    //       'text-align': 'center',
    //     },
    //     '.placeholder-custom': {
    //       '::placeholder': {
    //         color: '#7BA5C9', // Custom placeholder color
    //         'text-align': 'center', // Centered placeholder text
    //       },
    //     },
    //   }, ['responsive', 'hover']);
    // },
  ]
}

