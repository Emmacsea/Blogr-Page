/** @type {import('tailwindcss').Config} */

const path = require(`path`);

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          lightred: "hsl(356, 100%, 66%)",
          vlightred: "hsl(355, 100%, 74%)",
          vdarkblue: "hsl(208, 49%, 24%)",
        },

        neutral: {
          white: "hsl(0, 0%, 100%)",
          grayishblue: "hsl(240, 2%, 79%)",
          vdblackblue: "hsl(240, 10%, 16%)",
          vdgrayishblue: "hsl(207, 13%, 34%)",
        },

        gradient: {
          vlightred: " hsl(13, 100%, 72%)",
          lightred: "hsl(353, 100%, 62%)",
          vdgrayblue: "hsl(237, 17%, 21%)",
          vddesaturateblue: "hsl(237, 23%, 32%)",
        }
      },

      backgroundImage: {
        'header-desk': `url(${path.resolve(__dirname, 'src/assets/images/bg-pattern-intro-desktop.svg')})`,
        'main-desk': `url(${path.resolve(__dirname, 'src/assets/images/bg-pattern-circles.svg')})`,
        'header-mobile': `url(${path.resolve(__dirname, 'src/assets/images/bg-pattern-intro-mobile.svg')})`,
                     
        
      }
    },
  },
  plugins: [],
}

