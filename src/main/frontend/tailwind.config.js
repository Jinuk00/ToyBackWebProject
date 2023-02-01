module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        back2p:"#DCEBFF"
      },
      fontFamily:{
        singleDay:["SingleDayTf",]
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
