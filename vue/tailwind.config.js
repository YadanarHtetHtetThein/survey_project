module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js,vue}",
    './components/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
