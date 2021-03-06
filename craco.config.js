module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  babel: {
    presets: ['@babel/preset-react'],
    plugins: [],
  },
  jest: {
    babel: {
      addPresets: true,
      addPlugins: true,
    },
  },
}
