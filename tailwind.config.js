/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-primary": "#01010A", // Very dark background
        "neon-green": "#39FF14", // Bright neon green
        "neon-blue": "#00FFFF",  // Bright neon blue
        "text-light": "#E0E0E0", // Light gray for general text
        "text-muted": "#A0A0A0", // Muted gray for secondary text
        "border-dark": "#1A1A2E", // Darker border
      },
      fontFamily: {
        // You can use a more 'terminal' like font if desired, e.g., 'Roboto Mono'
        sans: ['"Lato"', 'sans-serif'],
        mono: ['"Roboto Mono"', 'monospace'],
        heading: ['"Montserrat"', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-out forwards',
        'pulse-light': 'pulseLight 2s infinite',
        'border-pulse-green': 'borderPulseGreen 3s infinite ease-in-out',
        'border-pulse-blue': 'borderPulseBlue 3s infinite ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseLight: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
        borderPulseGreen: {
          '0%, 100%': { borderColor: '#39FF14' },
          '50%': { borderColor: '#00FFFF' },
        },
        borderPulseBlue: {
          '0%, 100%': { borderColor: '#00FFFF' },
          '50%': { borderColor: '#39FF14' },
        },
      },
      boxShadow: {
        'neon-green': '0 0 15px rgba(57, 255, 20, 0.7)',
        'neon-blue': '0 0 15px rgba(0, 255, 255, 0.7)',
      }
    },
  },
  plugins: [],
};
