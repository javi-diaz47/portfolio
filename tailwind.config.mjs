import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      "black": "#0a0224",
      "white": "#f3effe",
      "primary": "#4518f0",
      "secondary": "#e178f6",
      "secondary-light": "#eecbfc",
      "accent": "#ef42f3",
    },
    fontFamily: {
      sans: ['Inter', ...defaultTheme.fontFamily.sans]
    },
    fontSize: {
      "xs": ["0.625rem", "120%"],
      "sm": ["0.875rem", "120%"],
      "base": ["1.125rem", "120%"],
      "lg": ["1.5rem", "120%"],
      "xl": ["2rem", "120%"],
      "2xl": ["2.6875rem", "120%"],
      "3xl": ["3.5625rem", "120%"],
      "4xl": ["4.75rem", "120%"],
      "5xl": ["6.3125rem", "120%"],
    },

    screens: {
      'tablet': '640px',
      // => @media (min-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }

      'desktop-xl': '1440px',
      // => @media (min-width: 1440px) { ... }

    },
  },
  plugins: [],
}
