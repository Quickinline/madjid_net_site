// tailwind.config.js
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
      // TypeScript
      'plugins/**/*.ts',
      'nuxt.config.ts'
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'madjid-blue-light': '#194092',
        'madjid-blue': '#25336C',
        'madjid-blue-darker': '#141b39'
      },
      spacing: {
        72: '18rem'
      }
    },
    container: {
      center: true
    }
  },
  variants: {
    extend: {
      width: ['hover'],
      fontSize: ['hover']
    }
  },
  plugins: []
}
