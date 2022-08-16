/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      'weak': '#6d6e6f',
      'blue': '#007bff',
      'indigo': '#6610f2',
      'purple': '#6f42c1',
      'pink': '#e83e8c',
      'red': '#fd556d',
      'orange': '#fd7e14',
      'yellow': '#ffc107',
      'green': '#28a745',
      'teal': '#20c997',
      'cyan': '#17a2b8',
      'white': '#fff',
      'gray': '#969696',
      'gray-dark': '#343a40',
      'primary': '#0bc98d',
      'primary-strong': '#0cba83',
      'secondary': '#6c757d',
      'success': '#28a745',
      'info': '#17a2b8',
      'warning': '#ffc107',
      'danger': '#dc3545',
      'light': '#f8f9fa',
      'dark': '#343a40',
    }
  },
  plugins: [],
  purge: [
    './src/**/*.html',
    './src/**/*.js',
    './src/**/*.jsx',
  ],
};
