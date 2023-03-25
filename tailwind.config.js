const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '475px',
      // => @media (min-width: 640px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        primary: ['var(--font-upakarti)', fontFamily.sans],
        secondary: ['var(--font-montserrat)', fontFamily.sans],
      },
      colors: {
        success: {
          100: '#E8F0E0',
          200: '#D8E6CB',
          300: '#C4D9B1',
          400: '#B1CC98',
          500: '#9DBF7D',
          600: '#8AB364',
          700: '#739553',
          800: '#5C7743',
          900: '#455A32',
          1000: '#2E3C21',
        },
        critical: {
          100: '#F7DBDB',
          200: '#F2C3C4',
          300: '#EBA4A6',
          400: '#E58688',
          500: '#DE686B',
          600: '#D84A4D',
          700: '#B43E40',
          800: '#903133',
          900: '#6C2527',
          1000: '48191A',
        },
        warning: {
          100: '#FFEFCC',
          200: '#FFE5AA',
          300: '#FED880',
          400: '#FECB55',
          500: '#FEBE2B',
          600: '#FEB100',
          700: '#D49300',
          800: '#A97600',
          900: '#7F5900',
          1000: '#553B00',
        },
        tainted: {
          100: '#faf2dd',
          200: '#f7eac6',
          300: '#f3dfaa',
          400: '#efd58e',
          500: '#ebca71',
          600: '#e7c055',
          700: '#c0a047',
          800: '#9a8039',
          900: '#74602b',
          1000: '#4d401c',
        },
        discolored: {
          100: '#e6e4e0',
          200: '#d5d1cc',
          300: '#c0bab2',
          400: '#aba498',
          500: '#968d7f',
          600: '#817665',
          700: '#6c6254',
          800: '#564f43',
          900: '#413b33',
          1000: '#2b2722',
        },
        olive: {
          100: '#e2e4db',
          200: '#cfd3c3',
          300: '#b7bca5',
          400: '#9fa688',
          500: '#87906a',
          600: '#6f7a4c',
          700: '#5d663f',
          800: '#4a5133',
          900: '#383d26',
          1000: '#252919',
        },

        turquoise: {
          100: '#d9dee0',
          200: '#c0c9cb',
          300: '#a0adb1',
          400: '#809297',
          500: '#61777d',
          600: '#415c63',
          700: '#364d53',
          800: '#2b3d42',
          900: '#212e32',
          1000: '#161f21',
        },
        navy: {
          100: '#e0e5ec',
          200: '#ccd4e0',
          300: '#b2bed0',
          400: '#99a8c0',
          500: '#8093b1',
          600: '#667da1',
          700: '#556886',
          800: '#44536b',
          900: '#333f51',
          1000: '#222a36',
        },

        typo: {
          DEFAULT: 'black',
          surface: '#F9FAFB',
          light: '#F0F2F5',
          outline: '#E4E7EB',
          inline: '#D1D5DC',
          icon: '#9AA2B1',
          secondary: '#687083',
          label: '#1A3650',
          primary: '#092540',
          white: '#fff',
        },

        // Bertahap akan dihapus
        primary: {
          100: '#F1F1FE',
          200: '#DFDFFD',
          300: '#C0C0FC',
          400: '#8685F2',
          500: '#5F5EEA',
          600: '#5555D3',
          700: '#504FC5',
          800: '#3F3EAD',
        },
        outline: {
          DEFAULT: '#E6E6E5',
          base: '#D3D6CC',
          button: '#BCBCBC',
        },
        surface: {
          background: '#EFF0EA',
          base: '#FBFAF8',
          card: '#FFFFFF',
          textfield: '#F1F1ED',
          hover: '#F3F3F1',
          pressed: '#E9EBE2',
        },
      },
      boxShadow: {
        pendaftaran:
          '0px 0.5px 2px rgba(65, 78, 98, 0.12), 0px 0px 1px rgba(65, 78, 98, 0.05)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
