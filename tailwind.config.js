/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      colors: {
        neutral: {
          25: '#FAFAFA',
          50: '#F3F3F3',
          75: 'var(--color-neutral-75)',
          100: 'var(--color-neutral-100)',
          200: '#B6B8B7',
          300: '#ABAEB5'
        },
        primary: {
          DEFAULT: 'var(--semi-color-primary)',
          hover: 'var(--semi-color-primary-hover)',
          active: 'var(--semi-color-primary-active)',
          disabled: 'var(--semi-color-primary-disabled)',
          light: 'var(--semi-color-primary-light-default)',
          'light-hover': 'var(--semi-color-primary-light-hover)',
          'light-active': 'var(--semi-color-primary-light-active)'
        },
        secondary: {
          DEFAULT: 'var(--semi-color-secondary)',
          hover: 'var(--semi-color-secondary-hover)',
          active: 'var(--semi-color-secondary-active)',
          disabled: 'var(--semi-color-secondary-disabled)',
          light: 'var(--semi-color-secondary-light-default)',
          'light-hover': 'var(--semi-color-secondary-light-hover)',
          'light-active': 'var(--semi-color-secondary-light-active)'
        },
        tertiary: {
          DEFAULT: 'var(--semi-color-tertiary)',
          hover: 'var(--semi-color-tertiary-hover)',
          active: 'var(--semi-color-tertiary-active)',
          disabled: 'var(--semi-color-tertiary-disabled)',
          light: 'var(--semi-color-tertiary-light-default)',
          'light-hover': 'var(--semi-color-tertiary-light-hover)',
          'light-active': 'var(--semi-color-tertiary-light-active)'
        },
        info: {
          DEFAULT: 'var(--semi-color-info)',
          hover: 'var(--semi-color-info-hover)',
          active: 'var(--semi-color-info-active)',
          disabled: 'var(--semi-color-info-disabled)',
          light: 'var(--semi-color-info-light-default)',
          'light-hover': 'var(--semi-color-info-light-hover)',
          'light-active': 'var(--semi-color-info-light-active)'
        },
        success: {
          DEFAULT: 'var(--semi-color-success)',
          hover: 'var(--semi-color-success-hover)',
          active: 'var(--semi-color-success-active)',
          disabled: 'var(--semi-color-success-disabled)',
          light: 'var(--semi-color-success-light-default)',
          'light-hover': 'var(--semi-color-success-light-hover)',
          'light-active': 'var(--semi-color-success-light-active)'
        },
        warning: {
          DEFAULT: 'var(--semi-color-warning)',
          hover: 'var(--semi-color-warning-hover)',
          active: 'var(--semi-color-warning-active)',
          disabled: 'var(--semi-color-warning-disabled)',
          light: 'var(--semi-color-warning-light-default)',
          'light-hover': 'var(--semi-color-warning-light-hover)',
          'light-active': 'var(--semi-color-warning-light-active)'
        },
        danger: {
          DEFAULT: 'var(--semi-color-danger)',
          hover: 'var(--semi-color-danger-hover)',
          active: 'var(--semi-color-danger-active)',
          disabled: 'var(--semi-color-danger-disabled)',
          light: 'var(--semi-color-danger-light-default)',
          'light-hover': 'var(--semi-color-danger-light-hover)',
          'light-active': 'var(--semi-color-danger-light-active)'
        },
        text: {
          0: 'var(--semi-color-text-0)',
          1: 'var(--semi-color-text-1)',
          2: 'var(--semi-color-text-2)',
          3: 'var(--semi-color-text-3)'
        },
        link: {
          DEFAULT: 'var(--semi-color-link)',
          hover: 'var(--semi-color-link-hover)',
          active: 'var(--semi-color-link-active)',
          visited: 'var(--semi-color-link-visited)'
        },
        bg: {
          0: 'var(--semi-color-bg-0)',
          1: 'var(--semi-color-bg-1)',
          2: 'var(--semi-color-bg-2)',
          3: 'var(--semi-color-bg-3)',
          4: 'var(--semi-color-bg-4)'
        },
        border: {
          DEFAULT: 'var(--semi-color-border)'
        },
        disabled: {
          text: 'var(--semi-color-disabled-text)',
          bg: 'var(--semi-color-disabled-bg)',
          border: 'var(--semi-color-disabled-border)'
        },
        shadow: {
          DEFAULT: 'var(--semi-color-shadow)'
        }
      },
      boxShadow: {
        DEFAULT: 'var(--semi-shadow-elevated)'
      },
      boxShadowColor: {
        DEFAULT: 'var(--semi-color-border)'
      }
    }
  },
  darkMode: 'class',
  plugins: [require('tailwindcss-animate')]
}
