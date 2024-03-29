module.exports = {
  content: ['index.html'],
  theme: {
    container:  {
      center: true,
      padding: '16px',
    },
    extend: {
      fontFamily:{
        lora: "'Lora', serif",
        mono: "'DM Mono', monospace",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
