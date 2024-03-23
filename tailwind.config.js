// module.exports = {
//   content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // ...
    'node_modules/flowbite-react/lib/esm/**/*.js',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  plugins: [
    // ...
    require('flowbite/plugin'),
  ],
  theme: {
    colors: {
      'primary': '#260c1a',
      'primary-hover': '#3e142a',
      'secondary': '#DE9E36',
      'light': '#FBF5F3',
      'successs': '#091E05',
      'error': '#A4031F',
    }
  }
};
