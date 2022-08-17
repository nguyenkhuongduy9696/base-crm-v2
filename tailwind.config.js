/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      /** Primary color */
      'primary-weak': '#09e8a2',
      'primary': '#0bc98d',
      'primary-strong': '#0cba83',
      /** Blue */
      'blue-weak': '#1c8aff',
      'blue': '#007bff',
      'blue-strong': '#0070e8',
      /** Indigo */
      'indigo-weak': '#7d35f1',
      'indigo': '#6610f2',
      'indigo-strong': '#590fce',
      /** Purple */
      'purple-weak': '#7851c4',
      'purple': '#6f42c1',
      'purple-strong': '#6835c4',
      /** Pink */
      'pink-weak': '#e35195',
      'pink': '#e83e8c',
      'pink-strong': '#e52c81',
      /** Red */
      'red-weak': '#ef4a62',
      'red': '#ef344f',
      'red-strong': '#eb203d',
      /** Orange */
      'orange-weak': '#fa8f35',
      'orange': '#fd7e14',
      'orange-strong': '#f77608',
      /** Yellow */
      'yellow-weak': '#fac528',
      'yellow': '#ffc107',
      'yellow-strong': '#e5ab01',
      /** Green */
      'green-weak': '#32c054',
      'green': '#28a745',
      'green-strong': '#199f38',
      /** Teal */
      'teal-weak': '#24dfa8',
      'teal': '#20c997',
      'teal-strong': '#1cbc8c',
      /** Cyan */
      'cyan-weak': '#1ab2ca',
      'cyan': '#17a2b8',
      'cyan-strong': '#1692a5',
      /** Gray */
      'gray-weak': '#e3e2e2',
      'gray': '#d4d4d4',
      'gray-strong': '#ababab',
      /** Gray Dark */
      'gray-dark-weak': '#464d55',
      'gray-dark': '#343a40',
      'gray-dark-strong': '#2c3136',
      /** White */
      'white': '#fff',
    }
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
};
